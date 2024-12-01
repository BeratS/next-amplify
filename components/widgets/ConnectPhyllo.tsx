'use client'

import { PhylloConnect } from 'phyllo-connect';
import { useEffect } from 'react';

const PhylloWidget:  React.FC<{ token: string}> = ({ token }) => {
  useEffect(() => {
    const phyllo = new PhylloConnect({
      clientId: process.env.NEXT_PUBLIC_PHYLLO_CLIENT_ID,
      token,
      environment: 'sandbox',
      onEvent: (event: any) => console.log('Phyllo Event:', event),
      onExit: (error: any) => console.error('Phyllo Exit Error:', error),
      onSuccess: (data: any) => console.log('Phyllo Success:', data),
    });

    phyllo.open();
  }, [token]);

  return null;
};

export default PhylloWidget
