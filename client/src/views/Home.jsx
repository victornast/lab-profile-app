import React from 'react';
import GreenLink from './../components/GreenLink';

function Home() {
  return (
    <div className="flex flex-col max-w-xs">
      <h1 className="text-3xl text-green-900 font-bold mb-6">IronProfile</h1>
      <p className="text-lg text-gray-900 mb-28">
        An App with Authentification. And Tailwind.
      </p>
      <GreenLink path="/auth/signup" title="Sign Up" />
      <GreenLink path="/auth/login" title="Log In" />
    </div>
  );
}

export default Home;
