import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
       <Swiper 
         modules={[Pagination]} 
         pagination={{ clickable: true }} 
         spaceBetween={30} 
         breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
         }}
       >
         <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 shadow-lg border">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className='text-[18px] font-semibold text-headingColor'>Talent Chiradza</h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus dolorum a? 
              Doloribus, rem facilis. Voluptates qui repellat quo!
            </p>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 shadow-lg border">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className='text-[18px] font-semibold text-headingColor'>Talent Chiradza</h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus dolorum a? 
              Doloribus, rem facilis. Voluptates qui repellat quo!
            </p>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 shadow-lg border">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className='text-[18px] font-semibold text-headingColor'>Talent Chiradza</h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus dolorum a? 
              Doloribus, rem facilis. Voluptates qui repellat quo!
            </p>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 shadow-lg border">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className='text-[18px] font-semibold text-headingColor'>Talent Chiradza</h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus dolorum a? 
              Doloribus, rem facilis. Voluptates qui repellat quo!
            </p>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 shadow-lg border">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className='text-[18px] font-semibold text-headingColor'>Talent Chiradza</h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                  <HiStar className='text-yellow-400 w-[18px] h-5'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus dolorum a? 
              Doloribus, rem facilis. Voluptates qui repellat quo!
            </p>
          </div>
         </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Testimonial;
