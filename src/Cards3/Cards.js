import React from 'react'
import '../Cards.css'
import Button from "../Components/Button";

export const Card3 = () => {
    return (
        <div className='WrapperCard'>
            <div className="CardBody3">
                <div className='CardContent'>
                    <h1>
                        Как правильно ухаживать <br/> за Бигелем
                    </h1>
                    <Button title='Читать'/>
                </div>
            </div>
        </div>
    )
}

export default Card3;
