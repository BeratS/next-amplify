'use client'

import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";

export default function User() {

  const { user, signOut } = useAuthenticator();
  
  return (
    <>
      <h1>{user?.signInDetails?.loginId}`s todos</h1>

      <Link href={'/todo'} className="underline">Go to TODO</Link>

      <button onClick={signOut}>Sign out</button>
    </>
  );
}