import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSite = () => {
    const [data, setedata]=useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then (res=>res.json())
        .then(data=>setedata(data))
    },[])
    return (
        <div className='flex flex-col gap-3 font-bold pl-4 text-2xl pt-3'>
            {data.map(data=><div>
                <Link key={data.id}><h1>{data.name}</h1></Link>
            </div>
            )}
        </div>
    );
};

export default LeftSite;