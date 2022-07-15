import React from 'react'
import '../Cards.css'
import Button from "../Components/Button";

export const Card = () => {
    return (
        <div className='WrapperCard'>
            <div className="CardBody">
                <div className='CardContent'>
                    <h1>
                        Правильное питание <br/>
                        вашего питомца
                    </h1>
                    <Button title='Читать'/>
                </div>
            </div>
        </div>
    )
}

export default Card;
