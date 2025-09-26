import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <svg 
            width="120" 
            height="28" 
            viewBox="0 0 400 80" 
            className="footer-logo-svg"
            aria-label="LegalReach"
          >
            {/* Justice scales icon */}
            <g transform="translate(10, 10)">
              {/* Person figure */}
              <circle cx="30" cy="15" r="8" fill="#4C5A69"/>
              
              {/* Justice scales */}
              <g transform="translate(30, 25)">
                {/* Center post */}
                <rect x="0" y="0" width="2" height="35" fill="#4C5A69"/>
                
                {/* Horizontal beam */}
                <rect x="-20" y="8" width="40" height="2" fill="#4C5A69"/>
                
                {/* Left scale */}
                <g transform="translate(-15, 10)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#4C5A69" strokeWidth="1"/>
                  <path d="M -8 8 Q 0 12 8 8 L 8 15 Q 0 19 -8 15 Z" fill="none" stroke="#4C5A69" strokeWidth="1.5"/>
                </g>
                
                {/* Right scale */}
                <g transform="translate(15, 10)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#4C5A69" strokeWidth="1"/>
                  <path d="M -8 8 Q 0 12 8 8 L 8 15 Q 0 19 -8 15 Z" fill="none" stroke="#4C5A69" strokeWidth="1.5"/>
                </g>
              </g>
            </g>
            
            {/* LegalReach text */}
            <text x="90" y="50" className="footer-logo-text" fill="#4C5A69">
              LegalReach
            </text>
          </svg>
        </div>
        <div className="footer-links">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Accessibility Statement</Link>
        </div>
      </div>
    </footer>
  );
}