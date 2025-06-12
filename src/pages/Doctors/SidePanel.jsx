
const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className="flex items-center justify-between">
            <p className='text__para mt-0 font-semibold'>Lorem, ipsum.</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                450 BDT
            </span>
        </div>

        <div className="mt-[30px]">
            <p className="text___para mt-0 font-semibold text-headingColor">
                Lorem, ipsum dolor.
            </p>

            <ul className="mt-2">
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semi">
                        Monday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semi">
                        3:00 PM - 8:00 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semi">
                        Tuesday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semi">
                        3:00 PM - 8:00 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semi">
                        Wednesday
                    </p>
                    <p className="text-[15px] leading-6 text-textColor font-semi">
                        3:00 PM - 8:00 PM
                    </p>
                </li>
            </ul>
        </div>

        <button className='btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SidePanel