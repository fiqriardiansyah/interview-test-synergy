import { navLinks } from "../../utils/constant";
import NavLink from "./nav-link";

const NavLinks = () => {
    return (
        <div className="lg:flex hidden items-center gap-4">
            {navLinks.map((link) => (
                <NavLink href={link.href} key={link.href}>
                    {link.text}
                </NavLink>
            ))}
        </div>
    );
};

const menuLinks = navLinks.map((link) => ({
    key: link.href,
    label: (
        <NavLink href={link.href} className="font-normal text-sm p-0 bg-transparent hover:bg-transparent focus:bg-transparent">
            {link.text}
        </NavLink>
    ),
}));

NavLinks.menuLinks = menuLinks;

export default NavLinks;
