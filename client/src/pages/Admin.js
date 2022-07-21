import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container
            className="d-flex flex-column mt-5"
            style={{width: '50%'}}
        >
            <Button
                variant={'outline-success'}
                className="mt-4 p-3"
                style={{borderRadius: 10}}
                onClick={() => setTypeVisible(true)}
            >
                Add New Type
            </Button>
            <Button
                variant={'outline-success'}
                className="mt-4 p-3"
                style={{borderRadius: 10}}
                onClick={() => setBrandVisible(true)}
            >
                Add New Brand
            </Button>
            <Button
                variant={'outline-success'}
                className="mt-4 p-3"
                style={{borderRadius: 10}}
                onClick={() => setDeviceVisible(true)}
            >
                Add New Device
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    );
};

export default Admin;