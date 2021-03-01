import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const player = props.player;
    //destructuring player
    const {name, salary, image} = player;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={player.image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Salary: ${salary}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>props.handleSelection(player)}><FontAwesomeIcon icon={faFutbol} /> Hire</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Players;