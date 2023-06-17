import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from './data/horrorBooks.json'
import singleCard from "../Components/singleCard";
import { nanoid } from 'nanoid'

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (

            <Container>
                <Row>
                    <Col>
                        {books.map((book) => {
                            return (
                                <singleCard
                                    key={book.asin}
                                    img={book.img}
                                    title={book.title}

                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>

        )
    }

}
export default MainContainer;