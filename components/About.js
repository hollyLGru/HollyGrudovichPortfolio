import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className='w-full md:min-h-max	p-2 flex items-center py-16 bg-[#4A7564] text-white mt-10'>
        <div className='max-w-[1240px-] m-auto md:grid grid-cols-3 gap-8 ml-10 mr-10'>
            <div className='col-span-2'>
                <p className='py-4 uppercase text-3xl tracking-widest'>
                    About
                </p>
                <p className='py-2 text-xl leading-10 mb-5'>
                    After graduating from California State University of Chico in 2017, I craved adventure and an
                     opportunity to change the world. Equipped with nothing back a backpack and a thirst for the unknown,
                      I bought a one way ticket
                     to Bangkok, Thailand to embark on an epic solo adventure. I began my teaching career in Hanoi, Vietnam
                     where I spent several years working in a multitude of schools and language centers teaching English to students of 
                     various ages and socioeconomic backgrounds. I have travelled, lived, and taught in more than 30 countries spanning
                     across 5 continents. Unfortunately, the covid-19 pandemic left me little choice but to return to my home country. 
                </p>
                <p className='py-2 text-xl leading-10 mb-9'>
                    I spent the next year accumulating technical knowledge by completing Austin Coding Academy's fullstack,
                    javascript intensive program. Fueled by a new passion and desire to grow professionally, I am now persuing 
                    the opportunity to combine my unique cross cultural experience and technical expertise to contribute to a 
                    functional team with full time employment. I believe my appreciation for education as the most influential catalyst for 
                     economic and social development would allow me to become a hard-working an invaluable employee to your company!
                </p>
                {/* <h2 className='py-4 text-2xl text-gray-100 italic text-center mt-10 tracking-widest'>
                    “Not all those who wander are lost.” – JRR Tolkien
                </h2> */}
            </div>
            <div>
                <Image src='/../public/aboutmepic2.jpg' alt='/' width='900' height='1200'/>
            </div>
        </div>
    </div>
  )
}

export default About