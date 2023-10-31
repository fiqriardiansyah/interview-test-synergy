import Image from "next/image";
import Link from "next/link";
import { GrGoogleWallet } from "react-icons/gr";
import { navActions, navLinks } from "../utils/constant";
import NavLink from "./nav-link";
import NavActionBtn from "./nav-action-btn";

function NavLinks() {
    return (
        <div className="flex items-center gap-4">
            {navLinks.map((link) => (
                <NavLink href={link.href} key={link.href}>
                    {link.text}
                </NavLink>
            ))}
        </div>
    );
}

function NavActions() {
    return (
        <div className="flex items-center gap-4">
            {navActions.map((Action) => (
                <NavActionBtn key={Action.title} title={Action.title}>
                    <Action.icon />
                </NavActionBtn>
            ))}
        </div>
    );
}

export default function NavBar() {
    return (
        <nav className="w-full border-b border-gray-200 sticky top-0">
            <div className="w-full container mx-auto px-8 py-3 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <GrGoogleWallet />
                        <span>Fiqri Corp</span>
                    </Link>
                    <NavLinks />
                </div>
                <div className="flex items-center gap-5">
                    <NavActions />
                    <button className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
                        <Image src="https://source.unsplash.com/random/300×300" alt="Fiqri ardiansyah" layout="fill" className="object-cover" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
