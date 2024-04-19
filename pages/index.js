// next image
import image from 'next/image';

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import {motion} from "framer-motion";

// variants
import {fadeIn} from '../variants';

const Home = () => {
    return <div className='h-full bg-primary/60'>
        {/* text*/}
        <div className='h-full w-full bg-gradient-to-r via-black/30 to-black/10 from-primary/10'>
            <div className='container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left'>
                {/* title */}
                <motion.h1
                    className='h1'
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    Transforming ideas <br /> Into <span className='text-accent'>Digital Reality</span>
                </motion.h1>
                {/* subtitle */}
                <motion.p
                    className='mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl'
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing.</motion.p>
                {/* btn */}
                <div className='relative flex justify-center xl:hidden'>
                   <ProjectsBtn />
                </div>
                <motion.div
                    className='hidden xl:flex'
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    <ProjectsBtn />
                </motion.div>
            </div>
        </div>
        {/* image */}
        <div>image</div>
    </div>;
};

export default Home;
