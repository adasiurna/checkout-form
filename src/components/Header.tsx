import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { PiCoffeeBold } from 'react-icons/pi';

const Header: React.FC = () => {
  return (
    <header className="pb-3 border-bottom">
      <Container className="mt-4">
        <Row>
          <Col className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <PiCoffeeBold className="me-2" size={24} />
              <h2>logoipsum</h2>
            </div>
            <FaShoppingCart size={24} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
