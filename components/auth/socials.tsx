"use client"
import React from 'react';
import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';
import socialLogin from '@/actions/socialLogin';

const Socials = () => {
    const handleGoogleSignIn = async (provider: "google" | "github") => {
        const res = await socialLogin(provider);
    }
    return (
        <div className='w-full'>
            <Button onClick={() => handleGoogleSignIn('google')} variant="secondary" className='w-full space-x-1'><FcGoogle className='w-4 h-4' /> <span>Sign in with Google</span></Button>
        </div>
    );
};

export default Socials;