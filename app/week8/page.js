"use client";

import { useState } from "react"; // Import useState
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isSignedIn, setIsSignedIn] = useState(!!user); // Initialize the state based on user status

  async function handleSignIn() {
    try {
      await gitHubSignIn();
      setIsSignedIn(true); // Update state when signed in
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
      setIsSignedIn(false); // Update state when signed out
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <main>
      <header>
        <h1>Login Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            {isSignedIn && ( 
              <Link href="/week8/shopping-list">
                <button>Go to Shopping List</button>
              </Link>
            )}
            <p></p>
            <button
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
