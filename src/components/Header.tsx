import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <svg 
            width="180" 
            height="40" 
            viewBox="0 0 400 80" 
            className="logo-svg"
            aria-label="LegalReach"
          >
            {/* Justice scales icon */}
            <g transform="translate(10, 10)">
              {/* Person figure */}
              <circle cx="30" cy="15" r="8" fill="#5B2C87"/>
              
              {/* Justice scales */}
              <g transform="translate(30, 25)">
                {/* Center post */}
                <rect x="0" y="0" width="2" height="35" fill="#5B2C87"/>
                
                {/* Horizontal beam */}
                <rect x="-20" y="8" width="40" height="2" fill="#5B2C87"/>
                
                {/* Left scale */}
                <g transform="translate(-15, 10)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#5B2C87" strokeWidth="1"/>
                  <path d="M -8 8 Q 0 12 8 8 L 8 15 Q 0 19 -8 15 Z" fill="none" stroke="#5B2C87" strokeWidth="1.5"/>
                </g>
                
                {/* Right scale */}
                <g transform="translate(15, 10)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#5B2C87" strokeWidth="1"/>
                  <path d="M -8 8 Q 0 12 8 8 L 8 15 Q 0 19 -8 15 Z" fill="none" stroke="#5B2C87" strokeWidth="1.5"/>
                </g>
              </g>
            </g>
            
            {/* LegalReach text */}
            <text x="90" y="50" className="logo-text" fill="#5B2C87">
              LegalReach
            </text>
          </svg>
        </div>
        <Link href="#" className="disclosure-link">
          DISCLOSURES
        </Link>
      </div>
    </header>
  );
}