import React from 'react';

export default function Card(props) {
    return (
        <div className={[`${props.width} shrink-0 mb-3`]}>
            <div className='group h-[182px] rounded-[15px] overflow-hidden relative'>
                <img className='group-hover:scale-110 duration-150 object-cover w-full h-full' src={"http://localhost:5000/images/" + props.image} alt="" />
                <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[16px] md:text-[25px] font-bold text-white tracking-tighter'>
                    {props.offer}
                </div>
            </div>
                <div className='mt-3 text md md:text-xl font-bold'>
                    {props.title}
                </div>
                <div>
                    {props.rating}
                    <span className='ml-2'> {props.minTime} - {props.maxTime}mins </span>
                </div>
                <div className='text-slate-700'>
                    {props.name}
                    <br />
                    {props.place}
                </div>
        </div>
    );
}
