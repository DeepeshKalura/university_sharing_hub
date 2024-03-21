"use client"

import Header from "../components/Header";
import { useConvexAuth } from "convex/react";
import Loader from "../components/Loader";
import useStoreUserEffect from "@/hooks/useStoreUserEffect";

const Main: React.FC = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        if (isAuthenticated) {
            useStoreUserEffect();
        }
        return <Loader />
    }

    if (!isAuthenticated) {
        return (
            <div>
                <h1>
                    Are you a  how to reach her
                </h1>
            </div>
        );
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