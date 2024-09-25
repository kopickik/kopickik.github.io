import Image from 'next/image';
import Link from 'next/link';

import spsvg from '../../img/spoonfedweb.svg';

export default function MainNav() {
  return (
    <header className="sticky top-0 h-16 p-6 w-full border-b dark:bg-black-default/0 border-b-blue-300 border-opacity-0 dark:border-opacity-0 transition-[border] duration-300 ease-in-out dark:border-[#333333] select-none">
      <Link
        href="krunchbots"
        className="dark:text-white text-black-default focus-visible:shadow-focus-ring max-h-12"
      >
        <Image src={spsvg} height={48} width={96} alt="spoonfedweb"></Image>
      </Link>
    </header>
  );
}
