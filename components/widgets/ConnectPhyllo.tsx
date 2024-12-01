'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ConnectPage({ token }: { token: string; }) {
  useEffect(() => {
    const fetchTokenAndOpenWidget = async () => {
      try {
        if (window?.PhylloConnect) {
          const config = {
            clientDisplayName: 'Lobster Money', // the name of your app that you want the creators to see while granting access
            environment: 'sandbox', // the mode in which you want to use the SDK,  `sandbox`, `staging` or `production`
            userId: '', // the unique user_id parameter returned by Phyllo API when you create a user (see https://docs.getphyllo.com/docs/api-reference/reference/openapi.v1.yml/paths/~1v1~1users/post)
            token,
            redirect: false, // (optional) flag to indicate that you want to use the redirect flow, this is `false` by default
            // workPlatformId, // (optional) the unique work_platform_id of a specific work platform, if you want the creator to skip the platform selection screen and just be able to connect just with a single work platform
          };

          const phylloConnect = new window.PhylloConnect(config);

          phylloConnect.on("accountConnected", (accountId: any, workplatformId: any, userId: any) => {  // gives the successfully connected account ID and work platform ID for the given user ID
            console.log(`onAccountConnected: ${accountId}, ${workplatformId}, ${userId}`);
          })
          phylloConnect.on("accountDisconnected", (accountId: any, workplatformId: any, userId: any) => {  // gives the successfully disconnected account ID and work platform ID for the given user ID
            console.log(`onAccountDisconnected: ${accountId}, ${workplatformId}, ${userId}`);
          })
          phylloConnect.on("tokenExpired", (userId: any) => {  // gives the user ID for which the token has expired
            console.log(`onTokenExpired: ${userId}`);  // the SDK closes automatically in case the token has expired, and you need to handle this by showing an appropriate UI and messaging to the users
          })
          phylloConnect.on("exit", (reason: any, userId: any) => {  // indicates that the user with given user ID has closed the SDK and gives an appropriate reason for it
            console.log(`onExit: ${reason}, ${userId}`);
          })
          phylloConnect.on("connectionFailure", (reason: any, workplatformId: any, userId: any) => {  // optional, indicates that the user with given user ID has attempted connecting to the work platform but resulted in a failure and gives an appropriate reason for it
            console.log(`onConnectionFailure: ${reason}, ${workplatformId}, ${userId}`);
          })
  
          phylloConnect.open();

          console.log(phylloConnect.version());
        }
      } catch (err) {
        console.error('Error fetching token:', err);
      }
    };
  
    fetchTokenAndOpenWidget();
  }, []);
  

  return (
    <>
      <Script
        src="https://cdn.getphyllo.com/connect/v2/phyllo-connect.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Phyllo script loaded')}
      />
      <div>
        <h1>Connect Your Account</h1>
        <p>The widget will load automatically.</p>
      </div>
    </>
  );
}
