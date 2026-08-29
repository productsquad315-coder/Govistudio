import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  href?: string;
  className?: string;
  showText?: boolean;
}

export default function Logo({ href = "/", className = "", showText = true }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/assets/govi-mark-square.png"
        alt="Govistudio Logo"
        className="h-10 w-10 rounded-md"
        width={40}
        height={40}
        priority
        quality={90}
      />
      {showText && (
        <div className="font-bold text-xl tracking-tight">
          <span className="text-white">Govi</span>
          <span className="text-gray-500 font-normal">studio</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
