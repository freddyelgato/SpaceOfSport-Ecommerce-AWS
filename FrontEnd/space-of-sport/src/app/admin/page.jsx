'use client';

import React from 'react';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGrid from "../../components/CardGrid";
import { useRouter } from 'next/navigation';
import ProtectedPage from '@/components/ProtectedPage';


const AdminPage = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <ProtectedPage role="admin">
        <h1>Bienvenido al Panel de Admin</h1>
        <CardGrid />
        <nav>
    <Link href="/logout">
        <button onClick={handleLogout} className="px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700">
            Cerrar sesión
        </button>
    </Link>
</nav>
        </ProtectedPage>

    );
};

export default AdminPage;