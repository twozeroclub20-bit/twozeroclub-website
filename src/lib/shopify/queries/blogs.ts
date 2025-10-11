import { blogFragment, articleFragment } from "../fragments/blogs";

export const getLatestBlogsQuery = /* GraphQL */ `
  query getLatestBlogs {
    blogs(first: 3, sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          ...blog
        }
      }
    }
  }
  ${blogFragment}
`;

export const getBlogsQuery = /* GraphQL */ `
  query getBlogs($first: Int) {
    blogs(first: $first) {
      edges {
        cursor
        node {
          id
          title
          handle
          articles(first: 250) {
            edges {
              node {
                id
                title
                handle
                publishedAt
                authorV2 {
                  name
                }
                excerpt
                contentHtml
                image {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getArticleByIdQuery = /* GraphQL */ `
  query getArticleById($id: ID!) {
    article(id: $id) {
      ...article
    }
  }
  ${articleFragment}
`;
