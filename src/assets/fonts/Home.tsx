//Package: typescript and react
import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GiHamburgerMenu } from 'react-icons/gi';

// Component
import Navigation from "../../app/commons/Navigation";
import Sidebar from "../../app/commons/Sidebar";


const Home: FC = () => {

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    
    return (
        <>
            <Navigation value="Anime | Jikan" />
            <div className="flex md:hidden justify-between items-center px-5 my-5">
                <Link to="/" className="flex gap-2 items-center">
                    <LazyLoadImage
                        src="/logo.jpg"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-xl text-white font-medium tracking-wider">
                        Anime
                    </p>
                </Link>
                <button>
                    <GiHamburgerMenu size={25} />
                </button>
            </div>

            <div className="flex items-start">
                <Sidebar />
            </div>
        </>
    );
}

export default Home;