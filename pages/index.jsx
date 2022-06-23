import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(100);
  const [windowWidth, setWindowWidth] = useState(100);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {};
  }, []);

  let numbersWidth = Array(Math.floor(windowWidth / 15)).fill(1);

  const numbersList = numbersWidth.map((column, index) => {
    let numbersHeight = Array(Math.floor(windowHeight / 15))
      .fill(0)
      .map((el) => Math.round(Math.random() * 1));
    let bg = "bg-numGrad-" + (Math.floor(Math.random() * 4) + 1);
    let delay = "delay-" + Math.floor(Math.random() * 8);
    return (
      <div
        className={`binaryCol gradient-overlay ${delay} relative w-[1ch] flex flex-nowrap text-center justify-center p-2 text-[#fff]`}
        key={index}
        suppressHydrationWarning
      >
        {numbersHeight.join(" ")}
      </div>
    );
  });

  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Bug Tracker</title>
        <meta name="description" content="bug tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-animation absolute w-full h-full top-0 left-0 overflow-hidden flex pointer-events-none">
        {numbersList}
      </div>
      <main className="main absolute w-full h-full top-0 left-0 pt-[80px] lg:pt-[130px]">
        <h1 className="text-7xl text-green-code text-center hidden">Bug Bytes</h1>
      </main>
    </div>
  );
}
