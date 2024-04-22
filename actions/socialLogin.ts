"use server"

import { signIn } from "@/auth";

const socialLogin = async (provider : "google" | "github") => {
    const res = await signIn('google', {
        callbackUrl: '/dashboard',
    });
    console.log(res);
}

export default socialLogin;