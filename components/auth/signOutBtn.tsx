import React from 'react';
import { Button } from '../ui/button';
import { signOut } from '@/auth';

const SignOutBtn = () => {
    const handleSignOut = async () => {
        "use server"
        return await signOut();
    }
    return (
        <form action={handleSignOut}>
            <Button variant={'outline'} size={'lg'}>Sign Out</Button>
        </form>
    );
};

export default SignOutBtn;