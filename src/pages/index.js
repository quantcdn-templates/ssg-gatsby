import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
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

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Welcome to Gatsby on QuantCDN
      </h1>
      <p style={paragraphStyles}>
        This is a Gatsby site deployed on QuantCDN. Edit{" "}
        <code>src/pages/index.js</code> to customize this page.
      </p>
      <p>
        <a style={linkStyle} href="/about/">
          Learn more about this site
        </a>
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home | Gatsby on QuantCDN</title>
