import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';
import UserProfile from './auth/UserProfile'; // Import the UserProfile component

class AppNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="nav-fragment">
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>
              {user ? `${user.name.split(' ').slice(0, -1).join(' ')}` : null}
            </strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
        {isAuthenticated && ( // Conditionally display the "Profile" button when authenticated
          <NavItem>
            <UserProfile />
          </NavItem>
        )}
      </div>
    );

    const guestLinks = (
      <div className="nav-fragment">
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </div>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5 navbar-main">
          <Container>
            <NavbarBrand href="/">FarmSense360</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavLink href="/about" className="nav-link first-nav">
                About
              </NavLink>
              <NavLink href="http://127.0.0.1:9090/" className="nav-link">
                CropPredict
              </NavLink>
              <NavLink href="http://127.0.0.1:8080/" className="nav-link">
                PricePredict
              </NavLink>
              <NavLink href="/schemes" className="nav-link">
                Schemes
              </NavLink>
              <NavLink href="/modern" className="nav-link">
                ModernFarming
              </NavLink>
              <NavLink href="/sideIncome" className="nav-link">
                SideIncome
              </NavLink>
              <NavLink href="/news" className="nav-link">
                News
              </NavLink>
              {/* <NavLink href="/weatheralert" className="nav-link">
                weatheralert
              </NavLink> */}
              <NavLink href="/pricing" className="nav-link">
                Pricing
              </NavLink>
              <NavLink href="/community" className="nav-link">
                Community
              </NavLink>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
