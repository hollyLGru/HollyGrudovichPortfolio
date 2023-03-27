import React from 'react';
import Image from 'next/image';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';

const Main = () => {
  return (
    <div className='w-full h-screen text-center pt-12 mb-10'>
        <div className='max-w-[1240px] w-full pt-12  mx-auto p-2 flex justify-center items-center'>
            <div >
                <div className="hidden md:flex w-full justify-center items-center pt-5 mb-6">
                    <Image src='/../public/pic.jpg' alt='profile pic' className='rounded-full' width='300' height='1200'/>
                </div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Create Together</p>
                <h1 className='py-4 text-gray-700'>
                    Welcome! I'm <span className='text-[#4A7564]'>Holly Grudovich</span>
                </h1>
                <h2 className='py-4 text-gray-500'>
                    A Full Stack Web Developer
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto leading-10'>
                    I am an international teacher turned full stack web developer! I hope to use my cross cultural 
                    perspective combined with technical knowledge to build unique, user centric applications.
                </p>
                <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Main