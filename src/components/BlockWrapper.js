import { React } from "react";
import { Head } from "next/head";
import { Router, useRouter } from "next/router";
import Navbar  from "./Navbar";
import Footer from "./Footer";

export default function BlockWrapper({children, ...customMeta}) {
    const router = useRouter();

    const meta = {
        title: "Jaydeep Ganatra - Full Stack Developer, FPS God, Chess Fiend",
        description: "i do this with one eye closed",
        type: "website",
        image: "@/public/vercel.svg",
        ...customMeta
    };
    return(
        <div>
            <main className="dark:bg-gray-800 w-full">
                <Navbar/>
                    <div>{children}</div>
                <Footer/>
            </main>
        </div>
    )
}