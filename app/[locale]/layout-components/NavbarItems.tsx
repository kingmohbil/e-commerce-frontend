import Link from 'next/link';

import { siteConfig } from '@/config/site';

const NavbarItems = () => (
  <>
    {siteConfig.navItems.map((item) => (
      <Link key={crypto.randomUUID()} className="text-sm" href={item.href}>
        {item.label}
      </Link>
    ))}
  </>
);

export default NavbarItems;
