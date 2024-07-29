import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { UserLogo, HomeImg } from "assets";
import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${colors.transparentPrimary};
  box-shadow: 0 13px 10px rgb(0, 7, 10);
  color: white;
  position: relative;
`;

export const HeaderLogoContainer = styled.div`
  width: 40px;
  height: 40px;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`;

HeaderLogo.defaultProps = { src: UserLogo };

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavContainerFooter = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${HomeImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Делает фон статическим */
  overflow: auto; /* Добавляем прокрутку для содержимого */
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 150px;
  background-color: ${colors.primary};
  box-shadow: 0 -10px 10px rgb(0, 7, 10);
  color: white;
  position: relative;
  z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconLink = styled.a`
  color: white;
  font-size: 24px;
  &:hover {
    color: ${colors.transparentPrimary};
  }
`;

export const LogoutLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  font: inherit;
  padding: 0;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;
