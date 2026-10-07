import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const books = []

const BooksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Books</h1>
      {books.length === 0 ? (
        <p>No books here yet. Check back soon.</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.title}>
              <strong>{book.title}</strong>
              {book.author && ` by ${book.author}`}
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="Books" />

export default BooksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
