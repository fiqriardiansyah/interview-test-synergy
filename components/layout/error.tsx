"use client"

import React from 'react'
import { BiError } from 'react-icons/bi'

export default function Error({ error, actions }: { error: { message?: string, title: string }, actions: React.ReactNode }) {
    return (
        <div className="bg-red-200 w-full flex flex-col items-center justify-center rounded-2xl py-20">
            <div className="border border-gray-200 mb-10 rounded-lg p-3">
                <BiError className='text-red-700 text-3xl' />
            </div>
            <h1 className="text-red-700 text-xl">{error.title}</h1>
            <h2 className="text-red-700 mt-1">{error?.message}</h2>
            {actions}
        </div>
    )
}