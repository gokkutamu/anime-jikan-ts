/**
 * hook params application
 * @Hooks useCurrentParams.
*/
import { useSearchParams } from "react-router-dom";
import { QUERY }  from '../clients/constants';

export const useCurrentParams = () => {
    const [ search ] = useSearchParams();
    const currentSearchParams = JSON.parse(JSON.stringify(QUERY)) as {
        [key: string]: string[];
    };
    
    search.forEach((value, key) => {
        currentSearchParams[key].push(value);
    });
    
    return [currentSearchParams] as const;
};