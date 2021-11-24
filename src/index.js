import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Container, Navbar, Nav,Button } from 'react-bootstrap'
import { menu } from './menu'


function Glavka() {
  const [menuItem, setMenuItem] = useState(menu)

  const moveDown = (item) => {
    if (item) {
      item.pItem = menuItem
      setMenuItem(item)
    }
  }
  const moveUp = (item) => {
    if (item.pItem !== null) setMenuItem(item.pItem)
  }
  return (
    <Navbar bg="light" expand="lg">
      <Button>Ru</Button>
      <Container style={{ paddingTop: '30px' }}>
        <Navbar.Toggle style={{ width: '100%', height: '45px', paddingLeft: '87%', background: 'white' }} className='fixed-top' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            {
              menuItem.name && <Nav.Link onClick={() => moveUp(menuItem)}><h4>{menuItem.name}</h4></Nav.Link>
            }
            {
              menuItem.submenu && menuItem.submenu.map((item, index) => {
                return (
                  <Nav.Link onClick={() => moveDown(item)}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Nav.Link>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}



ReactDOM.render(<Glavka />, document.getElementById('root'))