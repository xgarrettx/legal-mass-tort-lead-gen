import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            src="/legalreach-logo.png"
            alt="LegalReach"
            width={120}
            height={28}
            className="footer-logo-image"
          />
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