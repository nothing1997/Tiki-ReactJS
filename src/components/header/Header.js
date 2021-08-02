import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MenuTop from './Menu_top'
import Category from './Category';
import Search from './Search';
import Cart from './Cart';
import Account from '../Account';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            showHide: false
        }
    }

    Modal() { this.setState({ showHide: !this.state.showHide }) }

    render() {
        return (
            <div className="header" style={{ backgroundColor: 'rgb(1, 127, 255)' }}>
                <div className="container p-0">
                    <div className="row pr-2">
                        <nav className="navbar navbar-expand-sm navbar-dark col-12 pb-0 pt-1">
                            <Link to="/" >
                                <div className="navbar-brand pt-0 col-3 col-md-1">
                                    <img style={{ maxWidth: '58px' }} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo" />
                                </div>
                            </Link>

                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars"></i>
                            </button>

                            <div className="collapse navbar-collapse col-md-11 p-0" id="collapsibleNavId">
                                <ul className="navbar-nav align-items-center col-md-12">
                                    <Category />

                                    <Search />

                                    <Account />

                                    <Cart />
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <MenuTop />
                </div>
            </div>
        );
    }
}

export default Header;