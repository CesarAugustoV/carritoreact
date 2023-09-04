import {
    useEffect,
    useState
} from "react";

export const useQuery = (cb, id = null) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await cb(id);
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [id, cb]);


    return {
        data,
        loading,
        error,
    };
};