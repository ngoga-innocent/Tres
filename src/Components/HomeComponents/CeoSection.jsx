import React from "react";
import Ceo from "../../assets/CEO.jpg";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
export default function CeoSection() {
  return (
    <section className="w-full py-20 " id="ceo">
      <div className="md:w-[70%] mx-auto flex items-center flex-col  md:flex-row items-center relative">
        <img
          src={Ceo}
          className="md:h-[70vh] h-auto w-[90%] my-3 md:my-auto md:w-auto shadow-md shadow-black rounded-lg  "
          alt="Ceo Tres"
        />
        <div
          id="Ceo_word"
          data-aos="fade-left"
          className="px-5 py-5 rounded-xl bg-darkblue/90 h-fit mx-auto w-[90%] md:-ml-20 z-10 relative"
        >
          
          <div className="md:absolute md:-top-12 origin-center">
            <BiSolidQuoteAltLeft color="" className="text-golden md:text-[5rem]" />
          </div>
          <p className="text-white font-subheading">
            At TRES, we offer BTS end-to-end solution for a better ROI. Since
            2006, we developed skilled team with passion to make the BTS happy
            through BTS rollout, maintenance and operations, RF and microwave
            installation, optical fiber transmission and Network optimization.
            We do this with love, integrity, professionalism, and creativity
            because every bit counts.
          </p>
          <div className=" absolute -bottom-2 rounded-full h-4 w-[50%] bg-golden/90 z-50" />
        </div>

        <div className="bg-slate-800 hover:bg-golden/70 transition-all hover:cursor-pointer border border-golden/50 rounded-full px-8 py-2 absolute bottom-8 right-20 flex flex-row gap-x-1 items-center">
            <div className="h-10 w-1 bg-golden rounded-full" />
            <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold">Venuste Twagiramungu</h1>
                <p className="text-white text-sm">Ceo(MBA, MIPM)</p>
            </div>
        </div>
      </div>
    </section>
  );
}
