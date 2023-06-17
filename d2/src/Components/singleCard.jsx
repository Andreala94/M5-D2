import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardImg.css"


class SingleCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img className="immagine" variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Title>{this.props.price}</Card.Title>
                    <Button id="bottone" variant="primary">Acquista</Button>
                </Card.Body>
            </Card>
            


        )
    }
}

export default SingleCard;