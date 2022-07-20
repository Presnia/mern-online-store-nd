import React from 'react';
import {Button, Container} from "react-bootstrap";

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button>Add New Type</Button>
            <Button>Add New Brand</Button>
            <Button>Add New Device</Button>
        </Container>
    );
};

export default Admin;