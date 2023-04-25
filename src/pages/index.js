import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlockWrapper from '@/components/BlockWrapper'
import Hero from '@/components/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <BlockWrapper
      title="Jaydeep Ganatra"
      description="Porfolio Home"
      >
      <Hero/>
    </BlockWrapper>
  );
}
