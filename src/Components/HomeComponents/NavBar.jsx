import React, { useState } from 'react';
import logo from '../../assets/logo.png';
export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoverState,setHoverState]=useState(false);
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  // NavLink component
  const NavLink = ({ link }) => {
    const isHovered = hoveredLink === link.name;
    const textColorClass = hoverState
      ? isHovered
        ? 'text-white' // Keep the hovered link white
        : 'text-gray-500' // Other links turn gray
      : 'text-white'; // Default state (not hovering over Navbar)

    return (
      <a
        href={link.href}
        className={`px-3 py-2 transition-colors duration-2000 text-white transition-all ${textColorClass}`}
        onMouseEnter={() => setHoveredLink(link.name)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {link.name}
      </a>
    );
  };

  return (
    <div
      className="flex flex-row justify-between items-center p-4 w-full"
      onMouseEnter={() => {setHoverState(true);}}
      onMouseLeave={()=>{setHoverState(false)}}
    >
      {/* Logo / Brand Section */}
      <div className="text-lg font-bold text-white">
        <img src={logo} alt="" className='w-20 h-20' />
        
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex flex-row gap-x-4 items-center">
        {navlinks.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
}
