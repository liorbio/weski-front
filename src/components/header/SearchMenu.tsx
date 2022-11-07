import { FormEvent, useState } from "react";
import { MountainsIcon, PeopleIcon, SearchIcon } from "../../generatedIcons";
import { skiSites } from "../../resources/skiSites";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import classes from './Header.module.css';

const SearchMenu = ({ performSearch }: { performSearch: (ski_site: number, from_date: string, to_date: string, group_size: number) => Promise<void> }) => {
    const [skiSite, setSkiSite] = useState<undefined | number>(1);
    const [groupSize, setGroupSize] = useState(2);
    const [fromDate, setFromDate] = useState<undefined | Date>(undefined);
    const [toDate, setToDate] = useState<undefined | Date>(undefined);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (typeof skiSite === "number" && toDate && fromDate) {
            performSearch(skiSite, fromDate.toLocaleDateString('en-US'), toDate.toLocaleDateString('en-US'), groupSize);
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <span>
                <MountainsIcon />
                <select className={classes.inputBox} value={skiSite} onChange={(event) => setSkiSite(parseInt(event.target.value))}>
                    {skiSites.map(site => {
                        return <option key={site.id} value={site.id}>{site.name}</option>
                    })}
                </select>
            </span>
            <span>
                <PeopleIcon />
                <select className={classes.inputBox} value={groupSize} onChange={(event) => setGroupSize(parseInt(event.target.value))}>
                    {Array.from(Array(11).keys()).slice(1).map(num => {
                        return <option key={num} value={num}>{num} people</option>
                    })}
                </select>
            </span>
            <DatePicker className={classes.datePicker+" "+classes.fromPicker} selected={fromDate} onChange={(date: Date) => setFromDate(date)} />
            <DatePicker className={classes.datePicker+" "+classes.toPicker} selected={toDate} onChange={(date: Date) => setToDate(date)} />
            <button className={classes.searchButton}><SearchIcon /> Search</button>
        </form>
    )
};

export default SearchMenu;