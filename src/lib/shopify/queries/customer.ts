export const customerFragment = /* GraphQL */ `
  fragment customerFields on Customer {
    id
    firstName
    lastName
    email
    phone
    acceptsMarketing
    createdAt
    updatedAt
    cartId: metafield(namespace: "custom", key: "cartId") {
      id
      key
      value
      type
      namespace
    }
  }
`;

export const getCustomerQuery = /* GraphQL */ `
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customerFields
    }
  }

  ${customerFragment}
`;
