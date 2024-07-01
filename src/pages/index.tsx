import Image from 'next/image';
import { Inter } from 'next/font/google';
import imageOne from '../../public/images/home-image-one.jpg';
import imageTwo from '../../public/images/home-image-two.jpg';
import { motion } from 'framer-motion';
import LeftImageContainer from './_components/hero/left-image-container';
import RightImageContainer from './_components/hero/right-image-container';
import ParagraphContainer from './_components/hero/paragraph-container';
import CategoriesContainer from './_components/category/categories-container';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 grid-rows-3 max-h-screen lg:min-h-screen lg:grid-rows-none lg:grid-cols-3 overflow-hidden">
        {/* left col */}

        <LeftImageContainer>
          <Image
            src={imageOne}
            width={5184}
            height={3456}
            alt="vinyl recod"
            className="w-full lg:h-[80%] object-cover"
          />
        </LeftImageContainer>

        {/* middle col */}
        <div className="flex flex-col justify-around px-3">
          <h1 className="text-3xl">Vinyl Forever</h1>
          <div className="text-left flex justify-end">
            <ParagraphContainer />
          </div>
        </div>

        {/* right col */}

        <RightImageContainer>
          <Image
            src={imageTwo}
            width={2400}
            height={300}
            alt="vinyl recod"
            className="h-full lg:h-[70%] lg:mb-[2em] object-cover"
          />
        </RightImageContainer>
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <CategoriesContainer />
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: '-200px', once: true }}
          className="h-[300px] w-[250px] bg-rose-400"
        ></motion.div> */}
      </section>
    </main>
  );
}
