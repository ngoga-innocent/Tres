import React, { useState } from "react";
import Award from "../../assets/Success/award.jpg";
import gallery from "../../assets/Success/gallery14.jpg";
import ibsDas from "../../assets/Success/ibs-das.jpg";
import ierAward from "../../assets/Success/ier_award.jpg";
import LaborAward from "../../assets/Success/labor_award.jpg";
import materialSupply from "../../assets/Success/material_supply.jpg";
export const SuccessCard=({image,title})=>{
    const [mouseIn,setMouseIn]=useState(false)
    console.log(mouseIn)
    return(
        <div onMouseEnter={()=>setMouseIn(true)} onMouseOut={()=>setMouseIn(false)} className={`flex flex-col relative items-center justify-center h-[50vh] max-h-[50vh] overflow-hidden rounded-lg`}>
            <div className={`absolute h-[100%] w-[100%] transition-all ${mouseIn?'opacity-100':'opacity-0'}`} style={{backgroundColor:"rgba(255,255,255,0.6)"}}></div>
            <img src={image} alt={title} className="w-[100%] flex-1" />
            <h1 className={`absolute ${mouseIn?'md:translate-y-0':'md:translate-y-96'} transition-all duration-5000 font-bold` }>{title}</h1>
        </div>
    )
}
function Success() {
  const successProject = [
    {
      title: "RDB Award",
      image: Award,
    },
    {
      title: "IBS-DAS Project",
      image: ibsDas,
    },
    {
      title: "PIV Supply to IHS",
      image: materialSupply,
    },
    {
      title: "Labor Ministry Award",
      image: LaborAward,
    },
    {
      title: "100+ project site",
      image: gallery,
    },
    {
      title: "IER Rwanda",
      image: ierAward,
    },
  ];
  return (
    <section className="flex flex-col w-full text-center py-6 md:py-14">
      <div className="my-5">
        <h1 className="font-bold text-3xl">Our Recent Success </h1>
        <p>
          We ensure your success by continually improving customer satisfaction
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[70%] w-[90%] mx-auto gap-y-2 md:gap-3">
        {successProject.map((item,index)=>{
            return(
                <SuccessCard image={item.image} title={item.title} key={index} />
            )
        })}
      </div>
    </section>
  );
}

export default Success;
