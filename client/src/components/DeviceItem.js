import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star-outlined.png';
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory();

    return (
        <Col md={3} className="p-0" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 170, cursor: 'pointer', border: 'light', borderRadius: 16}} className="mt-3 p-2">
                <Image src={process.env.REACT_APP_API_URL + device.img} width={150} height={200} style={{backgroundSize: 'contain'}}/>
                <section className="pl-1 pr-1">
                    <section className="d-flex justify-content-between align-items-center mt-1 text-black-50">
                        <div>Apple</div>
                        <div className="d-flex align-items-center">
                            <div>{device.rating}</div>
                            <Image src={star} alt="star icon" className="ml-1" width={16} height={16} />
                        </div>
                    </section>
                    <div>{device.name}</div>
                </section>
            </Card>
        </Col>
    );
};

export default DeviceItem;