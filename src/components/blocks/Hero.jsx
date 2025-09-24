import React from 'react';
import H1 from '../ui/H1';
import P from '../ui/P';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Hero = ({ bg = heroBg, header, subHeader }) => {
    return (
        <div
            className="lg:min-h-svh bg-slate-100 md:bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(
      to bottom,
      rgba(62, 62, 62, 0.58) 35%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(30, 30, 30, 0.13) 100%
    ), url(${bg})`,
            }}
        >
            <div className="container max-w-[1596px] mx-auto px-6 min-h-svh flex flex-col justify-center text-white relative">
                <div className="mx-auto md:max-w-9/10">
                    <H1 className='md:mb-[32.0px] md:mb-[40px]'>{header}</H1>
                    <P className='text-white !text-[26px]/[44px]'>{subHeader}</P>
                </div>
                <div className="absolute bottom-[70px] left-6 right-6 flex flex-row justify-between">
                    <div className="">
                        <HashLink smooth to="/#kim_jesteśmy">
                            <svg width="51" height="27" viewBox="0 0 51 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.7082 1.125L25.4998 25.3333L1.2915 1.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </HashLink>

                    </div>
                    <div className="">
                        <ul className='flex flex-row gap-[12px]'>
                            <li className='w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center'>
                                <Link to={'https://www.instagram.com/krakowska_grupa_deweloperska/'}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.75 7C0.75 5.3424 1.40848 3.75269 2.58058 2.58058C3.75269 1.40848 5.3424 0.75 7 0.75H17C18.6576 0.75 20.2473 1.40848 21.4194 2.58058C22.5915 3.75269 23.25 5.3424 23.25 7V17C23.25 18.6576 22.5915 20.2473 21.4194 21.4194C20.2473 22.5915 18.6576 23.25 17 23.25H7C5.3424 23.25 3.75269 22.5915 2.58058 21.4194C1.40848 20.2473 0.75 18.6576 0.75 17V7ZM7 3.25C6.00544 3.25 5.05161 3.64509 4.34835 4.34835C3.64509 5.05161 3.25 6.00544 3.25 7V17C3.25 17.9946 3.64509 18.9484 4.34835 19.6517C5.05161 20.3549 6.00544 20.75 7 20.75H17C17.9946 20.75 18.9484 20.3549 19.6517 19.6517C20.3549 18.9484 20.75 17.9946 20.75 17V7C20.75 6.00544 20.3549 5.05161 19.6517 4.34835C18.9484 3.64509 17.9946 3.25 17 3.25H7ZM16.4963 6.0175C16.4963 5.68598 16.6279 5.36804 16.8624 5.13362C17.0968 4.8992 17.4147 4.7675 17.7463 4.7675H17.7588C18.0903 4.7675 18.4082 4.8992 18.6426 5.13362C18.8771 5.36804 19.0088 5.68598 19.0088 6.0175C19.0088 6.34902 18.8771 6.66696 18.6426 6.90138C18.4082 7.1358 18.0903 7.2675 17.7588 7.2675H17.7463C17.4147 7.2675 17.0968 7.1358 16.8624 6.90138C16.6279 6.66696 16.4963 6.34902 16.4963 6.0175ZM12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM5.75 12C5.75 10.3424 6.40848 8.75268 7.58058 7.58058C8.75268 6.40848 10.3424 5.75 12 5.75C13.6576 5.75 15.2473 6.40848 16.4194 7.58058C17.5915 8.75268 18.25 10.3424 18.25 12C18.25 13.6576 17.5915 15.2473 16.4194 16.4194C15.2473 17.5915 13.6576 18.25 12 18.25C10.3424 18.25 8.75268 17.5915 7.58058 16.4194C6.40848 15.2473 5.75 13.6576 5.75 12Z" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                            <li className='w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center'>
                                <Link to={'https://www.facebook.com/krakowskagrupadeweloperska/?locale=pl_PL'}>
                                    <svg width="10" height="26" viewBox="0 0 10 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.66875 4.1187H10V0H7.66875C6.2961 0.00181662 4.98014 0.601518 4.00953 1.66756C3.03892 2.7336 2.4929 4.17895 2.49125 5.68656V8.23741H0V12.3561H2.5V26H6.25V12.3561H8.77625L9.51625 8.23741H6.25V4.93009C6.25291 4.71566 6.33185 4.51092 6.47004 4.35941C6.60822 4.20789 6.79476 4.12154 6.99 4.1187H7.66875Z" fill="white" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
