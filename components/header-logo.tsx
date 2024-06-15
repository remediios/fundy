import Link from 'next/link';
import Image from 'next/image';

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo_white.svg" width={30} height={30} alt="logo" />
        <p className="text-white text-2xl font-bold tracking-tight ml-3">
          FUNDY
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
