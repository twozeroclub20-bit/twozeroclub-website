import productFragment from "../fragments/product";
import seoFragment from "../fragments/seo";

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
`;

export const getCollectionQuery = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $after: String
    $first: Int = 20
  ) {
    collection(handle: $handle) {
      products(
        sortKey: $sortKey
        reverse: $reverse
        first: $first
        after: $after
      ) {
        edges {
          cursor
          node {
            ...product
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${productFragment}
`;

export const getFullCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $first: Int = 4
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: $first) {
        edges {
          cursor
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductsByTag = /* GraphQL */ `
  query getProductsByTag(
    $tag: String!
    $after: String
    $first: Int = 20
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    products(
      first: $first
      after: $after
      query: $tag
      sortKey: $sortKey
      reverse: $reverse
    ) {
      edges {
        cursor
        node {
          ...product
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${productFragment}
`;
