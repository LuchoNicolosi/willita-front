import Link from 'next/link';
import NavLinks from './nav-links';

const NavBar = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex justify-between align-middle w-2/4 py-8 border-solid border-2 border-black">
        <div>
          <Link href="/">logo-empresa</Link>
        </div>
        <div className="flex justify-around w-3/5">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
