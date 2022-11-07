import { WeSkiLogo } from "../../generatedIcons";
import SearchMenu from "./SearchMenu";
import classes from './Header.module.css';

const Header = ({ performSearch }: { performSearch: (ski_site: number, from_date: string, to_date: string, group_size: number) => Promise<void> }) => {
    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <WeSkiLogo />
                <SearchMenu performSearch={performSearch} />
            </div>
        </div>
    )
};

export default Header;