import { Hotel } from "../../types/hotel";
import HotelResult from "./HotelResult";
import { skiSites } from "../../resources/skiSites";
import classes from './SearchBody.module.css';

const SearchBody = ({ hotels, searchCriteria, loading, error }:
    { hotels: Hotel[], searchCriteria: { ski_site: number, from_date: string, to_date: string, group_size: number } | null, loading: boolean, error: null | string }) => {
    if (error) return <h1>An error has occurred. Try again!</h1>;

    const skiSiteName = searchCriteria ? skiSites.filter(s => s.id === searchCriteria.ski_site)[0].name : null;

    return (
        <>
            {!searchCriteria && <></>}
            {loading && <h1>Loading...</h1>}
            {!loading && searchCriteria &&
                <div className={classes.bodyWrapper}>
                    <h1>Select your ski trip</h1>
                    {/* 🧠🧠🧠🧠🧠 Change from/to dates to format shown in Figma */}
                    <p>{`${hotels.length} ski trips options`} ⋅ {skiSiteName} ⋅ {searchCriteria.from_date+" - "+searchCriteria.to_date} ⋅ {`${searchCriteria.group_size} people`}</p>
                    {hotels.map(hotel => <HotelResult
                        key={hotel.HotelCode}
                        HotelName={hotel.HotelName}
                        Rating={hotel.HotelInfo.Rating}
                        Location={skiSiteName!}
                        DistanceFromCenter={hotel.HotelInfo.Position.Distances.filter(d => d.type === "city_center")[0].distance}
                        PriceBeforeTax={hotel.PricesInfo.AmountBeforeTax}
                        ImageUrls={hotel.HotelDescriptiveContent.Images.map(i => i.URL)}
                    />)}
                </div>
            }
        </>
    )
};

export default SearchBody;