import React from 'react'
import '../Cards.css'
import Button from "../Components/Button";

export const Card2 = () => {
    return (
        <div className='WrapperCard'>
            <div className="CardBody2">
                <div className='CardContent'>
                    <h1>
                        Визуальная <br/> диагностика ( онлайн )
                    </h1>
                    <Button title='Записаться'/>
                </div>
            </div>
        </div>
    )
}

export default Card2;
