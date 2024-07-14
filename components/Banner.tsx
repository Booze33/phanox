import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="w-[100vw] flex justify-center">
      <div className="w-[90vw] bg-gray-300 pt-12 px-8 flex flex-row rounded">
        <div className="flex flex-col mb-[5rem]">
          <h3 className="text-slate-900 font-bold font-sans text-[16px] mb-[-6px]">Beats solo</h3>
          <h2 className="text-slate-900 font-bold font-sans text-[42px] mt-[-4px] text-justify w-full tracking-wide">Wireless</h2>
          <h1 className="text-slate-100 font-bold font-sans text-[100px] mt-[-2rem] text-justify w-full tracking-wide">HEADPHONE</h1>
          <h4 className="text-slate-100 font-bold font-sans text-[13px] bg-red-600 rounded-md px-4 py-2 w-[15vw]">Shop wireless headphone</h4>
        </div>
        <div>
          <Image src={"/images/headphones_a_4.webp"} alt='img' width={390} height={390} className="ml-[-5rem] mt-[-3rem]" />
        </div>
        <div className="w-[30vw] h-[8rem] mt-[13rem] ml-[-15rem] justify-end text-end">
          <h3 className="text-slate-900 font-bold font-sans text-[16px]">Description</h3>
          <p className="text-slate-900 font-sans text-[14px]">
            The game begins here with immortal 1000D gaming headphones, don't just play the game - feel it, Live it, and own it Level up your audio game with 7 1 Channel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner;

