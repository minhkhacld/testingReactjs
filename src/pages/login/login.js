import { faCircleInfo, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import { Col, ColCenter, ColRight, Row, RowCenter } from '../../components/utils/custom_tag';
import { useAuth } from '../../contexts/auth';
import './login.css';
import TitleAnimated from './title_animted/title_animated';

const Login = () => {

    const { signIn } = useAuth();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    const [user, setUser] = useState({
        email: "demo@minimos.cc",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        setLoading(true);
        const result = await signIn(user.email, user.password);
        // console.log(result);
        if (!result.isOK) {
            setMessage(result.data.message)
        }
        setLoading(false);
    }


    const onChangeEmail = (event) => {
        setUser({
            ...user, email: event.target.value
        })
        setMessage("")
    };

    const onChangePassword = (event) => {
        setUser({
            ...user, password: event.target.value
        });
        setMessage("")
    };

    const onFocusInputEmail = (e) => {
        e.target.select();
    };

    const onFocusInputPassword = (e) => {
        e.target.select();
    };

    const styles = {
        password: { position: 'absolute', zIndex: 10000, top: '50%', right: '2%', transform: `translate(${0}%, ${-50}%)` },
        forgotPassword: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
        button: {
            backgroundColor: "#30DD92", width: "100%", borderRadius: '5rem', border: 'none', height: 50, minHeight: 50,
            fontWeight: 'bold',
            marginBottom: '1rem', marginTop: '1rem',
        },
        suggest: {
            width: '100%', textAlign: 'center',
            display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            left: { fontSize: 14, fontWeight: 'bold', },
            right: { fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: "var(--darkBlue)", },
        },
    }

    return (
        <ColCenter className="container" id="home">
            <ColCenter className="login-header">
                <ColCenter className="logo">
                    <img src={require("../../assets/images/logo.png")} className="logo-picture" alt="logo" />
                </ColCenter>
                <Row className="title">
                    <Col className="text">
                        {/* <h4>Sign in to Minimal</h4> */}
                        <TitleAnimated />
                        <p>Enter your detail below</p>
                    </Col>
                    <ColRight className="picture">
                        <img src={require("../../assets/images/flower.png")} className="feature" alt="flower" />
                    </ColRight>
                </Row>
            </ColCenter>

            <Col className="login-form">

                <RowCenter className="note">
                    <Col className="icon">
                        <FontAwesomeIcon icon={faCircleInfo} color={'blue'} />
                    </Col>
                    <Col className="">
                        <p>Use email:<strong> demo@minimo.cc</strong> / password: <strong>demo1234</strong></p>
                    </Col>
                </RowCenter>

                <Form style={{ width: '100%' }} >
                    <Form.Group controlId="formPlaintextEmail" >
                        <Form.Label column >
                            Email
                        </Form.Label>
                        <Col >
                            <FormControl
                                type='text' defaultValue="demo@minimos.cc"
                                onChange={(e) => onChangeEmail(e)} style={{ height: 50 }}
                                onFocus={(e) => onFocusInputEmail(e)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formPlaintextPassword" >
                        <Form.Label column >
                            Password
                        </Form.Label>
                        <Col >
                            <InputGroup>
                                <FormControl
                                    type={showPassword ? "text" : "password"} placeholder="Password"
                                    onChange={(e) => onChangePassword(e)}
                                    onFocus={(e) => onFocusInputPassword(e)}
                                    onBlur={(e) => onChangePassword(e)}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    style={{ height: 50, }}
                                    required
                                />
                                <Col style={styles.password}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <FontAwesomeIcon icon={faEye} fontSize={24} color={showPassword ? 'var(--green)' : 'grey'}
                                    />
                                </Col>
                            </InputGroup>
                        </Col>
                    </Form.Group>

                    <Form.Group style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Row style={styles.forgotPassword}>
                            <Form.Check style={{ fontSize: 18 }}>
                            </Form.Check>
                            <Form.Label column style={{ fontSize: 14, marginLeft: 8 }}>
                                Remeber me
                            </Form.Label>
                            <Form.Text style={{ color: 'black', fontSize: 14 }}>Forgot Password?</Form.Text>
                        </Row>
                    </Form.Group>
                </Form>

                {message !== "" &&
                    <ColCenter style={{ color: 'tomato' }}>
                        {message}
                    </ColCenter>
                }
                {
                    loading &&
                    <Spinner animation="border" role="status" variant="success">
                        <span className="visually-hidden">Logging...</span>
                    </Spinner>
                }

                <Button type="submit" onClick={(e) => onSubmit(e)}
                    style={styles.button}
                >
                    Submit
                </Button>

                <Form.Group controlId="formPlaintextPassword" style={{ width: '100%', }}>
                    <Row style={styles.suggest}>
                        <Form.Text style={styles.suggest.left}>Don't have account yet?</Form.Text>
                        <Form.Text style={styles.suggest.right}>Get started</Form.Text>
                    </Row>
                </Form.Group>
            </Col>

        </ColCenter>
    )
};

export default Login