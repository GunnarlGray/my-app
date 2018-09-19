import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Gunnar Gray</h1>
        <p>Digital Product Designer</p>
        <p>I design and prototype mobile apps, websites, and digital experiences. Currently, I work at Livefront where I’ve had the privilege to design large-scale products for clients such as Target, United Healthcare, Delta Dental, General Mills, Medtronic, Geico & many more.</p>
        <Link to="/page-2/">Get In Touch</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
