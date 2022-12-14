import React from 'react'
import { css } from 'styled-components/macro'
import styled from 'styled-components'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Faire le Quiz</h1>
            <h4>Bonne chance.</h4>
            <Button onClick={startQuiz} css={btnCSS}>Commencer</Button>
        </Intro>
    )
}

export default Start
