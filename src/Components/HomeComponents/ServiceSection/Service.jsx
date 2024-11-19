import React from "react";
import coding from "../../../assets/ServiceIcons/coding.png";
import CustomerService from "../../../assets/ServiceIcons/customer-service.png";
import Global from "../../../assets/ServiceIcons/global.png";
import Tower from "../../../assets/ServiceIcons/satellite-tower.png";
import Support from "../../../assets/ServiceIcons/support.png";
import PieChart from "../../../assets/ServiceIcons/pie-chart.png";
//Service Card
export const Card = ({ icon, title, description }) => {
  return (
    <div className=" hover:translate-y-3 hover:cursor-pointer hover:bg-slate-900 transition-all hover:text-white flex flex-col items-center text-center py-2 px-3 rounded-lg shadow-md bg-white ">
      <img
        src={icon}
        alt={title}
        className="w-14 h-14 object-contain rounded-full border p-2"
      />
      <div className="flex flex-col gap-y-2 mt-4">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="font-subheading">{description}</p>
      </div>
      <button className="py-2 px-5 font-bold hover:bg-darkblue/80 text-white transition-all duration-2000 my-3 rounded-full bg-golden ">Read More</button>
    </div>
  );
};
export default function Service() {
  const ServiceList = [
    {
      icon: coding,
      title: "Site build",
      description:
        "Our resources support BTS infrastructure development and deployment, ensuring seamless data transmission and propagation with zero bit loss.",
    },
    {
      icon: CustomerService,
      title: "Managed Service",
      description:
        "Our integrated network management system maintains telecom networks, freeing Telcos to focus on core business activities for optimal performance.",
    },
    {
      icon: Global,
      title: "Material Supply",
      description:
        "We prioritize quality, security, and ease in our global supplier network, delivering exceptional products and services to our clients.",
    },
    {
      icon: Tower,
      title: "Site rental and Lease",
      description:
        "Co-location is a cost-effective, time-efficient telecom service, seamlessly integrating new customers onto existing BTS sites.",
    },
    {
      icon: Support,
      title: "Equipment Installation",
      description:
        "Our skilled team professionally installs and commissions equipment from industry-leading vendors like Ericsson, Huawei, Nokia, Vertiv, and Cisco.",
    },
    {
      icon: PieChart,
      title: "Network Optimization",
      description:
        "Our continuous quality monitoring and optimization system ensures optimal performance without compromising customer experience.",
    },
  ];

  return (
    <section className="bg-slate-600/20 w-full px-8 mt-5 md:px-auto px-xl md:py-7 flex flex-col items-center ">
      <div className="flex flex-col text-center ">
        <h1 className="text-xl font-bold ">Our Services</h1>
        <p>
          Experience unmatched satisfaction with our wide range of premium
          offerings.
        </p>
      </div>
      <div className="md:mt-12 mt-6 grid grid-cols-1 gap-y-7 md:gap-8 w-[90%] md:w-[70%] mx-auto md:grid-cols-3">
        {ServiceList.map((service, index) => {
          return (
            <Card
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
}
