import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Item } from "../routes";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 200px;
`;

const ItemListWrapper = styled.div`
  width: 100%;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  p {
    font-size: 1.2rem;
  }
`;

const FinishButton = styled.button`
  height: 40px;
  cursor: pointer;
`;

type ItemListProps = {
  items: Item[];
};

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 50px;
  }
`;

const ItemNameContainer = styled.div``;

const ItemPrice = styled.p``;

const ItemList = (props: ItemListProps) => {
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState<number>();
  useEffect(() => {
    let newTotalPrice = 0;
    for (const item of props.items) {
      newTotalPrice += item.price;
    }
    setTotalPrice(newTotalPrice);
  }, [props.items]);
  return (
    <ListWrapper>
      <ItemListWrapper>
        {props.items.map((item, index) => {
          return (
            <ItemContainer key={index}>
              <ItemNameContainer>
                <img src={item.image} alt="" />
                <p>{item.name.toLocaleUpperCase()}</p>
              </ItemNameContainer>
              <ItemPrice>${item.price}</ItemPrice>
            </ItemContainer>
          );
        })}
      </ItemListWrapper>
      <BottomBar>
        <p>Total ${totalPrice}</p>
        <FinishButton
          onClick={() => {
            localStorage.setItem("finished", "true");
            history.push("/");
          }}
        >
          Finish Shop
        </FinishButton>
      </BottomBar>
    </ListWrapper>
  );
};

export { ItemList };
