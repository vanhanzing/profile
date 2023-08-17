import React from 'react';
const Footer = ({}) => {
  const date = new Date();
  return (
    <>
      <h1 className="text-sm items-center flex justify-center text-bold laptop:mt-10 p-2 laptop:p-2 bottom-0">
        Copyright © {date.getFullYear()} vanhanzing.
      </h1>
    </>
  );
};

export default Footer;
