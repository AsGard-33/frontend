import { NavLink } from "react-router-dom";

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
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
