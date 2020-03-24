const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions}) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `products`})
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })

  }
}

exports.createPages = async ({ actions, graphql, reporter })=> {
  const { createPage } = actions
  const productsTemplate = path.resolve("src/templates/product.js")

  const result = await graphql(`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___price, order: ASC}, filter: {frontmatter: {active: {eq: true}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  // console.log(result)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const products = result.data.allMarkdownRemark.edges

  products.forEach(product => {
    createPage({
      path: product.node.fields.slug,
      component: productsTemplate,
      context: {
        slug: product.node.fields.slug
      }
    })
  });
}