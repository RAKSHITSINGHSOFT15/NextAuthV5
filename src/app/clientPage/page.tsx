"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

export default function page() {

    const {data : session} = useSession()
    if(!session || !session.user){
        return <div>Please sign in</div>
    }
  return (
    <div>
      This is the client page.
    </div>
  )
}
