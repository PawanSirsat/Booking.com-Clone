'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from "next/image";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive ? 'text-blue-500' : 'text-gray-700'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} className="flex items-center">
              <div className={`flex items-center gap-1 ${isActive ? 'icon-active' : ''}`}>
                <Image 
                  src={link.imglink} width={20} height={20}
                  alt={link.label} className="shine-effect"
                />
                <span className="text-base pr-3">{link.label}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
