// component
import Circles from "../../components/Circles";

// icons
import {BsArrowRight} from 'react-icons/bs'

// framer
import {motion} from "framer-motion";

// variants
import {fadeIn} from "../../variants";

const Contact = () => {
    return <div className='h-full bg-primary/30'>
        <div className='container h-full flex items-center justify-center mx-auto py-32 text-center xl:text-left'>
            {/* text & form */}
            <div className='w-full max-w-[700px] flex flex-col'>
                {/* text */}
                <motion.h2
                    className='h2 text-center mb-12'
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    Let's <span className='text-accent'>connect.</span>
                </motion.h2>
                {/* form */}
                <motion.form
                    action=""
                    className='w-full flex-1 flex flex-col gap-6 mx-auto'
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    {/* input group */}
                    <div className="flex gap-x-6 w-full">
                        <input type="text" placeholder='name' className='input'/>
                        <input type="email" placeholder='email' className='input'/>
                    </div>
                    <input type="text" placeholder='subject' className='input'/>
                    <textarea placeholder='message' className='textarea'></textarea>
                    <button className='btn flex items-center justify-center rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 overflow-hidden hover:border-accent group'>
                        <span className='mr-2 group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                        <BsArrowRight className='absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500' />
                    </button>
                </motion.form>
            </div>
        </div>
    </div>;
};

export default Contact;
