// Next link
import Link from 'next/link'
// Next router
import { useRouter } from 'next/router'

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
      <nav className='fixed w-full xl:w-16 xl:max-w-md h-max xl:h-screen top-0 bottom-0 xl:right-[2%] flex flex-col items-center xl:justify-center mt-auto gap-y-40 z-50'>
      {/* inner */}
        <div className='flex xl:flex-col items-center justify-between xl:justify-center w-full gap-y-10 px-4 md:px-40 py-8 xl:px-0 h-[80px] xl:h-max bg-white/10 xl-h-max backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
          {navData.map((link, index) => {
            return (
                <Link
                    className={`${link.path === pathname && 'text-accent/70'} group relative flex items-center hover:text-accent/70 transition-all duration-300`}
                    href={link.path}
                    key={index}
                >
                  {/* tooltip */}
                  <div className='hidden xl:group-hover:flex absolute right-0 pr-14'>
                    <div className='relative flex items-center p-[6px] text-primary bg-white rounded-[3px]'>
                      <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                    {/* triangle */}
                      <div className="absolute left-full border-solid border-l-8 border-l-white border-r-0 border-y-[6px] border-y-transparent"></div>
                    </div>
                  </div>
                  {/* icon */}
                  <div>{link.icon}</div>
                </Link>
            )
          })}
        </div>
      </nav>
  )
};

export default Nav;
