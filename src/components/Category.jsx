
import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategories] = useState([]);

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/category");
        const data = await response.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const nextSlide = () => {
        if (slide >= categories.length - 8) return;
        setSlide(slide + 3);
    };

    const prevSlide = () => {
        if (slide <= 0) return;
        setSlide(slide - 3);
    };

    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'> What's on your mind?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                        <FaLongArrowAltLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                        <FaLongArrowAltRight />
                    </div>
                </div>
            </div>
            <div className='flex overflow-hidden'> 
                <div className='flex duration-500' style={{ transform: `translateX(-${slide * 90}px)` }}> {/* Adjusted slide calculation */}
                    {
                        categories.map((cat, index) => {
                            return (
                                <div key={index} className='w-[90px] shrink-0'>
                                    <img src={"http://localhost:5000/images/" + cat.image} alt="" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <hr className='my-4 border-p[2px]' />
        </div>
    );
}

