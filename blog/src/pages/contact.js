import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = ({ data }) => {
    const { name, company, address, state } = data.site.siteMetadata.contact
    return (
        <Layout>
        <Seo title="Contact Info" />
        <h1>Contact Info</h1>
        <p>You can direct your inquiries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div>{address}</div>
        <div>Located in the great state of {state}!</div>
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

export default Contact

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                    address
                    state
      }
    }
  }
}
`