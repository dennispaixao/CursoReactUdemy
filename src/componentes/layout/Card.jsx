import { buildQueries } from '@testing-library/dom';
import React from 'react';
import './Card.css';

const Card = function Card(props) {
    const style={
        backgroundColor:props.bgcolor?props.bgcolor:"#f00"
    }
    const borda={
        border:`3px solid ${props.bgcolor?props.bgcolor:"#f00"}`
    }

    return (
        <div className="Card" style={borda}>
            <div className="CardTitulo" style={style}>
                {props.titulo}
            </div>

            <div className="CardConteudo">
                {props.children}

            </div>
        </div>
    )


}

export default Card;