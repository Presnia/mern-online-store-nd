import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/big-star.png';
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, [id]);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={400} src={process.env.REACT_APP_API_URL + device.img} />
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
                {device.info.map((info, index) => (
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