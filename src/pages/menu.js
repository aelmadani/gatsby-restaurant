import React from 'react'
import styled from 'styled-components'
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle="this menu" />
    </PageHeader>
  </Layout>
)

export default MenuPage
