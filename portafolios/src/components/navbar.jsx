import clsx from "clsx";
import React from "react";

// Navigation links for the navbar
const navigation = [
  { name: 'Home', href: '/' , current: true },
  { name: 'About me', href: '/Aboutme', current: false },
  { name: 'Projects', href: '/Projects', current: false },
  { name: 'Knowledge', href: '/Knowledge', current: false },
  { name: 'Experience', href: '/Experience', current: true },
  { name: 'Certifications', href: '/Certifications', current: false },
  { name: 'Contact', href: '/Contact', current: false },
];


function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {navigation.map((item) => (
          <li key={item.name}>
            <a 
            href={item.href} 
            className={clsx("hover:text-gray-400", {
                'font-semibold underline': item.current,
                'bg-white': !item.current
              })}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
