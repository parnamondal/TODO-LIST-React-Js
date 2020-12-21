import React from 'react';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <header style={headerstyle}>
            <h1>TododList</h1>
            <Link style={linkstyle }to="/">Home</Link> | <Link to="/about"></Link>
        </header>
    )
}
const headerstyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
const linkstyle={
 color:'#fff',
 textDecoration:'none'
}


export default Header;