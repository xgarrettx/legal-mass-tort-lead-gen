import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Image
            src="/legalreach-logo.png"
            alt="LegalReach"
            width={180}
            height={40}
            priority
            className="logo-image"
          />
        </div>
        <Link href="#" className="disclosure-link">
          DISCLOSURES
        </Link>
      </div>
    </header>
  );
}