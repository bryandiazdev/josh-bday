import React from "react";
import Confetti from "react-confetti";
import { TypeAnimation } from "react-type-animation";
export default function App() {
  return (
    <>
    <Confetti recycle={true} />
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Happy birthday to you,',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Happy birthday to you,',
        1000,
        'Happy birthday dear Josh Pearl',
        1000,
        'Happy birthday to you brotha!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '30px', display: 'inline-block', color: 'blue' }}
      repeat={Infinity}
    />
    </>
  );
}
