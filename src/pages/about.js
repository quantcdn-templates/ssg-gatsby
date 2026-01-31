import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const paragraphStyles = {
  marginBottom: 48,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        About This Site
      </h1>
      <p style={paragraphStyles}>
        This is a Gatsby static site deployed on QuantCDN. Gatsby is a
        React-based framework that makes it easy to build fast, secure,
        and powerful websites.
      </p>
      <p style={paragraphStyles}>
        Features include:
      </p>
      <ul>
        <li>React-based component architecture</li>
        <li>GraphQL data layer</li>
        <li>Automatic image optimization</li>
        <li>Rich plugin ecosystem</li>
        <li>Fast static site generation</li>
      </ul>
      <p>
        <a style={linkStyle} href="/">
          Back to Home
        </a>
      </p>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About | Gatsby on QuantCDN</title>
