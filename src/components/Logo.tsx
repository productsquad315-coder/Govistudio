import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  href?: string;
  className?: string;
  imageClassName?: string;
}

export default function Logo({ href = "/", className = "", imageClassName = "h-8 w-auto" }: LogoProps) {
  const logoImage = (
    <Image
      src="/assets/Govilogo2.jpeg"
      alt="GOVI STUDIO"
      className={imageClassName}
      width={120}
      height={32}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className={`flex items-center ${className}`}>
        {logoImage}
      </Link>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      {logoImage}
    </div>
  );
}
