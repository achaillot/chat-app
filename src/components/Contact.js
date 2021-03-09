import React from 'react';
import './Contact.css';
import PropTypes, { bool } from 'prop-types';


function Contact(props) {
    return (
        <div className='Contact'>
            <img class="avatar" src={props.avatar} alt=""></img>
            <div>
                <h3 class="name">{props.name}</h3>
                <div class="status status-online">
                    <div class={props.online ? "status-online" : "status-offline"}></div>
                    <p class="status-text">{props.online}</p>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: bool,
  };


export default Contact;