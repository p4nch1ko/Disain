import Image from 'next/image';
import logo from '@/image/logo.png';

function Header() {
    return (
        <div className="flex items-center">
            <div className="mr-6" style={{ backgroundColor: 'transparent' }}>
                <Image src={logo} alt="transparent" style={{ backgroundColor: 'transparent', width: '150px', height: '120px' }} />
            </div>
            <div className="flex flex-wrap items-center ml-auto">
                <div className="mr-4 " style={{ marginBottom: '2cm' }}>
                    <div className="h-10" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal' }}>
                        <span className="hover:underline" style={{ borderBottom: '2px solid transparent' }}>Martist</span>
                    </div>
                </div>
                <div className="mr-4" style={{ marginBottom: '2cm' }}>
                    <div className="h-10" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal' }}>
                        <span className="hover:underline" style={{ borderBottom: '2px solid transparent' }}>Marti lood</span>
                    </div>
                </div>
                <div className="mr-4" style={{ marginBottom: '2cm' }}>
                    <div className="h-10" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal' }}>
                        <span className="hover:underline" style={{ borderBottom: '2px solid transparent' }}>Tulemused</span>
                    </div>
                </div>
                <div className="mr-4" style={{ marginBottom: '2cm' }}>
                    <div className="h-10" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal' }}>
                        <span className="hover:underline" style={{ borderBottom: '2px solid transparent' }}>Järgmised turniirid</span>
                    </div>
                </div>
                <div className="mr-4" style={{ marginBottom: '2cm' }}>
                    <div className="h-10" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal' }}>
                        <span className="hover:underline" style={{ borderBottom: '2px solid transparent' }}>Sponsorid</span>
                    </div>
                </div>
                <div className="mr-4" style={{ marginBottom: '2cm' }}>
                    <div className="h-10" style={{ height: '8px', fontFamily: 'cursive', fontWeight: 'normal' }}>
                        <span className="hover:underline" style={{ borderBottom: '2px solid transparent' }}>Kontakt</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;







