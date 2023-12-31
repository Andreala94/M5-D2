import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from "./SingleCard";
import { nanoid } from 'nanoid'

class LastRelase extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidUpdate(){
    //     console.log(this.props)
    // }




    render() {


        return (

            <Container>
                <Row>
                    <Col  className="d-flex flex-wrap gap-3  ">
                        {this.props.myBooks.map((book) => {
                            return (
                                <SingleCard
                                    key={book.asin}
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>

        )
    }

}
export default LastRelase;