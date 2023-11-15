// Next Image
import Image from "next/image";

const TopLeftImg = () => {
  return (
      <div className='absolute left-0 top-0 w-[200px] xl:w-[400px] mix-blend-color-dodge z-10 opacity-50'>
        <Image src='/top-left-img.png' alt="Top Left Image" width={400} height={400} />
      </div>
  );
};

export default TopLeftImg;
