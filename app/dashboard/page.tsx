import { auth } from '@/auth';
import SignOutBtn from '@/components/auth/signOutBtn';
import React from 'react';

const DashboardPage = async () => {
    const session = await auth();
    return (
        <div>
            <p>{JSON.stringify(session)}</p>
            <SignOutBtn />
        </div>
    );
};

export default DashboardPage;