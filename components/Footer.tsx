import React from 'react';
const Footer = ({}) => {
  const date = new Date();
  return (
    <>
      <h1 className="text-sm items-center flex justify-center text-bold laptop:mt-10 p-2 laptop:p-2">
        Copyright © ${date.getFullYear()} prabesh bhattarai.
      </h1>
    </>
  );
};

export default Footer;
