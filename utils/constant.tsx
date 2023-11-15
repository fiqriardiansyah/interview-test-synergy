import { FiSearch, FiSettings } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { PiCommandLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsQuestion } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { RiFlashlightLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { PiStackSimple } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiWechat2Line } from "react-icons/ri";
import { ImShift } from "react-icons/im";
import { PiOption } from "react-icons/pi";
import { RiBox3Line } from "react-icons/ri";

export const MESSAGE_ERROR_DEFAULT = "Ooops something went wrong!";

export const route = {
    dashboard: "/",
    crm: "/crm",
    submission: "/submission",
    commision: "/commision",
    lms: "/lms",
    profile: "/profile",
    crmClient: "/crm",
    crmPolicy: "/crm/policy",
    crmSupport: "/crm/support",
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

export const menuActions1 = [
    {
        title: "View profile",
        icon: <RiUser3Line />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />K<IoIosArrowRoundForward />P
            </p>
        ),
    },
    {
        title: "Settings",
        icon: <IoSettingsOutline />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />S
            </p>
        ),
    },
    {
        title: "Keyboard shortcuts",
        icon: <RiFlashlightLine />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <BsQuestion />
            </p>
        ),
    },
];

export const menuActions2 = [
    {
        title: "Company profile",
        icon: <RiHome6Line />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />K<IoIosArrowRoundForward />C
            </p>
        ),
    },
    {
        title: "Team",
        icon: <FiUsers />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />K<IoIosArrowRoundForward />T
            </p>
        ),
    },
    {
        title: "Invite colleagues",
        icon: <AiOutlineUserAdd />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />I
            </p>
        ),
    },
];

export const menuActions3 = [
    {
        title: "Changelog",
        icon: <PiStackSimple />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />K<IoIosArrowRoundForward />C
            </p>
        ),
    },
    {
        title: "Slack community",
        icon: <RiWechat2Line />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />K<IoIosArrowRoundForward />S
            </p>
        ),
    },
    {
        title: "Support",
        icon: <FaRegCircleQuestion />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />/
            </p>
        ),
    },
    {
        title: "API",
        icon: <RiBox3Line />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiCommandLight />A
            </p>
        ),
    },
];

export const menuActions4 = [
    {
        title: "Log out",
        icon: <MdLogout />,
        shortcut: (
            <p className="flex items-center !text-sm !text-gray-300">
                <PiOption />
                <ImShift />Q
            </p>
        ),
    },
];
