/**
 * component menu application
 * @Component Sidebar.tsx
*/
import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from 'react-toastify';

import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { BsBookmarkHeart } from 'react-icons/bs';

import { useCurrentView } from '../../hooks/useCurrentView';

interface propsSidebar {
    isSidebarActive: boolean;
    setSidebarActive: any;
}

const Sidebar: FC<propsSidebar> = ({ isSidebarActive, setSidebarActive }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const current = null;
    const [isLoading, setIsLoading] = useState(false);
    const { isMobile } = useCurrentView();

    const personalPageHandler = (NotificationUrl: string) => {
        if (!current) {
            toast.info("You need to login", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        navigate(NotificationUrl);
    };

    return (
        <>
            <ToastContainer />
            {isLoading && (
                <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
                    <div className="w-28 h-28 border-[10px] rounded-full border-primary border-t-transparent animate-spin "></div>
                </div>
            )}
            <div className={`shrink-0 md:max-w-[260px] w-[70vw] pl-8 top-0 pt-10  
                md:sticky md:translate-x-0 md:bg-transparent md:shadow-none-translate-x-full fixed h-screen shadow-md transition duration-300 bg-dark-lighten z-50 ${isSidebarActive && "translate-x-0"}`}>
                {!isMobile && (
                    <Link to="/" className="flex items-center gap-3">
                        <LazyLoadImage alt="Logo" src="/logo.jpg" effect="opacity" className="w-10 h-10" />
                        <h1 className="text-xl text-white tracking-widest font-semibold">
                            <span>Anime</span>
                        </h1>
                    </Link>
                )}
                <div className={`text-white text-lg font-medium ${isSidebarActive ? "-mt-6" : "mt-12"}`}>
                    Menu
                </div>
                <div className="mt-8 ml-4 flex flex-col gap-6">
                    <Link to="/" className={`flex gap-6 items-center  ${location.pathname === "/" && "!text-primary border-r-4 border-primary font-medium"} hover:text-white transition duration-300`}>
                        <AiOutlineHome size={25} />
                        <p>Home</p>
                    </Link>
                    <Link to="/explore" className={`flex gap-6 items-center  ${location.pathname === "/explore" && "!text-primary border-r-4 border-primary font-medium"} hover:text-white transition duration-300`}>
                        <MdOutlineExplore size={25} />
                        <p>Explore</p>
                    </Link>
                </div>
                <div className="text-white text-lg font-medium mt-12">PERSONAL</div>
                <div className="mt-8 ml-4 flex flex-col gap-6">
                    <button onClick={() => personalPageHandler('/market')} className={`flex gap-6 items-center
                            ${location.pathname === "market" && "!text-primary border-r-4 border-primary font-medium"} hover:text-white transition duration-300`}>
                        <BsBookmarkHeart size={25} />
                        <p>Market</p>
                    </button>
                    <button onClick={() => personalPageHandler("/history")} className={`flex gap-6 items-center
                            ${location.pathname === "/history" && "!text-primary border-r-4 border-primary font-medium"} hover:text-white transition duration-300`}>
                        <AiOutlineHistory size={25} />
                        <p>History</p>
                    </button>
                </div>
                <div className="text-white text-lg font-medium mt-12">GENERAL</div>
                <div onClick={() => setSidebarActive(false)} className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full md:opacity-100 transition duration-300 ${isSidebarActive ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                </div>
            </div>
            <div
                onClick={() => setSidebarActive(false)}
                className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full md:opacity-100 transition duration-300 ${isSidebarActive ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            ></div>
        </>
    );
}

export default Sidebar;