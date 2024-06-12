import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";   

const credentialsconfig= CredentialsProvider({

    name: "Credentials",
    credentials:{
        username:{
            label: "Username"
        },
        password:{
            label: "Password",
            type: "password"
        },
    },
    async authorize(credentials){
         if (credentials.username === "test" && credentials.password === "1234") {
            return{
                name:"Rakshit"
            }
         } else return null;
    }
})



const config: NextAuthConfig = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [google , credentialsconfig],
    callbacks:{
        authorized({request , auth}){
            const {pathname} = request.nextUrl;
            if(pathname === "/middelware")
                return !! auth
            return true

        }
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);