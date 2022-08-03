import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useProduCt from '../Hook/useProduct';


const ManageCart = ({manage, handleDelete}) => {

  return (
    <div className='col-12 col-sm-6 col-lg-4'>
      
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={manage.image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              description: {manage.description}
            </Card.Text>
            <Card.Text>
              quantity{manage.quantity}
            </Card.Text>
            <Card.Text>price:{manage.price}</Card.Text>
            <Card.Text>Name: {manage.name}</Card.Text>
            <Button variant="primary" onClick={() => handleDelete(manage._id)}>DELETE</Button>
          </Card.Body>
        </Card>
    </div>
  );
};

export default ManageCart;