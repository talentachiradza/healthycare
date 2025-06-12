
import { services } from '../assets/data/services'
import ServiceCard from '../components/Services/ServiceCard'

const Services = () => {
  return (
     <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {services.map((item, index) => (
          <ServiceCard item={item} index={index} key={index} />
        ))}
    </div>
     </div>
  )
}

export default Services