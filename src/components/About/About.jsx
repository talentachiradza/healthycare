import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            
            {/* ====about img===== */}
            <div className="relative w-full lg:w-3/4 xl:w-[550px] z-10 order-2 lg:order-1">
  <iframe
    className="w-full h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg shadow-lg border-2 border-gray-300"
    src="https://www.youtube.com/embed/WJf8Geso7Pw?rel=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>



            {/* =====about content==== */}

            <div className="w-fu lg:w-1/2 xl:w-[670] order-1 lg:order-2">
              <h2 className='heading'>Proud to be one of the nations best</h2>
              <p className='text__para'>We are proud to be one of the nations best institutions,
                 committed to excellence and innovation. Our focus is on improving lives and 
                 setting new standards of care. Together, we can make a meaningful difference every day.
                 </p>
                 <p className='text__para mt-[30px]'>Through dedication and teamwork, we consistently strive to
                     exceed expectations in healthcare services. Our mission is to create a lasting impact
                      by delivering compassionate care, fostering innovation, and empowering individuals to
                       lead healthier, happier lives across communities we serve.
                       </p>

                       
                        <Link to="/">
                        <button className='btn'>Learn More</button>
                        </Link>
                        
                      
            </div>
        </div>
    </div>
  </section>
}

export default About