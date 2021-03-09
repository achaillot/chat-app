import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='Contact'>
            <img class="avatar" src="https://randomuser.me/api/portraits/women/16.jpg"></img>
            <div>
                <h3 class="name">Debbie Cook</h3>
                <div class="status status-online">
                    <div class="status-online"></div>
                    <p class="status-text">online</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;