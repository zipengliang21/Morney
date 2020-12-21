import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
  display: flex;
    > li{
    width: 33.3%;
    text-align: center;
    padding: 16px;
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="tags">Tag Page</Link>
                </li>
                <li>
                    <Link to="/money">Money</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics Report</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;