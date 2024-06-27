"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = ({ isAuthenticated }) => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user from localStorage
        router.push('/login'); // Redirect to login page
    };

    return (
        <nav className='bg-gray-800 p-4 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <p className='text-2xl font-bold'>Home</p>
                </Link>
                <div>
                    {isAuthenticated ? (
                        <div className='flex'>
                            <Link href='/profile'>
                                <p className='px-8 cursor-pointer py-2 rounded'>Profile</p>
                            </Link>
                            <button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded'>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className='flex'>
                            <Link href="/login">
                                <p className='px-8 cursor-pointer py-2 rounded'>Login</p>
                            </Link>
                            <Link href="/register">
                                <p className='px-8 cursor-pointer py-2 rounded'>Register</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
