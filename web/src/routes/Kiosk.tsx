import React, { useState } from "react";
import { useEffect } from "react";
import { Prompt } from 'react-router-dom';
import { ItemList, Search } from "../components";
import styled from 'styled-components';

const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`

const ContentWrapper = styled.div`
    height: 80%;
    display: flex;
    width: 100%;
    justify-content: space-around;
    div {
        width: 40%;
    }
`

const Kiosk = () => {
    return (
        <PageWrapper>
            <ContentWrapper>
                <Search />
                <ItemList />
            </ContentWrapper>
        </PageWrapper>
    )
}

export { Kiosk };