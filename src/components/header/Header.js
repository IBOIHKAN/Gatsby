import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery,graphql } from "gatsby"
import {HeaderWrapper} from './headerStyles/headerStyles'
import Menu from './Menu'

const Header = ({ siteTitle }) => {
  const{
    wpcontent: {menuItems},
  } = useStaticQuery(graphql` 
  query {
    wpcontent {
      menuItems {
        edges {
          node {
            path
            label
          }
        }
      }
    }
  }`
  )
  
  return (<HeaderWrapper>
    <Menu menuItems={menuItems.edges}/>
  </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
