import React, { useState } from 'react';
import './../style.css';
import pro2 from './img/product-2.jpg';
import pro3 from './img/product-3.jpg';
import arrowR from './img/arrow-right.svg';
import arrowL from './img/arrow-left.svg';

function HomeItem(props) {
    const [imagePro, setimagePro] = useState((props.rev) ? pro3 : pro2)

    return (
        <div className='home-item-Container' style={{ flexDirection: (props.rev) ? 'row-reverse' : 'row' }} >
            <section>
                <h2>{props.object.title}</h2>
                <ul>
                    <li><img src={arrowR} /><span>{props.object.txt1}</span></li>
                    <li><img src={arrowR} /><span>{props.object.txt2}</span></li>
                    <li><img src={arrowR} /><span>{props.object.txt3}</span></li>
                </ul>
            </section>
            <img src={imagePro} alt="Play Video" />
        </div>
    );
}

export default HomeItem;