import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    University Sharing Hub
                </Link>
                <div className='justify-end'>
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </header>
    );
};

export default Header;
