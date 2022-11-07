import { LocationIcon, StarIcon } from '../../generatedIcons';
import classes from './SearchBody.module.css';

const HotelResult = ({ HotelName, Rating, Location, DistanceFromCenter, PriceBeforeTax, ImageUrls }:
    { HotelName: string, Rating: string, Location: string, DistanceFromCenter: string, PriceBeforeTax: string, ImageUrls: string[] }) => {
        return (
            <div className={classes.hotelResult}>
                <img src={ImageUrls[0]} alt={HotelName} />
                <div className={classes.resultBody}>
                    <h2>Hotel ⋅ {HotelName}</h2>
                    <span>{[...Array(parseInt(Rating))].map((e, i) => <StarIcon key={i} style={{ marginRight: "5.33px" }} />)}</span>
                    <span><LocationIcon /> {Location}</span>
                    <div className={classes.horizontalLine}></div>
                    <span style={{ alignSelf: "flex-end" }}><b>{PriceBeforeTax}£</b> /per person</span>
                </div>
            </div>
        )
};

export default HotelResult;