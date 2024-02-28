import Link from "next/link";
import styled from "styled-components";

const NavLink = styled.a`
  font-size: 1.5rem;
  position: relative;
  transition: all 0.2s;
  color: white;

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 6px;
    bottom: -16px;
    left: 0;
    background-color: black;
    transition: all 0.2s;
  }

  &:hover {
    font-weight: bold;
    &::before {
      width: 100%;
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled(NavLink)`
  &::before {
    display: none; // Hide the before pseudo-element on dropdown items
  }
`;

const NavItemContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownMenu}, &:focus-within ${DropdownMenu} {
    display: block;
  }
`;


// Styled button for accessible dropdown toggle
const DropdownToggle = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  padding: 0;
  cursor: pointer;
`;



//  NavItem component with dropdown support. It takes a text, href, and dropdown prop. If the dropdown prop is 
// present, it will render a dropdown menu with the items provided in the dropdown prop. The dropdown items are 
// rendered as links and are wrapped in a Link component to ensure proper navigation and accessibility.

const NavItem = ({ text, href, dropdown }) => {
  return (
    <NavItemContainer>
      {/* Use a button for the dropdown toggle for better semantics and accessibility */}
      {dropdown ? (
        <DropdownToggle
          aria-haspopup="true" // Indicates that the button has a popup menu
          aria-expanded="false" // Indicates that the menu is not expanded by default
        >
          {text}
        </DropdownToggle>
      ) : (
        <Link href={href} passHref legacyBehavior>
          <NavLink>{text}</NavLink>
        </Link>
      )}
      {dropdown && (
        <DropdownMenu
          role="menu" // Role menu for the dropdown to inform assistive technologies
        >
          {dropdown.map((item) => (
            <Link key={item.text} href={item.href} passHref legacyBehavior>
              <DropdownItem role="menuitem" tabIndex="0">{item.text}</DropdownItem>
            </Link>
          ))}
        </DropdownMenu>
      )}
    </NavItemContainer>
  );
};

export default NavItem;
