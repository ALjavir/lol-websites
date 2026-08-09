
import './Footer.css';
import logoImg from "~/assets/image/logo/logo-1.png"
import footerBg from "~/assets/image/canvas/footerBg.jpg"
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: 'PRIVACY NOTICE', href: 'https://www.riotgames.com/en/privacy-notice' },
        { label: 'TERMS OF SERVICE', href: 'https://www.riotgames.com/en/terms-of-service' },

        { label: 'ABOUT ME', href: 'https://portfolio-web-phi-cyan.vercel.app/' },
        { label: 'SERVER STATUS', href: 'https://status.riotgames.com/?locale=en_US&amp;region=na' },
    ];

    return (
        
        <footer className="main-footer">
            <img className='footer-img-bg' src={footerBg} alt="" />
    
            <div className="footer-container">

                <img className='logo' src={logoImg} alt="Leauge Of Legends X Javir" />

                <nav aria-label="Footer Navigation">
                    <ul className="footer-links">
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="nav-link" target="_blank"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. Copyright / Legal Disclaimer */}
                <p className="footer-disclaimer">
                    © {currentYear} LoL Explorer, Inc. All rights reserved. League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.
                </p>
                </div>
           
        </footer>
    );
}