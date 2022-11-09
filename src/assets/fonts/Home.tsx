//Package: typescript and react
import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GiHamburgerMenu } from 'react-icons/gi';

// Component
import Navigation from "../../app/components/Common/Navigation";
import Sidebar from "../../app/components/Common/Sidebar";
import MainHome from "../../app/components/List/MainHome";
// import Carousel from "../../app/components/Part/Carousel";

// Hooks and Stored Redux
import { HomeFilms, Item } from "../../app/clients/types";
import { getHomeMovies, getHomeTVs, getMovieBannerInfo, getTVBannerInfo } from "../../app/services/service";

const Home: FC = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [currentTab, setCurrentTab] = useState(
        localStorage.getItem("currentTab") || "tv"
    );

    const {
        data: dataMovie,
        isLoading: isLoadingMovie,
        isError: isErrorMovie,
        error: errorMovie,
    } = useQuery<HomeFilms, Error>(["home-movies"], getHomeMovies);
    
    const {
        data: dataTV,
        isLoading: isLoadingTV,
        isError: isErrorTV,
        error: errorTV,
    } = useQuery<HomeFilms, Error>(["home-tvs"], getHomeTVs);
    
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
                <button onClick={() => setIsSidebarActive((prev) => !prev)}>
                    <GiHamburgerMenu size={25} />
                </button>
            </div>

            <div className="flex items-start">
                <Sidebar setSidebarActive={setIsSidebarActive} isSidebarActive={isSidebarActive} />
                <div className="flex-grow md:pt-7 pt-0 pb-7 border-x md:px-[2vw] px-[4vw] border-gray-darken min-h-screen">
                    <div className="flex justify-between md:items-end items-center">
                        <div className="inline-flex gap-[40px] pb-[14px] border-b border-gray-darken relative">
                            <button onClick={() => {
                                setCurrentTab("tv");
                                localStorage.setItem("currentTab", "tv");
                            }} className={`${currentTab === "tv" && "text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-5"} 
                                transition duration-300 hover:text-white`}>
                                Watching Tv
                            </button>
                            <button onClick={() => {
                                setCurrentTab("movie");
                                localStorage.setItem("currentTab", "movie");
                            }} className={`${currentTab === "movie" && "text-white font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-5"
                                } transition duration-300 hover:text-white`}>
                                Movie
                            </button>
                        </div>
                    </div>
                    
                    {currentTab === "movie" && (
                        <MainHome
                        data={dataMovie}
                        isLoadingSection={isLoadingMovie}
                        />
                    )}
                    {currentTab === "tv" && (
                        <MainHome
                        data={dataTV}
                        isLoadingSection={isLoadingTV}
                        />
                    )}
                    {/* <div className="shrink-0 max-w-[310px] w-full hidden lg:block px-6 top-0 sticky ">
                        <SearchBox />
                        <RecommendGenres currentTab={currentTab} />
                        <TrendingNow />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Home;