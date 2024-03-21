"use client"

import Header from "../components/Header";
import { useConvexAuth } from "convex/react";
import Loader from "../components/Loader";

const Main: React.FC = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <Header />

            <main className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to University Sharing Hub</h1>
            </main>

        </div>
    );
};

export default Main;