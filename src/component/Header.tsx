
import React,{FC} from 'react'
import { Container, Navbar, Nav,  } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'

const Header: FC = () => {
    
   
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Krushak Odisha</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
