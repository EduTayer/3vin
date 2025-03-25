'use client'
import { useEffect } from 'react';

export default function Splash() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/garage";
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <dotlottie-player
        src="https://lottie.host/274165d6-d06b-4a5f-8974-cc03e389c2c3/ivSpumZxcF.lottie"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300 }}
        loop={false}
        autoplay
      ></dotlottie-player>
    </div>
  );
}
