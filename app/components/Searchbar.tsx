import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

interface iDefault {
    defaultValue: string | null
}


export const SearchBar = ({ defaultValue }: iDefault) => {
    // initiate the router from next/navigation

    const router = useRouter()

    // We need to grab the current search parameters and use it as default value for the search input

    const [inputValue, setValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        const inputValue = event.target.value;

        setValue(inputValue);

    }



    // If the user clicks enter on the keyboard, the input value should be submitted for search 

    // We are now routing the search results to another page but still on the same page


    const handleSearch = () => {

        if (inputValue) return router.push(`/?q=${inputValue}`);

        if (!inputValue) return router.push("/")

    }


    const handleKeyPress = (event: { key: any; }) => {

        if (event.key === "Enter") return handleSearch()

    }



    return (

        <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 ps-1.5">
                <path fill="currentColor" d="M16.293 14.707A7.956 7.956 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8c1.816 0 3.469-.611 4.793-1.707l5.586 5.586 1.414-1.414-5.586-5.586zm-6.293 0c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z" />
            </svg>


            <input type="text"

                id="inputId"

                placeholder="Enter your keywords"

                value={inputValue ?? ""} onChange={handleChange}

                onKeyDown={handleKeyPress}

                className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" />


        </div>

    )

}