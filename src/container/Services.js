import React, { useState } from 'react'
import servicesApi from './servicesApi'
const Services = () => {
    const [servicesData , setservicesData] = useState(servicesApi);
  return (
    <>
      <section className='services-main-container'>
           <div className='container services-container'>
               <h1 className='main-heading text-center '>How To Send Money</h1>
               <div className='row'>
                   {servicesData.map((item) =>{
                       return(
                           <>
                            <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
                       <i className={`fontawesome-style ${item.logo}`}></i>
                       <h3 className='sub-heading'>{item.title}</h3>
                       <p className='main-hero-para '>
                           {item.Desc}
                       </p>
                   </div>
                           </>
                       );
                   })

                   }
                  
               </div>
           </div>
      </section>
    </>
  )
}

export default Services