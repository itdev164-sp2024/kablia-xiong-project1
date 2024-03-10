import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact
    return (
        <Layout>
        <Seo title="Our Company" />
        <h1>Our Company</h1>
        <p>{`${company} was founded by ${name} in 2024.`}</p>
        <p>{`At ${company}, we post blogs of our daily productive lives to inspire!`}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <StaticImage
                src="../images/gatsby-icon.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="KBX Gatsby Blog"
                style={{ marginBottom: `1.45rem` }}
            />
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
      }
    }
  }
}
`