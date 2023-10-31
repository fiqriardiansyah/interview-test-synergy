import { FiSearch, FiSettings } from "react-icons/fi";
import { MdOutlineNotificationsNone } from "react-icons/md";

export const route = {
    dashboard: "/",
    crm: "/crm",
    submission: "/submission",
    commision: "/commision",
    lms: "/lms",
    profile: "/profile"
};

export const navLinks = [
    { href: route.dashboard, text: "Dashboard" },
    { href: route.crm, text: "CRM" },
    { href: route.submission, text: "Submission" },
    { href: route.commision, text: "Commision" },
    { href: route.lms, text: "LMS" },
];

export const navActions = [
    { title: "Search", icon: FiSearch },
    { title: "Setting", icon: FiSettings },
    { title: "Notification", icon: MdOutlineNotificationsNone },
];
