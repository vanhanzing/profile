import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import data from '../data/resume.json';
import React, { useEffect, useState } from 'react';
import noise from 'asm-noise';
import CanvasWrapper from '@/components/canvas';

type Props = {};

const Home = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const calculateAge = () => {
    const birthDate = new Date('1992-04-21');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    const days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }
    return years;
  };

  return (
    <div id="app">
      {mount && (
        <>
          <CanvasWrapper />

          <div className="container mx-auto px-3 z-10 relative">
            <div className="w-full flex flex-col justify-center min-h-screen">
              <div className=" flex flex-row justify-center gap-16 flex-wrap target:flex-nowrap">
                <motion.div
                  animate={{ x: [100, 0] }}
                  transition={{ duration: 2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Image
                    className="rounded-3xl bg-cover bg-center"
                    src="/prabesh.JPG"
                    height={470}
                    width={380}
                    alt="Picture of the developer"
                    priority
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [-100, 0] }}
                  transition={{ ease: 'easeIn', duration: 2 }}
                  className="info tablet:mt-20"
                >
                  <h1 className=" text-7xl font-bold ">
                    <span className="text-primary">Prabesh</span> <br />
                    <span>Bhattarai</span>
                  </h1>
                  <div className="flex items-center flex-wrap  my-10 gap-16">
                    <ul className=" space-y-5">
                      <li className="text-2xl">
                        <span className=" opacity-50 mr-4">Age:</span>
                        {calculateAge()}
                      </li>
                      <li className="text-2xl ">
                        <span className=" opacity-50 mr-4">Nationality:</span>
                        Nepalese
                      </li>
                      <li className="text-2xl ">
                        <span className=" opacity-50 mr-4">Languages:</span>
                        Nepali, English
                      </li>
                    </ul>
                    <ul className=" space-y-5">
                      <li className="text-2xl">
                        <span className=" opacity-50 mr-4">Address:</span>
                        Kathmandu, Nepal
                      </li>
                      <li className="text-2xl">
                        <span className=" opacity-50 mr-4">Freelance:</span>
                        Available
                      </li>
                      <li className="text-2xl">
                        <span className=" opacity-50 mr-4">LinkedIn:</span>
                        <Link
                          href={'https://www.linkedin.com/in/bhattaraiprabesh/'}
                          target="_blank"
                          className=" italic"
                        >
                          bhattaraiprabesh
                        </Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
