import React, { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Side from './Side'





export default function AppLayout({children}) {



  return (
    
      <Row className=' w-100 position-relative p-0 m-0'>
          <Side />
          <Container fluid>
            <main>{children}</main>
          </Container>
      </Row>
        
    

    
  )
}
