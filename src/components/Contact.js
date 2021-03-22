import React from 'react';
import './Contact.css';
import PropTypes, { bool } from 'prop-types';


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: this.props.online
        };
    }
    render() {
        return (
            <div className='Contact'>
                <img className="avatar" src={this.props.avatar} alt=""></img>
                <div onClick={event => {
                    console.log('coucou');
                    const newOnline = !this.state.online;
                    this.setState({online: newOnline});
                }}>
                    <h3 className="name">{this.props.name}</h3>
                    <div className="status status-online">
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{this.state.online?'Online':'Offline'}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: bool,
  };


export default Contact;