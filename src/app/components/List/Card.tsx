import { FC } from "react";
import { HomeFilms } from '../../clients/types';
import Skeleton from "../Common/Skeleton";
import Carousel from "../Part/Carousel";

interface CardProps {
    data: HomeFilms | undefined;
    detail: any;
    isLoadingCarousel: boolean;
    isLoadingSection: boolean;
}

const Card: FC<CardProps> = ({
    data,
    detail,
    isLoadingCarousel,
    isLoadingSection,
}) => {
    return (
        <>
            <Carousel
                data={data?.Trending}
                detail={detail}
                isLoadingCarousel={isLoadingCarousel}
            />

            <ul className="flex flex-col gap-10 mt-12">
                {isLoadingSection ? (
                    <>
                        {new Array(2).fill("").map((_, index) => (
                            <li key={index}>
                                <Skeleton className="mb-3 max-w-[10%] h-8 rounded-md" />
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
                            </li>
                        ))
                )}
            </ul>
        </>
    );
};

export default Card;