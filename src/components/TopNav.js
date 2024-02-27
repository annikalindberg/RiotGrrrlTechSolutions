import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import NavItem from "./NavItem";


const Header = styled.header`
  position: sticky;
  z-index: 30;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primaryDark};
`;

const MenuBar = styled.button`
  // Changed from div to button for semantic HTML and accessibility
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  // Hide MenuBar on desktop
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ isActive }) =>
        isActive ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isActive }) => (isActive ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

// Adjust the MenuList to be more responsive with media queries
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 6rem;
  right: 0;
  width: 50%;
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  padding: 24px 16px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.primaryDark};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 12rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between; /* Adjusted for even spacing */
    align-items: center;
    position: static; /* Reset position for desktop */
    transform: none; /* Disable transformation for desktop */
    width: auto; /* Adjust width for desktop */
    padding: 2rem;
    gap: 10rem; /* Provide some gap between items, adjust as needed */
    top: auto;
    right: auto;
    height: auto;
    max-height: none;
    overflow-y: visible;
  }
`;

const Logo = styled.img`
  width: 50%; // Start with a relative width suitable for mobile
  max-width: 400px; // Example max-width for mobile
  height: auto; // Maintain aspect ratio

  // Media query for larger screens
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 80%; // Adjusted for larger screens
    max-width: 500px; // Example max-width for tablets and above
  }

  // Media query for larger screens
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%; // Further adjusted for desktop screens
    max-width: 300px; // Example max-width for desktops
  }
`;

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Posts", href: "/posts" },
  {
    text: "Services",
    href: "/services",
/*     dropdown: [
      {
        text: "Holistic Web Solutions",
        href: "/services/holisticWebSolutions",
      },
      {
        text: "Web Accessibility",
        href: "/services/web-accessibility-audits",
      },
      { text: "DEIB Labs", href: "/services/deib-labs" },
    ], */
  },
  
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const menuRef = React.useRef();
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNavActive(false);
    }
  };

  React.useEffect(() => {
    // Add when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []); // Empty dependency array means it will run once on mount and cleanup on unmount

  return (
    <Header>
      <Nav>
        <Link href={"/"}>
          <Logo
            src="/optimized-images-destination/GirlBoss-RoundLogo.svg"
            alt="GirlBoss Tech Solutions Logo"
          />
        </Link>
        <MenuBar
          aria-label="Toggle menu"
          aria-expanded={navActive ? "true" : "false"}
          onClick={() => setNavActive(!navActive)}
          isActive={navActive}
        >
          <div></div>
          <div></div>
          <div></div>
        </MenuBar>

        <MenuList ref={menuRef} isActive={navActive}>
          {MENU_LIST.map((menu, idx) => (
            <NavItem key={menu.text} active={navActive} {...menu} />
          ))}
        </MenuList>
      </Nav>
    </Header>
  );
};

export default Navbar;
