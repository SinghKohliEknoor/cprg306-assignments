"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="p-4 m-5 bg-gray-200 rounded-lg shadow-lg">
      <h1>Week 10</h1>
      <p>Login Required to move further</p>
      <br/>

      {!user ? (
        <button onClick={gitHubSignIn}className="p-2 m-2 border-4 border-gray-600">Sign In with GitHub</button>
      ) : (
        <>
          <button onClick={firebaseSignOut} className="p-2 m-2 border-4 border-gray-600">Sign Out</button>
          <p><br/>Welcome, {user.displayName}! Your email address is {user.email}.</p>
          <div>
            <img 
              src={user.photoURL} 
              alt={user.displayName} 
              className="w-60 h-60 border-cyan-500 border-4 rounded-full"
            />
          </div>
          <p>
            Go To Shopping List: <Link href="/week-10/shopping-list" className="text-red-600 hover:text-red-400">Click Here!</Link>
          </p>
        </>
      )}
    </div>
  );
}
