import React from 'react';
import { Link } from 'react-router-dom';

function GreenLink({ title, path }) {
  return (
    <Link
      className="self-center m-2 w-56 flex items-center justify-center shadow-md py-2 text-base text-gray-900 font-semibold rounded-md bg-green-300 hover:bg-green-100"
      to={path}
    >
      {title}
    </Link>
  );
}

export default GreenLink;
