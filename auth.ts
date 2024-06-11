import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";

const config : NextAuthConfig = {
    providers: [google]
};

export const {handlers , auth , signIn , signOut } = NextAuth(config);