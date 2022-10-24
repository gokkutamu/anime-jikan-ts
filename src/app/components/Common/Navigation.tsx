/**
 * component Navigation
 * @return void
*/
import { FC, useEffect } from 'react';
interface PropsTitle {
    value: string;
}

const Navigation: FC<PropsTitle> = ({ value }) => {
    useEffect(() => {
        document.title = value;
    }, [value]);
    
    return <></>;
};

export default Navigation;