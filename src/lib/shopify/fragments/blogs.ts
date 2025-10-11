export const articleFragment = /* GraphQL */ `
  fragment article on Article {
    id
    title
    handle
    publishedAt
    authorV2 {
      name
    }
    contentHtml
    excerpt
    image {
      id
      url
      altText
      width
      height
    }
    
  }
`;
export const blogFragment = /* GraphQL */ `
  fragment blog on Blog {
    id
    title
    handle
    articles() {
      edges {
        node {
          ...article
        }
      }
    }
  }
  ${articleFragment}
`;
