import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegram, FaFacebook, FaVk } from 'react-icons/fa';
import { LayoutProps } from "./types";
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  NavContainerFooter,
  SocialIcons,
  IconLink
} from "./styles";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer>
          <NavLink to="/">
            <HeaderLogo />
          </NavLink>
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/register"
          >
            Register
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Login
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/logout"
          >
            Logout
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/profile"
          >
            Profile
          </StyledNavLink>

        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavContainerFooter>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/register"
          >
            Register
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Login
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/logout"
          >
            Logout
          </StyledNavLink>
        </NavContainerFooter>
        <SocialIcons>
          <IconLink href="https://www.instagram.com/oleksiinazarov/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://t.me/Nazarov_33_69" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </IconLink>
          <IconLink href="https://www.facebook.com/akujil" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </IconLink>
          <IconLink href="https://vk.com/akuzhil" target="_blank" rel="noopener noreferrer">
            <FaVk />
          </IconLink>
        </SocialIcons>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
