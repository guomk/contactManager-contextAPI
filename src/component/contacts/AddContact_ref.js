import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: 'Guo Mukun',
    email: 'gmk@gmail.com',
    phone: '93548076'
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor='name' />
              <input
                type='text'
                name='name'
                className='form-control form-control-lg'
                placeholder='Enter Name...'
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email' />
              <input
                type='email'
                name='email'
                className='form-control form-control-lg'
                placeholder='Enter Email...'
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone' />
              <input
                type='text'
                name='phone'
                className='form-control form-control-lg'
                placeholder='Enter Phone...'
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type='submit'
              name='submit'
              value='Add Contact'
              className='btn btn-block btn-light'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
