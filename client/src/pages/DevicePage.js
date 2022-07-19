import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/big-star.png';

const DevicePage = () => {
    const device = {id: 1, name: 'iPhone 13 Pro', price: 2500, rating: '5.0', img: `https://shop.mts.by/upload/resize_cache/iblock/311/600_900_1/iPhone_13_Pro_gold_1.jpg`};
    const description = [
        {id: 1, title: 'Capacity', description: '128 Gb'},
        {id: 2, title: 'Color', description: 'Gold'},
        {id: 3, title: 'Weight', description: '204 grams'},
        {id: 4, title: 'Display', description: '6.1-inch'},
        {id: 5, title: 'Chip', description: 'A15 Bionic chip'},
        {id: 6, title: 'Camera', description: 'Pro 12MP camera system: Telephoto, Wide, and Ultra Wide cameras'},
        {id: 7, title: 'Video Recording', description: 'Cinematic mode for recording videos with shallow depth of field (in 1080p at 30 fps)'},
    ];

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={400} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center m-auto"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 300, height: 300, fontSize: 50}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{border: 'none', fontSize: 32, height: 300, width: 300, background: 'lightgray', borderRadius: 16}}
                    >
                        <h3 style={{fontWeight: 300}}>from {device.price} BYN</h3>
                        <Button
                            variant={'outline-success'}
                            style={{display: 'inline-block', width: '90%', borderRadius: 10}}
                        >
                            Add to cart
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h2 className="d-flex ml-3">Tech Specs</h2>
                {description.map((info, index) => (
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', width: '97%', margin: 'auto', padding: 10, borderRadius: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default DevicePage;