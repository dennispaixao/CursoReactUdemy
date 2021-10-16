import React from 'react';
import Primeiro from './Primeiro';
import Fragmento from './Fragmento';
import Card from './layout/Card';
import Familia from './Familia';
import FamiliaMembro from './FamiliaMembro';

export default props => {
    return (
        <div className="CardContainer">
            <Card titulo="Children">
                 <Familia sobrenome="Silva">
                     <FamiliaMembro nome="joao" />
                     <FamiliaMembro nome="Sabrina" />
                </Familia>    
            </Card>

            <Card titulo="Primeiro" bgcolor="aqua"> <Primeiro /> </Card>
            <Card titulo="Fragmento" bgcolor="yellow"> <Fragmento /></Card>
            <Card titulo="Primeiro" > <Primeiro /> </Card>
        </div>
    );

}
