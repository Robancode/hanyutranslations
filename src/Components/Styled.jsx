import styled from "styled-components";
import { Navbar, Image, Container } from "react-bootstrap";
import greatwall from "./../assets/greatwall.jpeg";

export const LandingPageButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const StyledNavbar = styled(Navbar)`
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const StyledFooter = styled.footer`
  //   position: sticky;
  bottom: 0;
  z-index: 999;
`;

export const StyledAvatar = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const BackgroundImage = styled.div`
  background-image: url(${greatwall});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 15%;
  left: 10%;
  height: 100vh;
  width: 50vw;
  z-index: -1;
`;
