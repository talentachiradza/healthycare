

import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import faqImg from '../assets/images/faq-img.png';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';




const Home = () => {
  return (
  <>
   {/* ===hero section== */}
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
         
          {/* ===hero content=== */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className='text-[30px] leading-[46px] text-headingColor font-[800] md:text-[42px] md:leading-[70px]'>
              Nurturing excellence in nurse aide recruitment & care.
              </h1>
              <p className='text__para'>
              Dedicated to compassionate support, nurturing skilled care professionals, 
              and promoting a healthier tomorrow through excellence in healthcare recruitment.
              </p>
              <button className='btn'>Request an Appointment</button>
            </div>

            {/* ===hero counter=== */}
            <div className="mt-[30px] lg:mt-[70] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px'></span>
                <div className="text__para">Lorem, ipsum dolor</div>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  15+
                </h2>
                <span className='w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px'></span>
                <div className="text__para">Lorem, ipsum</div>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  100%
                </h2>
                <span className='w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px'></span>
                <div className="text__para">Lorem, ipsum.</div>
              </div>
            </div>
          </div>

          {/* hero content */}

          <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-full rounded' src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
              <img src={heroImg03} alt="" className='w-full'/>
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* ===hero section end=== */} 
     <section>
  <div className="container">
    <div className='lg:w-[470px] mx-auto'>
      <h2 className='heading text-center'>
       Quality Healthcare with Nurse Aid
      </h2>
      <p className='text__para text-center'>
        We are dedicated to providing exceptional healthcare services with professional nurse aid support.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

      <div className='py-[30px] px-5'>
        <div className="flex items-center justify-center">
          <img src={icon01} alt="" />
        </div>

        <div className="mt-[30px]">
          <h2 className='text-[25px] leading-4 text-headingColor font[700] text-center'>
            Find a Nurse Aid
          </h2>
          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            Receive compassionate and skilled support from certified nurse aides at our institute.
          </p>

          <Link to='/nurse-aid' className='w-[44px] h-[44px] rounded-full border border-solid border-iconColor
          mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
            <BsArrowRight className='text-iconColor group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>

      <div className='py-[30px] px-5'>
        <div className="flex items-center justify-center">
          <img src={icon02} alt="" />
        </div>

        <div className="mt-[30px]">
          <h2 className='text-[25px] leading-4 text-headingColor font[700] text-center'>
            Find a Location
          </h2>
          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            Visit our facilities to receive nurse aid services and top-notch healthcare.
          </p>

          <Link to='/locations' className='w-[44px] h-[44px] rounded-full border border-solid border-iconColor
          mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
            <BsArrowRight className='text-iconColor group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>

      <div className='py-[30px] px-5'>
        <div className="flex items-center justify-center">
          <img src={icon03} alt="" />
        </div>

        <div className="mt-[30px]">
          <h2 className='text-[25px] leading-4 text-headingColor font[700] text-center'>
            Book an Appointment
          </h2>
          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            Schedule an appointment with our nurse aides to receive personalized care.
          </p>

          <Link to='/appointments' className='w-[44px] h-[44px] rounded-full border border-solid border-iconColor
          mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
            <BsArrowRight className='text-iconColor group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

     <About />

     {/* ====services section start==== */}
     <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>Our Services</h2>
        <p className='text__para text-center'>Connecting skilled professionals to the UK healthcare system with care, expertise, and support.</p>
      </div>

      <ServiceList />
      </div>
     </section>
     {/* ====services section end===== */}

     {/* ===feature section start==== */}
     <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">

          {/* =====feature content===== */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Lorem, ipsum dolor <br /> Lorem
            </h2>

            <ul className="pl-4">
              <li className="text__para">
                1. Lorem ipsum dolor sit.
              </li>
              <li className="text__para">
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
              </li>
              <li className="text__para">
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto iusto sunt, excepturi sed voluptas dolores unde facilis?
              </li>
            </ul>
            <Link to='/'><button className='btn'>Learn more</button></Link>
          </div>

          {/* ===feature img=== */}
          <div className="relative z-10 xl:w-[770px] flex justify-center mt-[50px] lg:mt-0">
            <img src={featureImg} className='w-3/4' alt="" />
          </div>
        </div>
      </div>
     </section>
     {/* ====feature section end========== */}

     {/* ===our Great doctors section start=== */}
     <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>Lorem, ipsum dolor.</h2>
        <p className='text__para text-center'>Connecting skilled professionals to the UK healthcare system with care, expertise, and support.</p>
      </div>

      <DoctorList />
      </div>
     </section>
     {/* ===our Great doctors section end=== */}

     {/* ====faq section start==== */}
     <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
          <img src={faqImg} alt="" />
          </div>
           <div className="w-full md:w-1/2">
           <h2 className="heading">Most question by our beloved patients</h2>

           <FaqList />
         
        </div>
       </div>
      </div >
     </section>
     {/* ====faq section end==== */}

     {/* =====testimonials section start=== */}
     <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">
           Lorem, ipsum dolor.
          </h2>
          <p className='text-para text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam odio harum perferendis quam.
          </p>
        </div>

        <Testimonial />
      </div>
     </section>
     {/* =====testimonials section end==== */}
    </>
);
};

export default Home 