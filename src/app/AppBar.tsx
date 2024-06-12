import { auth, signIn, signOut } from 'auth'
import Link from 'next/link'

import React from 'react'

async function AppBar() {

    const session = await auth()
    return (
        <div className='flex justify-between items-center'>

            <Link href={"/clientPage"}>Client page</Link>
            <Link href={"/serverPage"}>Server page</Link>
            <Link href={"/middleware"}>Middleware page</Link>
            <div>
                {session && session.user ? (
                    <div>
                        <p>{session.user.name}</p>
                        <form action={async () => {
                            "use server"
                            await signOut();
                        }}>
                            <button type='submit'>SignOut</button>
                        </form>
                    </div>
                ) : (
                    <form action={async () => {
                        "use server"
                        await signIn();
                    }}>
                        <button>SignIn</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default AppBar;
