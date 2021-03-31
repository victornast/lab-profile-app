import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col">
      <Link
        className="w-40 flex items-center justify-center text-xl shadow-md px-8 py-3 text-base font-medium rounded-md text-white bg-green-300 hover:bg-green-100 md:py-4 md:text-lg md:px-10"
        to="/auth/signup"
      >
        Sign Up
      </Link>
      <Link
        className="w-40 flex items-center justify-center text-xl shadow-md px-8 py-3 text-base font-medium rounded-md text-white bg-green-300 hover:bg-green-100 md:py-4 md:text-lg md:px-10"
        to="/auth/login"
      >
        Log In
      </Link>
    </div>
  );
}

export default Home;
