import React, { useState } from "react";
import { useEffect } from "react";
import { Prompt } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AssistanceButton, ItemList, Search } from "../components";
import styled from "styled-components";

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  height: 80%;
  display: flex;
  width: 100%;
  justify-content: space-around;
  div {
    width: 40%;
  }
`;

export type Item = {
  name: string;
  price: number;
  image: string;
};

const Kiosk = () => {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => {
    console.log("adding item");
    setItems([...items, item]);
  };
  return (
    <PageWrapper>
      <AssistanceButton />
      <ContentWrapper>
        <Search addItem={addItem} />
        <ItemList items={items} />
      </ContentWrapper>
      <ToastContainer />
    </PageWrapper>
  );
};

export { Kiosk };
