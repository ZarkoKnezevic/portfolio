import {useState} from "react";

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 />,
                    <FaCss3 />,
                    <FaJs />,
                    <FaReact />,
                    <SiNextdotjs />,
                    <SiFramer />,
                    <FaWordpress />,
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
            },
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: 'Webby Awards - Honoree',
                stage: '2011 - 2012',
            },
            {
                title: 'Adobe Design Achievement Awards - Finalist',
                stage: '2009 - 2010',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ],
    },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counter
import CountUp from "react-countup";

const About = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className='h-full py-32 text-center bg-primary/30 xl:text-left'>
            {/* circle */}
            <Circles />
            {/* avatar */}
            <motion.div
                className='hidden xxl:flex absolute bottom-0 -left-[360px]'
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
                <Avatar src={'/profile.png'}/>
            </motion.div>
            <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
                {/* text */}
                <div className='flex flex-1 flex-col justify-center'>
                    <motion.h2
                        className='h2'
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        Captivating <span className='text-accent'>stories</span> birth magnificent designs
                    </motion.h2>
                    <motion.p
                        className='mx-auto mb-6 px-2 max-w-[500px] xl:mx-0 xl:mb-12 xl:px-0'
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        5 years ago, I began coding as a developer. Since then I have done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.
                    </motion.p>
                    {/* counters */}
                    <motion.div
                        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <div className='flex flex-1 xl:gap-x-6'>
                            {/* experience  */}
                            <div className='flex flex-col items-center xl:items-start after:absolute relative after:top-0 after:right-0 after:h-full flex-1 after:bg-white/10 after:w-[1px]'>
                                <div className='mb-2 text-2xl font-extrabold text-accent xl:text-4xl'>
                                    <CountUp start={0} end={5} duration={5} delay={1}/> +
                                </div>
                                <div className='max-w-[100px] text-xs uppercase tracking-[1px] leading-[1.4]'>Years of Experience</div>
                            </div>
                            {/* clients */}
                            <div className='flex flex-col items-center xl:items-start after:absolute relative after:top-0 after:right-0 after:h-full flex-1 after:bg-white/10 after:w-[1px]'>
                                <div className='mb-2 text-2xl font-extrabold text-accent xl:text-4xl'>
                                    <CountUp start={0} end={20} duration={5} delay={1}/> +
                                </div>
                                <div className='max-w-[100px] text-xs uppercase tracking-[1px] leading-[1.4]'>Satisfied Clients</div>
                            </div> {/* projects */}
                            <div className='flex flex-col items-center xl:items-start after:absolute relative after:top-0 after:right-0 after:h-full flex-1'>
                                <div className='mb-2 text-2xl font-extrabold text-accent xl:text-4xl'>
                                    <CountUp start={0} end={50} duration={5} delay={1}/> +
                                </div>
                                <div className='max-w-[100px] text-xs uppercase tracking-[1px] leading-[1.4]'>Finished Projects</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* info */}
                <motion.div
                    className='flex w-full flex-col h-[480px] xl:max-w-[48%]'
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                >
                    <div className='mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' || 'after:bg-white'} cursor-pointer capitalize xl:text-lg relative after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px]`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className='flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/60 md:flex-row'>
                                    {/* title */}
                                    <div className='mb-2 font-light md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    <div>{item.stage}</div>
                                    <div className='flex gap-x-4'>
                                        {/* icons */}
                                        {item.icons?.map((icon, itemIndex) => {
                                            return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
