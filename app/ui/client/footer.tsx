import React from 'react';
import NavLinks from './nav-links';
import CompanyData from './footer/company-data';
import ConsumerDefense from './footer/consumer-defense';
import Copyright from './footer/copyright';
import Payment from './footer/payment';
import SocialMedia from './footer/social-media';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-around h-[50vh]">
      <div className="flex w-full justify-center">
        <SocialMedia />
      </div>
      <div className="flex justify-around w-3/5">
        <NavLinks />
      </div>
      <div className="flex">
        <CompanyData />
      </div>
      <div className="flex justify-around w-3/5">
        <Payment />
      </div>
      <div className="flex justify-around w-3/5">
        <Copyright />
      </div>
      <div className="flex justify-center">
        <ConsumerDefense />
      </div>
    </div>
  );
};

export default Footer;
