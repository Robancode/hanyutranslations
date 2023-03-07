import React, { useState } from "react";
import { HSK6 } from "./HSK6";
import styled from "styled-components";
// import { Button as MaterialUiButton, Box } from '@material-ui/core';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { styles } from "./styles";
import { Card, Button as MaterialUiButton } from "react-bootstrap";
// import {  } from "react-icons/BsArrowLeft";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// sticky colors: #ff7eb9,#ff65a3,#7afcff,#feff9c,#fff740

export const FlipCardAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 50%;
`;

export const CardContainer = styled(Card)`
  font-family: ${styles.fontArchitect};
  height: 20rem;
  color: ${styles.biroRed};
  background-color: ${styles.postitYellow};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.p`
  justify-self: center;
  align-self: center;
`;

export const CardContent = styled.div`
  font-size: ${styles.fontMedium};
  flex-grow: 2;
  align-self: center;
`;

export const ChineseContent = styled.div`
  font-family: ${styles.fontChinese};
  font-size: ${styles.fontLarge};
`;

export const TextSection = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled(MaterialUiButton)`
  flex-grow: 2;
`;

export const CardFront = styled.div`
  color: ${styles.biroBlue};
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  flex-grow: 1;
`;

export const SideLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
`;

export const Explanation = styled.div`
  font-size: ${styles.fontMedium};
  flex-grow: 2;
  padding: 2rem;
  text-align: center;
  color: ${styles.biroGreen};
  overflow: scroll;
`;

const initialState = HSK6[0].key - 1;

export const FlipCards = () => {
  const [counter, setCounter] = useState(initialState);
  const [front, setFront] = useState(true);

  // A UseEffect to enable the left and right keyboard keys to control the flipcards
  // React.useEffect(() => {
  //   window.addEventListener('keydown', (event) => {
  //     switch (event.keyCode) {
  //       case 37:

  //         counter === 0 ? setCounter(0) : setCounter(counter + -1)
  //         break;
  //       case 38:
  //         console.log('up');
  //         break;
  //       case 39:
  //         console.log(counter)
  //         counter === HSK6.length ? setCounter(counter) : setCounter(counter + 1)

  //         break;
  //       case 40:
  //         console.log('down');
  //         break;
  //     }
  //   });
  // }, [counter])

  // display the data with the key of card state
  return (
    <FlipCardAndButtonsContainer>
      <ButtonsContainer>
        <Button
          variant='light'
          onClick={() =>
            counter === 0 ? setCounter(0) : setCounter(counter + -1)
          }
        >
          <BsArrowLeft />
        </Button>
        <Button
          variant='light'
          onClick={() =>
            counter === HSK6.length
              ? setCounter(counter)
              : setCounter(counter + 1)
          }
        >
          <BsArrowRight />
        </Button>
      </ButtonsContainer>
      <CardContainer boxShadow={4} onClick={() => setFront(!front)}>
        {front === true ? (
          <>
            <SideLabel>Front</SideLabel>
            <CardFront>
              <CardTitle>Hanzi:</CardTitle>
              <ChineseContent>{HSK6[counter].chinese}</ChineseContent>
              <CardTitle>Pinyin:</CardTitle>
              <CardContent>{HSK6[counter].pinyin}</CardContent>
            </CardFront>
          </>
        ) : (
          <>
            <SideLabel>Back</SideLabel>
            <Explanation>{HSK6[counter].meaning}</Explanation>
          </>
        )}
        {counter + 1} / {HSK6.length}
      </CardContainer>
    </FlipCardAndButtonsContainer>
  );
};
