import React from 'react';

const Project = ({ dates, stack, position, project, bullets }: any) => {
  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{position}</h3>
        <h3 className="text-sm opacity-50">{stack}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{project}</h2>
        {bullets && bullets.length > 0 && (
          <ul className="list-disc">
            {bullets.map((bullet: any, index: any) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Project;
