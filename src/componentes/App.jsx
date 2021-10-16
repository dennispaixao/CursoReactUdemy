import React from 'react';
import Primeiro from './Primeiro';
import Fragmento from './Fragmento';
import Card from './layout/Card';

export default props => {
    return (
        <div className="CardContainer">
            <Card titulo="Primeiro" bgcolor="aqua"> <Primeiro /> </Card>
            <Card titulo="Fragmento" bgcolor="yellow"> <Fragmento /></Card>
            <Card titulo="Primeiro" > <Primeiro /> </Card>
        </div>
    );

}
