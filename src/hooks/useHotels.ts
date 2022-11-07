import { useState } from "react";
import { Hotel } from "../types/hotel";
import { backendUrl } from "../resources/backendUrl";

export function useHotels() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string| null>(null);
    const [loading, setLoading] = useState(false);
    const [searchCriteria, setSearchCriteria] = useState<{ ski_site: number, from_date: string, to_date: string, group_size: number } | null>(null);

    const performSearch = async (ski_site: number, from_date: string, to_date: string, group_size: number) => {
        setLoading(true);

        fetch(`${backendUrl}/hotels`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: { ski_site, from_date, to_date, group_size }
            })
        })
        .then(res => res.json())
        .then(res => {
            setSearchCriteria({ ski_site, from_date, to_date, group_size });
            setHotels(res);
            setLoading(false);
        })
        .catch(err => setError(err));
    };

    return {
        performSearch, hotels, searchCriteria, loading, error
    };
};