export interface Item {
    title: string;
    id: number;
}
// Type for async function's returned value
export interface HomeFilms {
    [key: string]: Item[];
}