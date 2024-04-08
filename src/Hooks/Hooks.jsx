import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [data, setdata]=useState([]);
    const [loading, setLoading]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            const res=await fetch("/news.json")
            const data =await res.json();
            setdata(data);
            setLoading(false);
        }
        fetchData();
    },[]);
    
    return{data, loading};
};

export default Hooks;