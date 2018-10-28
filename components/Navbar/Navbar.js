import React, { Component } from 'react';
import Link from 'next/link';
import './Navbar.scss';

class Navbar extends Component {


    render() {
        return (
            <nav>
                <div>
                    <Link href="/about">
                        <a title="About next js">About Us</a>
                    </Link>
                    <Link href="/contact">
                        <a title="our contact">Contact</a>
                    </Link>
                    <mark className="bagde">Hello</mark>
                </div>
            </nav>
        )
    }
}


export default Navbar;