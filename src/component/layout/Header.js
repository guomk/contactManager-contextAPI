import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0 '>
      <a className='navbar-brand mb-0 h1' href='/'>
        {branding}
      </a>

      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='home'>
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
