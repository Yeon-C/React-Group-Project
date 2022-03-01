import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
  color: blue !important;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: '/',
          items: [
            {
              path: '/', 
              name: 'Home',
              css: 'fa fa-fw fa-twitter',
              key: 1 /* key is used to make sure that the NavItem is unique */
            },
            {
              path: '/about',
              name: 'About',
              css: 'fa fa-fw fa-home',
              key: 2
            },
            {
              path: '/NoMatch',
              name: 'Hashtag',
              css: 'fa fa-hashtag',
              key: 3
            },
            {
                path: '/NoMatch',
                name: 'Bell',
                css: 'fa fa-bell-o',
                key: 4
              },
              {
                path: '/NoMatch',
                name: 'Envelope',
                css: 'fa fa-envelope-o',
                key: 5
              },
              {
                path: '/NoMatch',
                name: 'Bookmark',
                css: 'fa fa-bookmark-o',
                key: 6
              },
              {
                path: '/NoMatch',
                name: 'List',
                css: 'fa fa-list-alt',
                key: 7
              },
              {
                path: '/NoMatch',
                name: 'User',
                css: 'fa fa-user',
                key: 8
              },
              {
                path: '/NoMatch',
                name: 'Ellipsis',
                css: 'fa fa-ellipsis-h',
                key: 9
              },
          ]
        }  
      }

      onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
      }

    render() {
  const { items, activePath } = this.state;
  return (
    <StyledSideNav>
      {
        /* items = just array AND map() loops thru that array AND item is param of that loop */
        items.map((item) => {
          return (
            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick}  active={item.path === activePath} key={item.key}/>
          )
        })
      }
    </StyledSideNav>
  );
}

}
export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav>
                <StyledSideNav></StyledSideNav>
            </SideNav>
        );
    }
}

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }

    render() {
        const { active } = this.props;

        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
`;

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "rgb(49, 164, 241)" : "#blue"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining*/
    }  
  }
`;
