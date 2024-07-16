import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="w-[100vw] flex justify-center">
      <div className="md:w-[90vw] w-[98vw] h-[100%] bg-gray-300 py-12 px-2 md:px-8 flex md:flex-row flex-col rounded">
        <div className="flex flex-col mb-[5rem]">
          <h3 className="text-slate-900 font-bold font-sans text-[16px] mb-[-6px]">Beats solo</h3>
          <h2 className="text-slate-900 font-bold font-sans md:text-[42px] text-[28px] mt-[-4px] text-justify w-full tracking-wide">Wireless</h2>
          <h1 className="text-slate-100 font-bold font-sans md:text-[100px] text-[10vw] md:mt-[-2rem] md:text-justify md:w-full md:tracking-wide">HEADPHONE</h1>
          <h4 className="text-slate-100 font-bold font-sans md:text-[13px] text-[10px] bg-red-600 rounded-md px-4 py-2 md:w-[13rem] w-[11rem]">Shop wireless headphone</h4>
        </div>
        <div>
          <Image src={"/images/headphones_a_4.webp"} alt='img' width={390} height={390} className="md:ml-[-5rem] md:mt-[-3rem] mt-[-12rem]" />
        </div>
        <div className="w-[30vw] h-[8rem] mt-[-2rem] md:mt-[11rem] lg:mt-[13rem] md:ml-[-15rem] justify-end text-end mb-4">
          <h3 className="text-slate-900 font-bold font-sans text-[16px]">Description</h3>
          <p className="text-slate-900 font-sans md:text-[14px] text-[10px] pb-4">
            The game begins here with immortal 1000D gaming headphones, don't just play the game - feel it, Live it, and own it Level up your audio game with 7 1 Channel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner;

