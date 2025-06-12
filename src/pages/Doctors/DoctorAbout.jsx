import { formateDate } from '../../utils/FormateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
             About of
            <span className='text-primaryColor font-bold text-[24px] leading-9'>
                Talent Chiradza
            </span>
            </h3>
            <p className="text__para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, 
                veritatis eaque eos alias sunt exercitationem non nam laudantium odio 
                veniam perspiciatis maxime velit cum possimus cumque libero quidem 
                dignissimos eveniet totam. Nobis illo ut doloremque iure cum reiciendis 
                voluptatem culpa, explicabo eos quidem quasi necessitatibus possimus 
                hic sed optio doloribus.
            </p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-row sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-primaryColor text-[15px] leading-6 font-semibold">
                        {formateDate("06-21-2015")} - {formateDate("12-19-2020")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Nursing
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            Harare Hospital, Zimbabwe
                    </p>
                </li>
                
                <li className="flex flex-row sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-primaryColor text-[15px] leading-6 font-semibold">
                            {formateDate("12-19-2020")} - {formateDate("12-19-2023")}
                        </span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">
                            PHD in Nursing
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            Harare Hospital, Zimbabwe
                    </p>
                </li>
            </ul>
        </div>

        <div className="mt-12">
            <h3 className='text-[12px] leading-[30px] text-headingColor font-semibold'>
                Experience 
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className='p-4 rounded bg-bgColor'>
                    <span className="text-secondaryColor text-[15px] leading-6 font-semibold">
                    {formateDate("06-21-2015")} - {formateDate("12-19-2020")}
                    </span>

                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Talent Chiradza
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            Harare Hospital, Zimbabwe
                    </p>
                </li>

                <li className='p-4 rounded bg-bgColor'>
                    <span className="text-secondaryColor text-[15px] leading-6 font-semibold">
                    {formateDate("06-21-2015")} - {formateDate("12-19-2020")}
                    </span>

                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Talent Chiradza
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            Harare Hospital, Zimbabwe
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout