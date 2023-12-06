import { Button, Nav, Container, Navbar as NavBarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export function NavBar(){
    return(
        <NavBarBs sticky="top" className= "bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto"> {/*Pone margin del lado derecho automatico*/}
                    <Nav.Link to="/" as={NavLink}> 
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button style={{width: "3rem", height:"3rem", position: 'relative'}}
                variant="outline-primary"
                className="rounded-circle"> 
                {/*rounded circle para futuro ver cantidad de items que tenemos!*/}

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                    </svg>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:"white"}}>
                        3
                    </div>
                </Button>
            </Container>
        </NavBarBs>
    )
}