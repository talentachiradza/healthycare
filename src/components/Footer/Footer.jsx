import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  { icon: <RiLinkedinFill className='group-hover:text-white w-5 h-6' />, url: 'https://www.linkedin.com/company/your-company-name/' },
  { icon: <AiFillYoutube className='group-hover:text-white w-5 h-6' />, url: 'https://www.youtube.com/channel/your-youtube-channel-id/' },
  { icon: <AiFillGithub className='group-hover:text-white w-5 h-6' />, url: 'https://github.com/your-github-username' },
  { icon: <AiOutlineInstagram className='group-hover:text-white w-5 h-6' />, url: 'https://www.instagram.com/your-instagram-username/' }
];

const quickLinks01 = [
  { text: 'Home', url: '/home' },
  { text: 'About us', url: '/' },
  { text: 'Services', url: '/services' },
  { text: 'Blog', url: '/blog' }
];

const quickLinks02 = [
  { text: 'Find a Doctor', url: '/find-a-doctor' },
  { text: 'Request an Appointment', url: '/' },
  { text: 'Find a Location', url: '/' },
  { text: 'Get a Second Opinion', url: '/' }
];

const quickLinks03 = [
  { text: 'Donate', url: '/' },
  { text: 'Contact Us', url: '/contact' }
];

const Footer = () => {
  const year = new Date().getFullYear();
  
  return ( 
    <footer className='bg-gray-100 pb-16 pt-10'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="Logo" className="w-40" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright &copy; {year} developed by Talent Chiradza. All rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((Link, index) => (
                <a href={Link.url} key={index} target="_blank" rel="noopener noreferrer" 
                className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center
                justify-center group hover:bg-primaryColor hover:border-none">
                  {Link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (<li key={index} className='mb-4'>
                <Link to={item.url}
                className='text-[16px] leading-7 font-[400] text-textColor'
                >
                  {item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (<li key={index} className='mb-4'>
                <Link to={item.url}
                className='text-[16px] leading-7 font-[400] text-textColor'
                >
                  {item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (<li key={index} className='mb-4'>
                <Link to={item.url}
                className='text-[16px] leading-7 font-[400] text-textColor'
                >
                  {item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
