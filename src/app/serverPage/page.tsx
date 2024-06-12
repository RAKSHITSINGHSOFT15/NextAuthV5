import { auth } from 'auth';
import React from 'react'

const page =async  () => {

    const session = await auth();
    if(!session || !session.user){
        return <div>Please sign in</div>
    }

  return (
    <div>
      This is Server Page
    </div>
  )
}

export default page
