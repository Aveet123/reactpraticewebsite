import React from 'react';
import {NavLink} from 'react-router-dom';

const CompC = () => {
return (
    <>
<NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
<NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
<br/><br/>
</>
);
};

export default CompC;