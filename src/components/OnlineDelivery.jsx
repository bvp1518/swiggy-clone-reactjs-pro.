import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function OnlineDelivery() {
    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch("http://localhost:5000/restaurantChains");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, [])



    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-5 items-center justify-between'>
               <div className='text-[25px] font-bold'>Restaurant with online Delivery in Ahmedabad</div>
            </div>
<div>
    <div className='max-w-[1200px] mx-auto flex my-4 gap-3 px-2'>
        <div className='p-3 rounded-md shadow'>Filter</div>
        <div className='p-3 rounded-md shadow'>Sort by</div>
    </div>
</div>

            <div className='grid grid cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d,i) => {
                            return <Card {...d} />
                        }
                    )
                }
            </div>
        </div>
    );
}
