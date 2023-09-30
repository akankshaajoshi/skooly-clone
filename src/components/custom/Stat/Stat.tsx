import React from 'react';
import { useSpring, animated } from 'react-spring';
import { fontSizes } from '@/assets';

interface StatProps {
  value: number;
  label: string;
}

function Stat({ value, label }: StatProps) {
  const { number } = useSpring({
    number: value,
    from: { number: 0 },
    trail: 50000,
  });

  return (
    <div
      className="stat"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ fontSize: `${fontSizes.medium}`, fontWeight: '800' }}>
        <animated.span>{number.to((val) => val.toFixed())}</animated.span>+
        {value === 15 ? 'Million' : ''}
      </p>
      <p>{label}</p>
    </div>
  );
}

export default Stat;
