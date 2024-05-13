// next image
import Image from 'next/image'

// swiper components
import {Swiper, SwiperSlide} from "swiper/react";

// swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// required modules
import {Navigation, Pagination} from 'swiper';

// icons
import {FaQuoteLeft} from 'react-icons/fa';

// testimonial data
const testimonialData = [
    {
        image: '/t-avt-1.png',
        name: 'Anne Smith',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-2.png',
        name: 'Jane Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-3.png',
        name: 'John Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
];

const TestimonialSlider = () => {
    return (
        <Swiper
            className='h-[420px] md:h-[400px]'
            spaceBetween={10}
            navigation={true}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination]}
        >
            {
                testimonialData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col md:flex-row items-center gap-x-8 h-full px-10 md:px-16'>
                                {/* avatar, name, position */}
                                <div className='relative w-full max-w-[300px] flex flex-col xl:justify-center items-center mx-auto xl:mx-0'>
                                    <div className='flex flex-col justify-center text-center'>
                                        {/* avatar */}
                                        <div className='mb-2 mx-auto'>
                                            <Image
                                                src={person.image}
                                                width={100}
                                                height={100}
                                                alt=''
                                            />
                                        </div>
                                        {/* name */}
                                        <div className='text-lg'>{person.name}</div>
                                        {/* position */}
                                        <div className='text-[12px] uppercase text-extralight tracking-widest'>{person.position}</div>
                                    </div>
                                </div>
                                {/* quote & messsage */}
                                <div className='relative flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:pl-20'>
                                    {/* quote icon */}
                                    <div className='mb-4'>
                                        <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                                    </div>
                                    {/* messsage */}
                                    <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};


export default TestimonialSlider;
