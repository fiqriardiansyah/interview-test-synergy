import Link from "next/link";
import { GrGoogleWallet } from "react-icons/gr";
import Avatar from "./avatar";
import NavLinks from "./nav-links";
import NavActions from "./nav-actions";

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
                    <Avatar />
                </div>
            </div>
        </nav>
    );
}
