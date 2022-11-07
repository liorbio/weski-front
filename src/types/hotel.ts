type HotelImage = {
    MainImage?: string,
    URL: string
};
type Attraction = {
    type: string,
    distance: string
};
export type Hotel = {
    HotelCode: string,
    HotelName: string,
    HotelDescriptiveContent: {
        Images: HotelImage[]
    },
    HotelInfo: {
        Position: {
            Latitude: string,
            Longitude: string,
            Distances: Attraction[]
        },
        Rating: string,
        Beds: string
    },
    PricesInfo: {
        AmountAfterTax: string,
        AmountBeforeTax: string
    }
};