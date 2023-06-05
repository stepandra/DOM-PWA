import Safe, {
  EthersAdapter,
  SafeAccountConfig,
  SafeFactory,
  encodeSetupCallData,
  getProxyFactoryContract,
  getSafeContract,
} from '@safe-global/protocol-kit';
import { GelatoRelayPack } from '@safe-global/relay-kit';
import { RelayTransaction } from '@safe-global/safe-core-sdk-types';
import { Signer } from '@/hooks/useAuth';
import pollRelayTaskStatus from './infra/pollRelayTaskStatus';

const deploySafe = async (
    ethAdapter: EthersAdapter,
    signer: Signer,
    relayAdapter: GelatoRelayPack,
) => {
  console.log('Deploying a new Safe...');
  const safeFactory = await SafeFactory.create({ ethAdapter });

  const safeVersion = safeFactory.getSafeVersion();
  const chainId = await ethAdapter.getChainId();

  const safeProxyFactoryContract = await getProxyFactoryContract({
    ethAdapter,
    safeVersion,
  });

  const safeContract = await getSafeContract({
    ethAdapter,
    safeVersion,
  });

  const safeAccountConfig: SafeAccountConfig = {
    owners: [ await signer.getAddress() ],
    threshold: 1,
  };

  const initializer = await encodeSetupCallData({
    ethAdapter,
    safeAccountConfig,
    safeContract,
  });

  const nonce = (
    Date.now() * 1000 + Math.floor(Math.random() * 1000)
  ).toString();

  const safeAddress =
    await safeFactory.predictSafeAddress(safeAccountConfig, nonce);

  const encodedCreateProxyWithNonce =
    safeProxyFactoryContract.encode('createProxyWithNonce', [
      safeContract.getAddress(),
      initializer,
      nonce,
    ]);

  console.log('Creating gasless transaction...');
  const relayTransaction: RelayTransaction = {
    target: safeFactory.getAddress(),
    encodedTransaction: encodedCreateProxyWithNonce,
    chainId,
    options: {
      gasLimit: '100000',
      isSponsored: true,
    },
  };

  const { taskId } = await relayAdapter.relayTransaction(relayTransaction);

  console.log([
    'Successfully submitted gasless transaction:',
    `https://relay.gelato.digital/tasks/status/${taskId}`,
  ].join('\n'));

  console.log('Waiting for the relay transaction result...');
  const { transactionHash } = await pollRelayTaskStatus(taskId, relayAdapter);

  if (!transactionHash) throw new Error('No relay transaction hash');

  console.log([
    'Relay task success!',
    `https://mumbai.polygonscan.com/tx/${transactionHash}`,
  ].join('\n'));

  console.log('Waiting for the transaction to be minted...');
  await signer.provider.waitForTransaction(transactionHash, 5);

  console.log([
    'Deployed Safe successfully!',
    `https://mumbai.polygonscan.com/address/${safeAddress}`,
  ].join('\n'));
  const safeSdk = await Safe.create({ ethAdapter, safeAddress });

  return safeSdk;
};

export default deploySafe;
