import { useTheme } from 'next-themes';
import data from '../data/resume.json';
import Socials from '@/components/Socials';
import Project from '@/components/Project';
import { useEffect, useState } from 'react';

export default function Resume() {
  const { theme, setTheme } = useTheme();
  const { name, resume, darkMode } = data;
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (darkMode && theme != 'light') {
      return setTheme('dark');
    }
    return setTheme('light');
  }, [darkMode, setTheme, theme]);

  return (
    <>
      {mount && (
        <div
          className={`bg-no-repeat bg-attach bg-center bg-fixed ${
            theme == 'dark'
              ? 'bg-darkcover-lightdots'
              : 'bg-lightcover-darkdots'
          }`}
        >
          <div className="container mx-auto mb-10">
            <div className="pt-10 w-full flex flex-col items-center">
              <div
                className={`w-full ${
                  theme == 'dark' ? 'bg-slate-800' : 'bg-[#FAFAFA]'
                } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-lg`}
              >
                <h1 className="text-3xl font-bold">{name}</h1>
                <h2 className="text-xl mt-5">{resume.tagline}</h2>
                <h2 className="w-auto text-lg mt-5 opacity-50">
                  {resume.description}
                </h2>
                <div className="mt-2">
                  <Socials />
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Experience</h1>

                  {resume.experiences.map(
                    ({ id, dates, stack, position, project, bullets }) => (
                      <Project
                        key={id}
                        dates={dates}
                        stack={stack}
                        position={position}
                        project={project}
                        bullets={bullets}
                      />
                    )
                  )}
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Education</h1>
                  <div className="mt-2">
                    <h2 className="text-lg">
                      {resume.education.universityName}
                    </h2>
                    <h3 className="text-sm opacity-75">
                      {resume.education.universityDate}
                    </h3>
                    <p className="text-sm mt-2 opacity-50">
                      {resume.education.universityPara}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">Skills</h1>
                  <div className="flex mob:flex-col desktop:flex-row justify-between">
                    {resume.languages && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Languages</h2>
                        <ul className="list-disc">
                          {resume.languages.map((language, index) => (
                            <li key={index} className="ml-5 py-2">
                              {language}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {resume.frameworks && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Frameworks</h2>
                        <ul className="list-disc">
                          {resume.frameworks.map((framework, index) => (
                            <li key={index} className="ml-5 py-2">
                              {framework}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {resume.others && (
                      <div className="mt-2 mob:mt-5">
                        <h2 className="text-lg">Others</h2>
                        <ul className="list-disc">
                          {resume.others.map((other, index) => (
                            <li key={index} className="ml-5 py-2">
                              {other}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
