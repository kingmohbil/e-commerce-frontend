import { NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

const NavbarItems = () =>
  siteConfig.navItems.map((item) => (
    <NavbarItem key={crypto.randomUUID()}>
      <Link className="text-md" href={item.href}>
        {item.label}
      </Link>
    </NavbarItem>
  ));

export default NavbarItems;
