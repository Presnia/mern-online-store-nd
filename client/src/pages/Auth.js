import React, {useContext, useState} from 'react';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} =useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;

            if (isLogin) {
                data = await login(email, password);
                console.log(data)
            } else {
                data = await registration(email, password);
                console.log(data)
            }
            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-md-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card className="p-5" style={{width: 600}}>
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter Your e-mail..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter Your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <section className="d-flex flex-row align-items-center">
                                <div className="mr-3">Have no account yet?</div>
                                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </section>
                            :
                            <section className="d-flex flex-row align-items-center">
                                <div className="mr-3">Have an account?</div>
                                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </section>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? "Login" : "Registration"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;