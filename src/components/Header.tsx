"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute w-full flex gap-2 items-center justify-between bg-slate-600 z-50 position-sticky">
      <div className="max-w-50% flex gap-6 items-center p-22">
        <h1 className=" text-orange-400 tracking-tight lg:text-5xl font-bold m-4">
          <Link href="/">Squirrel Review</Link>
        </h1>
        <Link className="text-slate-200" href="/">Courses</Link>
        <Link className="text-slate-200" href="/">Resources</Link>
        <Link className="text-slate-200" href="/">Register</Link>
      </div>
      <Link className="text-slate-200 m-6" href="/">Login</Link>
    </header>
  )
}
