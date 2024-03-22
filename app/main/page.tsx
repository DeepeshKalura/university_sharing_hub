"use client"

import Header from "../components/Header";
import { useConvexAuth } from "convex/react";
import Loader from "../components/Loader";
import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import { SearchBar } from "../components/Searchbar";

import ContainerCard from "../components/ContainerCard";
import { Key } from "react";
import { Pathway_Gothic_One } from "next/font/google";




async function laptopData(api_key: string) {

    const laptops = await fetch("https://api.pexels.com/v1/search?query=laptop&per_page=1", {
        method: 'GET', headers: {
            "Authorization": api_key,
            "Content-Type": "application/json",
        }
    });
    const laptop_data = await laptops.json();
    return laptop_data;
}


async function dslrData(api_key: string) {

    const dslr = await fetch("https://api.pexels.com/v1/search?query=dslr&per_page=1", {
        method: 'GET', headers: {
            "Authorization": api_key,
            "Content-Type": "application/json",
        }
    });
    const dslr_data = await dslr.json();

    return dslr_data;
}


async function bookData(api_key: string) {

    const book = await fetch("https://api.pexels.com/v1/search?query=book&per_page=1", {
        method: 'GET', headers: {
            "Authorization": api_key,
            "Content-Type": "application/json",
        }
    });

    const book_data = await book.json();
    return book_data;
}

const Main: React.FC = () => {
    const api_key = process.env.PEXELS_API_KEY as string;
    const { isAuthenticated, isLoading } = useConvexAuth();
    useStoreUserEffect();

    if (isLoading) {
        return <Loader />
    }

    if (!isAuthenticated) {
        return (
            <div>
                <h1>
                    Are you a hacker how to reach her
                </h1>
            </div>
        );
    }
    return (
        <div>
            <Header />

            <main className="container py-8 mx-8">
                <h1 className="text-3xl font-bold">Welcome to University Sharing Hub</h1>
            </main>
            <div className="mx-8">
                <SearchBar defaultValue={null} />
            </div>

            <div className="mx-8 my-6">
                <h1 className="text-3xl font-bold mb-4">Laptops</h1>

            </div>

            <div className="mx-8 my-6">
                <h1 className="text-3xl font-bold mb-4">DSLR Cameras</h1>
            </div>


        </div>
    );
};

export default Main;