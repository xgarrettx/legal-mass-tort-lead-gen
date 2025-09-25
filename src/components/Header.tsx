import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Legal Consultants</div>
        <Link href="#" className="disclosure-link">
          DISCLOSURES
        </Link>
      </div>
    </header>
  );
}
