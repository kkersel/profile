import React from 'react'
import '../Cards.css'
import Button from "../Components/Button";

export const Card4 = () => {
    return (
        <div className='WrapperCard'>
            <div className="CardBody4">
                <div className='CardContent'>
                    <h1>
                        Уходовые средства <br/> для кошек
                    </h1>
                    <Button title='Читать'/>
                </div>
            </div>
        </div>
    )
}

export default Card4;
