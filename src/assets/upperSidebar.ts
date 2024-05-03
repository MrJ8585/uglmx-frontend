import { Home, EventAvailable, SvgIconComponent } from "@mui/icons-material";

interface upperSidebarProps {
    title: string;
    icon: SvgIconComponent;
    path: string;
}

export const upperSidebar : upperSidebarProps[] = [
    {
        title: "Home",
        icon: Home,
        path: "/",
    },
    {
        title: "My Work",
        icon: EventAvailable,
        path: "/events",
    },
];