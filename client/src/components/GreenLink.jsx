import React from 'react';
import { Link } from 'react-router-dom';

function GreenLink({ title, path }) {
  return (
    <Link
      className="self-center m-2 w-56 flex items-center justify-center shadow-md px-10 py-1 text-base text-gray-900 font-semibold rounded-md bg-green-300 hover:bg-green-100 md:py-4 md:text-lg md:px-10"
      to={path}
    >
      {title}
    </Link>
  );
}

export default GreenLink;
