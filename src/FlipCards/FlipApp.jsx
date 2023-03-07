import { FlipCards } from "./FlipCards";
import styled from "styled-components";
import { styles } from "./styles";
// import Collapse from "react-bootstrap/Collapse";
// import { useState } from "react";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

export const StyledHeader = styled.p`
  font-size: ${styles.fontMedium};
  padding-bottom: 1rem;
  text-align: center;
  color: ${styles.biroBlue};
`;

function FlipApp() {
  // const [open, setOpen] = useState(false);
  return (
    <StyledApp>
      {/* <button onClick={() => setOpen(!open)}>open</button> */}
      <StyledHeader>Flashcards</StyledHeader>
      {/* <Collapse in={open}> */}
      <FlipCards />
      {/* </Collapse> */}
    </StyledApp>
  );
}

export default FlipApp;
