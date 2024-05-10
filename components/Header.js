// next image
import Image from 'next/image';

// next link
import Link from 'next/link'

// components
import Socials from "./Socials";


const Header = () => {
  return (
      <header className='absolute z-30 flex w-full items-center px-16 xl:px-0 xl:h-[90px] '>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-y-4 py-8'>
                {/* logo */}
                <Link href={'/'}>
                    <div className='text-[20px] sm:text-2xl md:text-3xl leading-none'>
                        <span className='font-bold'>zarko </span>
                        <span className='font-light'>knezevic</span>
                        <span className='text-4xl text-accent'>.</span>
                    </div>
                </Link>
                {/* socials */}
                <Socials />
            </div>
        </div>
      </header>
  )
};

export default Header;
