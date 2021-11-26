import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100%;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    color: black;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const BannerCart = () => {
    var loginState = localStorage.getItem("isLogin")

    const handleLogOut = () => localStorage.setItem("isLogin", false);

    if (loginState === "true")
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Link style={{textDecoration: 'none'} }
                            to="/BlankPage">
                            <Logo>BKP.</Logo>
                        </Link>
                    </Left>

                    <Right>
                        <MenuItem onClick = {() => {window.scrollTo(0,document.body.scrollHeight);}}>ABOUT US</MenuItem>
                        
                        <MenuItem>WELCOME, {localStorage.getItem("currentuser")}!</MenuItem>

                        <Link
                            to="/BlankPage"
                            style={{ color: "inherit", textDecoration: "inherit" }}>
                            <MenuItem onClick = {() => handleLogOut()}>LOGOUT</MenuItem>
                        </Link>

                    </Right>
                </Wrapper>
            </Container>
        );
    else  
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Link style={{textDecoration: 'none'} }
                            to="/BlankPage">
                            <Logo>BKP.</Logo>
                        </Link>
                    </Left>

                    <Right>
                        <MenuItem onClick = {() => {window.scrollTo(0,document.body.scrollHeight);}}>ABOUT US</MenuItem>
                        
                        <Link to ="/user/login"
                            style={{ color: "inherit", textDecoration: "inherit"}}
                        >
                            <MenuItem>LOGIN</MenuItem>
                        </Link>

                    </Right>
                </Wrapper>
            </Container>
        );
};

export default BannerCart;