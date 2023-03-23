// import Image from 'next/image'

const Navbar = () => {

    return(
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                {/* <Image src='/../public/logo.png' alt='' width='125' height='50' margin-bottom='25%'/> */}
                <h2 className='tracking-widest text-[#d17da7] drop-shadow-xl'>Holly Grudovich</h2>
            </div>
        </div>
    )
}

export default Navbar