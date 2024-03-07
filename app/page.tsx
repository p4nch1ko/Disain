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
        <div className="desktop">
            <div className="content" style={{ position: 'absolute' }}>
                <div className="text" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal', position: 'relative' }}>
                    <h1 style={{ height: '8px', top:'70px', fontFamily: 'Stainy, sans-serif', transform: 'rotate(-8deg)', position: 'relative', fontSize: '160px', fontWeight: 400, right: '55%', left: '40%' }}>Meow</h1>
                    <div className="bottom" style={{ width: '330px', top: '300px', margin: '0 auto', borderTop: '2px #fff solid', position: 'relative', padding: '20px', right: '40%', left: '40%', textAlign: 'center', fontFamily: '"Zona Pro", sans-serif', fontSize: '18px', lineHeight: '18px', fontWeight: 400, letterSpacing: '1px' }}>
                        Meow Meow
                        <div className="owo">
                            owo
                        </div>
                        <span> 69 </span>
                    </div>
                    <div className="naine-image">

                    </div>
                </div>
                
                <div className="social-links" style={{ position: 'absolute', left: '-10px', zIndex: '142', transform: 'rotate(90deg)' }}>
                  <a className="social-bt" href="#" target="_blank">Twitter</a>
                  <a className="social-bt" href="#" target="_blank">Instagram</a>
                </div>
                <div className="page frontpage" style={{ position: 'relative', top: '-45px', background: '#fff', zIndex: '220', transform: 'rotate(-3deg)', marginLeft: '-100px', marginRight: '-100px' }}>
                  <section className="sponsor diagonal">

                  </section>
                </div>
                <div className="image" style={{ backgroundColor: 'transparent' }}>
                </div>
                <div className="diagonal" style={{ backgroundColor: 'transparent' }}>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
