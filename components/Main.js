import React from 'react';
import Image from 'next/image';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div >
                <div className="w-full flex justify-center items-center pt-7 mb-6">
                    <Image src='/../public/pic.jpg' alt='profile pic' className='rounded-full' width='400' height='1200'/>
                </div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Build Something Together</p>
                <h1 className='py-4 text-gray-700'>
                    Welcome! I'm <span className='text-[#a95c83]'>Holly Grudovich</span>
                </h1>
                <h2 className='py-4 text-gray-500'>
                    A Full Stack Web Developer
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am an international teacher turned full stack web developer! I hope to use my cross cultural 
                    perspective combined with technical knowledge to build interesting and user centric applications.
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