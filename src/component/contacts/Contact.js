// Use 'rcc' snippet to generate template
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    // NOTE axios is a third party tool for handle HttpResponse
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  };

  render() {
    const { showContactInfo } = this.state;
    const { name, email, phone, id } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h4 className='card-title'>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  style={{ cursor: 'pointer' }}
                  className='fas fa-caret-down'
                />
                <i
                  className='fas fa-trash'
                  style={{ cursor: 'pointer', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>{email}</li>
                  <li className='list-group-item'>{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
