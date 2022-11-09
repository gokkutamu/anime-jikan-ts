export interface Item {
    mal_id: number;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string;
    
    type: "movie" | "tv" | "ova" | "special" | "ona" | "music";

    images: {
        jpg: string,
        webp: string,
    };
    trailers: string[];
    approved: boolean;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    season: string;
    year: number;
    broadcast: string[];
}
// Type for async function's returned value
export interface HomeFilms {
    [key: string]: Item[];
}