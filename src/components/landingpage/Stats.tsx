'use client';
import { useEffect } from 'react';
import { inViewSensor } from 'tailwind-inview';

const data = [
  {
    bigText: '100+',
    smallText: 'Supported platforms',
  },
  {
    bigText: '24/7',
    smallText: 'Customer support',
  },
  {
    bigText: '$15M',
    smallText: 'Completed transactions',
  },
];

function Stats() {
  useEffect(inViewSensor, []);
  return (
    <div className="inview:animate-slidein inview-once mt-12 flex h-[59px] w-full items-center justify-between bg-[#001430] px-4 opacity-0 [--slidein-delay:300ms] md:h-[100px] md:px-10 lg:px-20">
      {data.map((item, index) => (
        <div key={index} className="text-white">
          <h3 className="stats__big__text">{item.bigText}</h3>
          <p className="stats__small__text">{item.smallText}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
