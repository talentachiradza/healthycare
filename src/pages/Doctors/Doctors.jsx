import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import {doctors} from './../../assets/data/doctors'

const Doctors = () => {
  return (
    <>
     <section className="bg-obgColor">
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-iconColor rounded-md flex items-center justify-between">
          <input type="search" 
           className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
           placeholder='Search Doctor' 
           />

           <button className='btn mt-0 rounded-[0px] rounded-r-md'>
            Search
           </button>
        </div>
      </div>
     </section>

     <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {doctors.map(doctor => ( <DoctorCard key={doctor.id} doctor={doctor}/>))}
      </div>
      </div>
     </section>

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
  )
}

export default Doctors