import React from 'react'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="contact" subtitle="how to contact us" />
    </PageHeader>
  </Layout>
)

export default ContactPage
