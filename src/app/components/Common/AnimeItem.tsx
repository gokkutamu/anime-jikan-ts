/**
 * component AnimeItem <tsx>
*/
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { Item } from "../../clients/types";
import { resizeImage } from "../../clients/utils";

/* Interface Anime props */
interface AnimeItemProps {
    item: Item;
}

const AnimeItem: FC<AnimeItemProps> = ({ item }) => {
    return (
        <Link to={item.type === "movie" ? `/movie/${item.mal_id}` : item.type === "tv" ? `/tv/${item.mal_id}` : `/`} >
            <div className="shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden hover:scale-105 hover:brightness-110 transition duration-300 relative group">
                <LazyLoadImage
                    alt="Poster film"
                    src={ item.type === "ova" ? item.images.jpg : item.images.webp }
                    className="object-cover"
                    effect="blur"
                />
                <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-gray-300 mt-1 text-center px-2 group-hover:text-white transition duration-300">
                    {item.title || item.title_english}
                </p>
                <div className="bg-primary px-2 py-1 rounded-full absolute top-[5%] left-[8%] z-20 flex items-center gap-1 text-white text-xs">
                    {item.popularity?.toFixed(1)}
                    <AiFillStar size={15} />
                </div>
            </div>
        </Link>
    );
}

export default AnimeItem;