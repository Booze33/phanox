'use client';

import React from 'react'
import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  return (
    <section className="w-[100vw] px-6 h-120m-0 flex flex-row justify-between pt-4">
      <h1 className="text-slate-400 font-bold font-sans text-[20px]">PHANOX</h1>
      <div>
        <Button className="p-0 mx-2 bg-transparent border-none">
          <Image src={"/icons/shopping-bag.svg"} alt='bag' width={20} height={20} className="text-slate-500 font-bold" />
        </Button>
        <SignedIn>
          <Button className="p-0 mx-4 bg-transparent border-none" onClick={() => signOut(() => router.push('/'))}>
            <Image src={"/icons/sign-out-alt.svg"} alt='sign-out' width={20} height={20} />
          </Button>
        </SignedIn>
        <SignedOut>
          <Button className="p-0 mx-4 bg-transparent border-none">
            <Image src={"/icons/sign-in-alt.svg"} alt='sign-in' width={20} height={20} />
          </Button>
        </SignedOut>
      </div>
    </section>
  )
}

export default NavBar;
