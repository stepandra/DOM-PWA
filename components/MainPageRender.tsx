import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import InvestButton from './InvestButton';
import TotalBalance from './TotalBalance';
import Wallet from './Wallet';
import Wealth from './Wealth';
import RecentTransactions from './RecentTransactions';
import { TransactionProps } from './Transaction';

interface MainPageRenderProps {
  /**
   * Should component display loading skeleton?
   */
  isLoading?: false;
  /**
   * Totla Balance amount
   */
  totalBalanceAmount: string;
  /**
   * Wallet Balance amount
   */
  walletAmount: string;
  /**
   * Scan QR On Click Handler
   */
  scanQROnClick?: () => void;
  /**
   * Wealth Balance amount
   */
  wealthAmount: string;
  /**
   * Yield value
   */
  yieldValue?: number;
  /**
   * Yield percentage
   */
  yieldValuePercentage?: number;
  /**
   * Average Annual percentage yield value
   */
  averageAPY?: number;
  /**
   * Array of transactions
   */
  transactions?: TransactionProps[] | [];
  /**
   * User's name
   */
  userName: string;
  /**
   * URL to Avatar Image
   */
  avatarImageURL?: string;
  /**
   * Is there a notification present?
   */
  isNotificationPresent?: boolean;
};

interface LoadingProps {
  /**
   * Should component display loading skeleton?
   */
  isLoading: true;
  /**
   * User's name
   */
  userName: string;
  /**
   * URL to Avatar Image
   */
  avatarImageURL?: string;
  totalBalanceAmount?: never;
  walletAmount?: never;
  scanQROnClick?: never;
  wealthAmount?: never;
  yieldValue?: never;
  yieldValuePercentage?: never;
  averageAPY?: never;
  transactions?: never;
  isNotificationPresent?: never;
};

type Props = LoadingProps | MainPageRenderProps;

const Wrapper = styled.div`
  padding: 1.625rem 0.313rem 9.25rem;
`;

const HeaderWithMargin = styled(Header)`
  margin: 0 0.625rem;
`;

const MainPageRender = ({
  totalBalanceAmount,
  walletAmount,
  scanQROnClick,
  wealthAmount = '0',
  yieldValue = 0,
  yieldValuePercentage = 0,
  averageAPY = 0,
  transactions = [],
  userName,
  avatarImageURL,
  isNotificationPresent = false,
  isLoading,
}: Props) => {
  if (isLoading) {
    return (
      <Wrapper>
        <HeaderWithMargin
          avatarImageURL={avatarImageURL}
          userName={userName}
        />
        <TotalBalance isLoading />
        <Wallet isLoading />
        <Wealth isLoading />
        <RecentTransactions isLoading />
        <InvestButton href='/invest'/>
      </Wrapper>
    );
  };

  return (
    <Wrapper>
      <HeaderWithMargin
        avatarImageURL={avatarImageURL}
        isNotificationPresent={isNotificationPresent}
        userName={userName}
      />
      <TotalBalance
        amount={totalBalanceAmount}
      />
      <Wallet
        amount={walletAmount}
        scanQROnClick={scanQROnClick}
      />
      <Wealth
        amount={wealthAmount}
        yieldValue={yieldValue}
        yieldValuePercentage={yieldValuePercentage}
        averageAPY={averageAPY}
      />
      <RecentTransactions transactions={transactions} />
      <InvestButton href='/invest'/>
    </Wrapper>
  );
};

export default MainPageRender;
