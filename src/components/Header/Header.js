import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../Search/Search';

class Header extends React.Component {

  static propTypes = {
    logo: PropTypes.node,
  }

  static defaultProps = {
    logo: settings.defaultLogo,
  }

  render() {
    const {logo} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={logo} />
            </Link>
            <Search></Search>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
