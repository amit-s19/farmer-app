import axios from 'axios';
import React, { SyntheticEvent, useCallback, useState ,FC} from 'react'
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AapplicationId = "ef25287b-dff6-4471-9303-c106da974882";

const Login: FC = () => {
    const [loginId, setLoginId] = useState();
    const [password, setPassword] = useState();
    const navigateTo = useNavigate();
    const handleLogin = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        const url = `https://auth.konnect.samagra.io/api/login`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `HZmKaLCvHMJ36eChXdSpdT7IMqKXr-3rpldpCTmwBJxKFKDf-1h31QwN`
            }
        };
        console.log("vbn:",{loginId,password})
        axios.post(url, { loginId, password, applicationId: AapplicationId }, config).then(res => {
            if(res?.data?.token){
                localStorage.setItem('token',res?.data?.token);
                navigateTo("/home")
            }
        }).catch(err => {            
            toast.error(err.message)
        });
    }, [loginId,password]);


    return (
        <Container>
            <Row >
                <Col className='mx-auto mt-5 mb-5' md={6} >
                    <Card className="mb-2 p-3"
                    >
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="User Id" value={loginId} onChange={(e: any) => {
                                    console.log(e.target.value)
                                    setLoginId(e.target.value)}} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e: any) => {setPassword(e.target.value)}} />
                            </Form.Group>
                           
                            <Button variant="primary" onClick={handleLogin}>
                                Submit
                            </Button>
                        </Form>
                        </Card>
                </Col>

            </Row>

        </Container>
    )
}




export default Login

