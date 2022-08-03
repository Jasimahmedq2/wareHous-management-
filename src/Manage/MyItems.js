import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyItems = ({pro, handleDelete}) => {
  const {image, description, quantity, price, name, _id} = pro;
  return (
    <div className='col-12 col-sm-6 col-lg-4'>
      
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            description: {description}
          </Card.Text>
          <Card.Text>
            quantity{quantity}
          </Card.Text>
          <Card.Text>price:{price}</Card.Text>
          <Card.Text>Name: {name}</Card.Text>
          <Button variant="primary" onClick={() => handleDelete(_id)}>DELETE</Button>
        </Card.Body>
      </Card>
  </div>
  );
};

export default MyItems;