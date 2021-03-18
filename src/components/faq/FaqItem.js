import React, { useState } from 'react';
import './../style.css';
import plus from './add-circle.svg';

function FaqItem(props) {
    const [display, setDisplay] = useState([])

    return (
        <div className='faqItem-Container' >
            <section>
                <div onClick={() => {
                    let arr = [];
                    if (display[props.id]) {
                        arr[props.id] = false;
                    } else {
                        arr[props.id] = true;
                    }
                    setDisplay(arr)
                }} >
                    <h2 className={props.id}>{props.qu}</h2>
                    <img src={plus} />
                </div>
                <p style={{ display: display[props.id] ? 'block' : 'none' }} >{props.ans}</p>
            </section>
        </div >
    );
}

export default FaqItem;