import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink
                    to={SHOP_ROUTE}
                    style={{color: 'tomato', textDecoration: 'none'}}
                >
                    BuyDevice
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(LOGIN_ROUTE)} className="ml-3"
                        >
                            Login
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => user.setIsAuth(true)}
                        >
                            Authorization
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;