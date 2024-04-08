import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';
import { Button } from '../ui/button';
import SignInForm from './signInForm';
import Socials from './socials';

interface CardWrapperProps {
    children: React.ReactNode;
    backLabel: string;
    backLink: string;
    backLinkLabel: string;
}

const CardWrapper = ({children, backLabel, backLink, backLinkLabel}: CardWrapperProps) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='flex flex-col items-center'>
        <CardTitle className='flex flex-col items-center justify-center gap-y-3'>
          <Image
            src={Logo}
            width={72}
            height={72}
            alt="Appeer Logo"
          />
          <span className="text-3xl font-semibold">
            Welcome to <span className="font-black">APPEER</span>
          </span>
        </CardTitle>
        <div className="flex items-center text-sm gap-x-1">
          <p className='m-0 p-0'>{backLabel}</p>
          <Button
            variant={'link'} className='p-0 m-0'
            asChild>
            <Link className='p-0 m-0 leading-none h-auto'
              href={backLink}
              title={backLinkLabel}>
              {backLinkLabel}
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
        <div className='flex flex-col items-center mb-2.5'>
            <hr className='w-full bg-muted-foreground/20 h-[1px]' />
            <p className='text-muted-foreground bg-background -mt-4 px-2 text-xl'>or</p>
        </div>
      <CardFooter>
        <Socials />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
