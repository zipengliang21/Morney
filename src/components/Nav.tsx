import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
  display: flex;
    > li{
    width: 33.3%;
    text-align: center;
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name="tag"/>
                        Tag Page
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name="dollar"/>
                        Money
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name="chart"/>
                        Statistics Report
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;