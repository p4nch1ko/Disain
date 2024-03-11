import Header from "@/components/Header";
import Image from 'next/image';
import naine from '@/image/naine.png';

export default function Home() {
  return (
    <div className="relative h-screen" style={{overflowX: 'hidden', overflowY: 'auto'}}>
      <div className="absolute inset-0">
        <Image src={naine} alt="Background" layout="fill" objectFit="cover"/>
      </div>
      <div className="absolute inset-x-0 top-0 p-4 z-10" style={{ marginBottom: '60cm' }}>
        <Header />
        <div className="desktop">
            <div className="content" style={{ position: 'absolute'}}>
                <div className="text" style={{position: 'relative' }}>
                    <h1 style={{ height: '8px', top:'70px', fontFamily: 'Stainy, sans-serif', transform: 'rotate(-8deg)', position: 'relative', fontSize: '160px', fontWeight: 400, right: '55%', left: '40%' }}>Meow</h1>
                    <div className="bottom" style={{ width: '330px', top: '300px', margin: '0 auto', borderTop: '2px #fff solid', position: 'relative', padding: '20px', right: '40%', left: '40%', textAlign: 'center', fontFamily: '"Zona Pro", sans-serif', fontSize: '18px', lineHeight: '18px', fontWeight: 400, letterSpacing: '1px' }}>
                        Meow Meow
                        <div className="owo" >
                            owo
                        </div>
                        <span> 69 </span>
                    </div>
                    <div className="naine-image">

                    </div>
                </div>
                
                <div className="social-links" style={{ position: 'absolute', marginBottom: '2cm', top: '150px', left: '1275px', zIndex: '142', transform: 'rotate(90deg)' }}>
                  <a className="social-bt" href="#" target="_blank" style={{margin: '10px', fontSize: '13px'}}>TWITTER</a>
                  <a className="social-bt" href="#" target="_blank" style={{margin: '10px', fontSize: '13px'}}>INSTAGRAM</a>
                </div>
                <div className="page frontpage" style={{position: 'absolute', top: '550px', left: '-30px', marginLeft: 'auto', marginRight: 'auto'}}>
                  <section className="sponsor diagonal" style={{position: 'sticky', left: '-10px',background: '#fff', transform: 'rotate(-3deg)', padding: '50px 720px 250px'}}>
                    <div className="diagonal-content">
                      <div className="sponsors-content">
                        <h5 style={{color:'black', transform: 'rotate(3deg)'}}>Sponsorid</h5>
                      </div>
                    </div>
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
