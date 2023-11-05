import { navActions } from "../../utils/constant";
import NavActionBtn from "./nav-action-btn";

const NavActions = () => {
    return (
        <div className="sm:flex hidden items-center gap-4">
            {navActions.map((Action) => (
                <NavActionBtn key={Action.title} title={Action.title}>
                    <Action.icon />
                </NavActionBtn>
            ))}
        </div>
    );
}

const menuActions = navActions.map((Action) => ({
    key: Action.title,
    label: (
        <NavActionBtn title={Action.title} className="flex items-center gap-3 !text-sm">
            <Action.icon />
            <span>{Action.title}</span>
        </NavActionBtn>
    )
}))

NavActions.menuActions = menuActions

export default NavActions;