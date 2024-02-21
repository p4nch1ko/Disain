import Header from "@/components/Header";
import Image from 'next/image';
import naine from '@/image/naine.png';

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image src={naine} alt="Background" layout="fill" objectFit="cover"/>
      </div>
      <div className="absolute inset-x-0 top-0 p-4 z-10" style={{ marginBottom: '60cm' }}>
        <Header />
      </div>
    </div>
  );
}