import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import BannerCart from "../components/BannerCart";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { cartArr, quanArr } from "./Home";
import { useState, useEffect } from "react";
import CheckoutItem from "../components/CheckoutItem";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const TopTexts = styled.span`
  cursor: pointer;
  margin: 0px 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.span`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 90vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  margin: 0px 5px 0px 0px;
`;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: pink;
  color: black;
  font-weight: 900;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ReturnButton = styled.button`
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: #e67373;
  color: #241f1f;
  font-weight: 900;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Checkout = () => {
  const [totalItemInCheckOut, setTotal] = useState(0);

  useEffect(() => {
    handleTotalItem();
  },[totalItemInCheckOut]);

  const handleTotalItem = () => {
    let count = 0;
    for (let i = 0; i < quanArr.length; i++){
      count += quanArr[i][1];
    }
    setTotal(count);
  }

  const recycleCart = () => {
    alert('Thank you for ordering!');
    let arrLength = quanArr.length;
    quanArr.splice(0, arrLength);
    cartArr.splice(0, arrLength);
    // Start the process of destroy everything
  }

  return (
    <Container>
      <Announcement />
      <BannerCart />
      <TopTexts><Link to="/">Home</Link> {'>'} <Link to="/user/cart">Cart</Link> {'>'} <Link to="/user/checkout">Place Order</Link> </TopTexts>
      <Wrapper>
        <Bottom>
          <Info>
            {cartArr.map((item) => (
              <CheckoutItem item = {item}/>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>SHIPPING INFORMATION</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Name:</SummaryItemText>
            <SummaryItemPrice>Hanh Duyen</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Address:</SummaryItemText>
            <SummaryItemPrice>268 Ly Thuong Kiet street, ward 14, district 10, Ho Chi Minh city</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Phone:</SummaryItemText>
              <SummaryItemPrice>0911233211</SummaryItemPrice>
            </SummaryItem>
            <Link to="/user/login">
            <Button>CHANGE</Button>
            </Link>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Items:</SummaryItemText>
            <SummaryItemPrice>{totalItemInCheckOut}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Subtotal:</SummaryItemText>
            <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Shipping fees:</SummaryItemText>
            <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <Link to = "/" onClick={() => recycleCart()}>
              <Button>PLACE ORDER</Button>
            </Link>

            <Link to = "/user/cart">
              <ReturnButton color="#e67373">RETURN TO CART</ReturnButton>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};


export default Checkout;
