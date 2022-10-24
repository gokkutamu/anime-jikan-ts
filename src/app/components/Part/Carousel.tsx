/**
 * Carousel: List of anime on the front page.
 * @var void Carousel
*/
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

import Skeleton from "../Common/Skeleton";
import { resizeImage } from "../../clients/utils";
import { Item } from "../../clients/types";
import { useCurrentView } from "../../hooks/useCurrentView";

interface CarouselProps {
    data: Item[] | undefined;
    detail: {
        genre: { id: number; name: string }[];
        translation: string[];
    }[];
    isLoadingCarousel: boolean;
}

const Carousel: FC<CarouselProps> = ({
    data,
    detail,
    isLoadingCarousel,
}) => {
    const { isMobile } = useCurrentView();

    return (
        <div className="mt-6 relative h-0 md:pb-[45%] pb-[55%]  tw-banner-slider">
            {isLoadingCarousel ? (
                <Skeleton className="absolute top-0 left-0 w-full h-full rounded-lg" />
            ) : (
                <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1}
                    className="!absolute !top-0 !left-0 !w-full !h-full  !rounded-lg">
                    {(data as Item[]).map((film, index) => (
                        <SwiperSlide key={film.id}>
                        </SwiperSlide>
                    ))}
                    <div className="absolute top-0 left-0 w-[8%] h-[11%] z-10"></div>
                </Swiper>
            )}
        </div>
    );
};

export default Carousel;