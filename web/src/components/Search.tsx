import { MongoClient } from "mongodb";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";

import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchForm = styled.form`
  padding: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 0;
  border-bottom: 3px solid blue;
  font-weight: bold;
  width: 500px;
`;

const ErrorText = styled.p`
  color: red;
`;

const Search = (props: { addItem: Function }) => {
  const [searchText, setSearchText] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const itemName = searchText.toLowerCase();
    event.preventDefault();
    const request = await fetch(`http://localhost:9000/item/${itemName}`, {
      mode: "cors",
    });

    if (!request.ok) {
      setErrorText("Item not found. Please check the spelling and try again.");
      return;
    }

    const item = await request.json();

    props.addItem(item);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };
  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Type an item name"
          value={searchText}
          onChange={handleInput}
        />
      </SearchForm>

      <p>Enter the exact name found on your item and press enter.</p>
      <ErrorText>{errorText}</ErrorText>
    </SearchWrapper>
  );
};

export { Search };
