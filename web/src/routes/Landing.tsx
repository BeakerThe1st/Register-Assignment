import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ContentWrapper = styled.div`
    height: 80%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 700%;
    margin-bottom: 0;
`

const Subtitle = styled.h2`
    width: 100%;
    font-size: 4rem;
    margin-top: 2rem;
    font-weight: normal;
`
const Landing = () => {
    const [greetingTime, setGreetingTime] = useState('');
    let history = useHistory();

    const showNextPage = () => {
        //Await a session ID

        //Redirect user to kiosk
        history.push("/kiosk");
    }

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) {
            setGreetingTime('Morning')
        } else if (hours < 18) {
            setGreetingTime('Afternoon');
        } else {
            setGreetingTime('Evening');
        }
    }, []); 
    return (
        <PageWrapper onClick={showNextPage}>
            <ContentWrapper>
                <Title>Good {greetingTime} 👋</Title>
                <Subtitle>Touch Screen or Scan Item to Begin</Subtitle>
            </ContentWrapper>
        </PageWrapper>
    )
}

export { Landing };