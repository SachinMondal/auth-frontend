import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../app/globals.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                router.push('/login');
                return;
            }

            try {
                const res = await fetch('https://auth-backend-iras.onrender.com/api/v1/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setUser(data.data); // Assuming 'data.data' contains user details
                } else {
                    console.error('Failed to fetch user data:', res.statusText);
                    router.push('/login'); // Redirect to login if not authenticated
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                router.push('/login');
            }
        };

        fetchUserData();
    }, [router]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>Profile</title>
            </Head>
            <Navbar isAuthenticated={true} />
            <main className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">Profile</h1>
                <div className="p-8 rounded shadow-md">
                    <p className="mb-4 "><strong>Name:</strong> {user.name}</p>
                    <p className="mb-4"><strong>Email:</strong> {user.email}</p>
                </div>
            </main>
        </div>
    );
}

export default Profile;
