import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const CreateDevice = ({show, onHide}) => {
    const {device} =useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mb-2">
                        <DropdownToggle>Choose the type</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownToggle>Choose the brand</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter device name..."
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter device cost..."
                        type="number"
                    />
                    <Form.Control
                        className="mt-2"
                        type="file"
                    />
                    <hr/>
                    <Button
                        variant={'outline-success'}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map(i =>
                        <Row className="mt-3" key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder="Enter device name..." />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder="Enter device property..." />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;