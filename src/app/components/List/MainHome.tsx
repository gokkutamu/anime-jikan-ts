import { FC } from "react";
import { HomeFilms } from "../../clients/types";
import Skeleton from "../Common/Skeleton";
import Main from "../Part/Main";
import Section from "../Part/Section";

interface MainHomeFilmsProps {
    data: HomeFilms | undefined;
    // isLoadingBanner: boolean;
    isLoadingSection: boolean;
}

const MainHome: FC<MainHomeFilmsProps> = ({
    data,
    isLoadingSection,
}) => {
    return (
        <>
            <Main
                films={data?.Trending}
            />

            <ul className="flex flex-col gap-10 mt-12">
                {isLoadingSection ? (
                    <>
                        {new Array(2).fill("").map((_, index) => (
                            <li key={index}>
                                <Skeleton className="mb-3 max-w-[10%] h-8 rounded-md" />
                                <Section films={undefined} />
                            </li>
                        ))}
                    </>
                ) : (
                    Object.entries(data as HomeFilms)
                        .filter((section) => section[0] !== "Trending")
                        .map((section, index) => (
                            <li key={index}>
                                <h2 className="text-xl text-white font-medium tracking-wider mb-3">
                                    {section[0]}
                                </h2>

                                <Section films={section[1]} />
                            </li>
                        ))
                )}
            </ul>
        </>
    );
};

export default MainHome;