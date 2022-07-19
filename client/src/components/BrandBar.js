import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className="p-3 mr-2 mb-2"
                    style={{cursor: 'pointer', borderRadius: 16}}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'success' : 'gray'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;