import React from 'react'
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap'
const Cards = (props) => {
    return (
        <Col xs={props.size}>
            <Card>
                <CardImg
                    top
                    width="100%"
                    src={props.img}
                    alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.loc}</CardSubtitle>
                    <CardText>{props.body}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Cards;