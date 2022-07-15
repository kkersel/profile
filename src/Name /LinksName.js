import React from 'react'
import './Name.css'

export const Name = () => {
    return (
        <div className="Block">
            <div className="Block_Wrapper">
                <div className="Left">
                    <h1 className="ttt">
                        Product <br/> Designer
                    </h1>
                </div>
                <div className="Right">
                    <p>Contacts:</p>
                    <h1>
                        <a href="https://vk.com/innv1">VK</a>
                    </h1>
                    <h1>
                        <a href="https://t.me/innv1">TELEGRAM</a>
                    </h1>
                    <h1>
                        <a href="https://www.behance.net/9a0ade27/projects">BEHANCE</a>
                    </h1>
                    <h1>
                        <a href="https://www.behance.net/9a0ade27/projects">YOUTUBE</a>
                    </h1>

                </div>
            </div>

            <div className="Illustration">
                <img src="../images/PC.png" alt=""/>
            </div>
        </div>
    )
}

export default Name;
