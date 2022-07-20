/* eslint-disable max-len */
import React from 'react';

interface ScanQRIconProps {
  color: string;
}

const ScanQRIcon = ({ color }: ScanQRIconProps) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.4 10.4138C0.4 10.7452 0.668629 11.0138 1 11.0138C1.33137 11.0138 1.6 10.7452 1.6 10.4138H0.4ZM1 1V0.4C0.668629 0.4 0.4 0.668629 0.4 1L1 1ZM9.96552 1.6C10.2969 1.6 10.5655 1.33137 10.5655 1C10.5655 0.668629 10.2969 0.4 9.96552 0.4V1.6ZM1.6 10.4138V1H0.4V10.4138H1.6ZM1 1.6H9.96552V0.4H1V1.6Z" fill={color}/>
      <path d="M17.5862 0.4C17.2548 0.4 16.9862 0.668629 16.9862 1C16.9862 1.33137 17.2548 1.6 17.5862 1.6V0.4ZM27 1H27.6C27.6 0.668629 27.3314 0.4 27 0.4V1ZM26.4 10.4138C26.4 10.7452 26.6686 11.0138 27 11.0138C27.3314 11.0138 27.6 10.7452 27.6 10.4138H26.4ZM17.5862 1.6H27V0.4H17.5862V1.6ZM26.4 1V10.4138H27.6V1H26.4Z" fill={color}/>
      <path d="M0.4 17.5862C0.4 17.2548 0.668629 16.9862 1 16.9862C1.33137 16.9862 1.6 17.2548 1.6 17.5862H0.4ZM1 27V27.6C0.668629 27.6 0.4 27.3314 0.4 27H1ZM9.96552 26.4C10.2969 26.4 10.5655 26.6686 10.5655 27C10.5655 27.3314 10.2969 27.6 9.96552 27.6V26.4ZM1.6 17.5862V27H0.4V17.5862H1.6ZM1 26.4H9.96552V27.6H1V26.4Z" fill={color}/>
      <path d="M17.5862 27.6C17.2548 27.6 16.9862 27.3314 16.9862 27C16.9862 26.6686 17.2548 26.4 17.5862 26.4V27.6ZM27 27H27.6C27.6 27.3314 27.3314 27.6 27 27.6V27ZM26.4 17.5862C26.4 17.2548 26.6686 16.9862 27 16.9862C27.3314 16.9862 27.6 17.2548 27.6 17.5862H26.4ZM17.5862 26.4H27V27.6H17.5862V26.4ZM26.4 27V17.5862H27.6V27H26.4Z" fill={color}/>
      <path d="M4.13794 11.6069C3.80657 11.6069 3.53794 11.8755 3.53794 12.2069C3.53794 12.5383 3.80657 12.8069 4.13794 12.8069V11.6069ZM23.8621 12.8069C24.1934 12.8069 24.4621 12.5383 24.4621 12.2069C24.4621 11.8755 24.1934 11.6069 23.8621 11.6069V12.8069ZM4.13794 12.8069H23.8621V11.6069H4.13794V12.8069Z" fill={color}/>
      <path d="M7.12415 12.2069C7.12415 12.5383 7.39278 12.8069 7.72415 12.8069C8.05552 12.8069 8.32415 12.5383 8.32415 12.2069H7.12415ZM7.72415 7.27586V6.67586C7.39278 6.67586 7.12415 6.94449 7.12415 7.27586H7.72415ZM20.2759 7.27586H20.8759C20.8759 6.94449 20.6072 6.67586 20.2759 6.67586V7.27586ZM19.6759 12.2069C19.6759 12.5383 19.9445 12.8069 20.2759 12.8069C20.6072 12.8069 20.8759 12.5383 20.8759 12.2069H19.6759ZM8.32415 12.2069V7.27586H7.12415V12.2069H8.32415ZM7.72415 7.87586H20.2759V6.67586H7.72415V7.87586ZM19.6759 7.27586V12.2069H20.8759V7.27586H19.6759Z" fill={color}/>
      <path d="M8.32415 15.7931C8.32415 15.4617 8.05552 15.1931 7.72415 15.1931C7.39278 15.1931 7.12415 15.4617 7.12415 15.7931H8.32415ZM7.72415 19.8276H7.12415C7.12415 20.159 7.39278 20.4276 7.72415 20.4276V19.8276ZM20.2759 19.8276V20.4276C20.6072 20.4276 20.8759 20.159 20.8759 19.8276H20.2759ZM20.8759 15.7931C20.8759 15.4617 20.6072 15.1931 20.2759 15.1931C19.9445 15.1931 19.6759 15.4617 19.6759 15.7931H20.8759ZM7.12415 15.7931V19.8276H8.32415V15.7931H7.12415ZM7.72415 20.4276H20.2759V19.2276H7.72415V20.4276ZM20.8759 19.8276V15.7931H19.6759V19.8276H20.8759Z" fill={color}/>
    </svg>
  );
};

export default ScanQRIcon;
