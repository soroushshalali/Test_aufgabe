import React, { useState, useEffect } from 'react';
import './../style.css';
import { Link } from 'react-router-dom';
import hairGray from './img/hair-root-gray.svg';
import hairActive from './img/hair-root-active.svg';
import FaqGray from './img/faq-gray.svg';
import FaqActive from './img/faq-active.svg';
import cartWhite from './img/cart-white.svg';

function Footer() {
    const [btnsStatus, setBtnsStatus] = useState([true, false, false])
    const timing = () => {
        setTimeout(() => {
            setBtnsStatus([true, false, false])
        }, 4000);
    }

    return (
        <div className='Footer-Container' style={{ display: btnsStatus[2] ? 'none' : null }}  >
            <div>
                <Link to='/' onClick={() => { setBtnsStatus([true, false, false]) }} >
                    <img src={btnsStatus[0] ? hairActive : hairGray} />
                    <p style={{ color: btnsStatus[0] ? '#424242' : '#c8c8c8' }} >Magniesche<br />farbeffekt</p>
                </Link>
            </div>
            <div>
                <Link to='/faq' onClick={() => { setBtnsStatus([false, true, false]) }} >
                    <img src={btnsStatus[1] ? FaqActive : FaqGray} />
                    <p style={{ color: btnsStatus[1] ? '#424242' : '#c8c8c8' }} >Häufig gestellte Fragen</p>
                </Link>
            </div>
            <div>
                <Link to='/redirect' onClick={() => { setBtnsStatus([false, false, true]); timing() }} >
                    <img src={cartWhite} />
                </Link>
            </div>
        </div >
    );
}

export default Footer;