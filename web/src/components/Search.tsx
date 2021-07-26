import React, { ChangeEvent, useState } from 'react';

import styled from 'styled-components';

const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const SearchInput = styled.input`
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 0;
    border-bottom: 3px solid blue;
    width: 50%;
    font-weight: bold;
`

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.currentTarget.value);
    }
    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder="Enter your first item" value={searchText} onChange={handleInput} />
            <p>Or scan the item using the scanner below the screen</p>
        </SearchWrapper>
    )
}

export { Search };