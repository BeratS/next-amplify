'use client';

import React from 'react';

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

interface childrenProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: childrenProps) => {
  return (
    <Authenticator>
      {children}
    </Authenticator>
  );
};

export default AppProviders;
