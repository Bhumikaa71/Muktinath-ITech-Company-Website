import React from 'react'
import Heading from "../../components/my-comp/Heading";


function BannerPartnership() {
  return (
    <div>
        {/* //Empowering Agriculture through Technology Partnerships. */}
              <div className="flex justify-center py-10 px-6">
                <div className="max-w-7xl mx-auto bg-gradient-primary rounded-3xl w-full flex-2 lg:flex justify-center items-center">
                  {/* image */}
                  <div className="hidden lg:block px-8">
                    <img src="assets/Handshake.png" alt="Handshake images"></img>
                  </div>
        
                  <div className="flex flex-col p-4">        
                   <Heading
                    header={
                      "Empowering Agriculture through Technology Partnerships."}
                    headstyle={
                      "text-white"}
        
                    paragraph={
                      "The agriculture industry is undergoing a transformation fueled by technological advancements. As we strive to meet the growing demand for food sustainably, the role of technology in agriculture becomes increasingly vital."}
                    pstyle={"max-w-4xl text-white"} 
                    />                   
                  </div>
                </div>
              </div>
    </div>
  )
}

export default BannerPartnership