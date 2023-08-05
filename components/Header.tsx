import React, { useEffect, useState } from 'react';
import data from '../data/resume.json';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Button from './Button';
import Image from 'next/image';

type Props = {};

function Header({}: Props) {
  const { name, darkMode } = data;
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`mt-10  flex flex-row items-center justify-between sticky ${
        theme === 'light' ? 'bg-white' : 'bg-[#121212]'
      } dark:text-white top-0 z-10 tablet:flex`}
    >
      <h1
        onClick={() => router.push('/')}
        className="cursor-pointer laptop:ml-4 mob:p-2 laptop:p-0 italic font-bold text-lg"
      >
        {name}.
      </h1>
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        type="primary"
      >
        <Image
          alt=""
          className="h-10"
          width={100}
          height={100}
          src={`/${theme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
        />
      </Button>
    </div>
  );
}

export default Header;
