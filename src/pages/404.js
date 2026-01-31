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

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Page Not Found
      </h1>
      <p style={paragraphStyles}>
        Sorry, we couldn't find what you were looking for.
      </p>
      <p>
        <a style={linkStyle} href="/">
          Go back to the homepage
        </a>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not Found | Gatsby on QuantCDN</title>
