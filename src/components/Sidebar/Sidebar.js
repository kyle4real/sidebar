import React, { useContext, useState, useRef } from "react";
import { logoSVG } from "../../assets";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SToggler,
    SToggleThumb,
} from "./styles";
import {
    AiOutlineHome,
    AiOutlineApartment,
    AiOutlineSetting,
    AiOutlineSearch,
    AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const searchRef = useRef(null);
    const { pathname } = useLocation();
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton onClick={() => setSidebarOpen((p) => !p)} isOpen={sidebarOpen}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            <SSearch
                style={!sidebarOpen ? { width: `fit-content` } : {}}
                onClick={searchClickHandler}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    placeholder="Search"
                    ref={searchRef}
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer isActive={to === pathname} key={label}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink style={!sidebarOpen ? { width: `fit-content` } : {}} to="/">
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "Statistics",
        icon: <MdOutlineAnalytics />,
        to: "/statistics",
        notification: 3,
    },
    {
        label: "Customers",
        icon: <BsPeople />,
        to: "/customers",
        notification: 0,
    },
    {
        label: "Diagrams",
        icon: <AiOutlineApartment />,
        to: "/diagrams",
        notification: 1,
    },
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
];

export default Sidebar;
