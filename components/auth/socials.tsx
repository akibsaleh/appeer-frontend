import React from 'react';
import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';

const Socials = () => {
    return (
        <div className='w-full'>
            <Button variant="secondary" className='w-full space-x-1'><FcGoogle className='w-4 h-4' /> <span>Sign in with Google</span></Button>
        </div>
    );
};

export default Socials;