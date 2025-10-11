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
  }
`;

export const customerAccessTokenFragment = /* GraphQL */ `
  fragment customerAccessTokenFields on CustomerAccessToken {
    accessToken
    expiresAt
  }
`;

export const signupCustomerMutation = /* GraphQL */ `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        ...customerFields
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  ${customerFragment}
`;

export const loginCustomerMutation = /* GraphQL */ `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        ...customerAccessTokenFields
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  ${customerAccessTokenFragment}
`;

export const updateCustomerCartMetafieldMutation = /* GraphQL */ `
  mutation updateCustomerCartMetafield($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        id
        namespace
        key
        value
        type
      }
      userErrors {
        field
        message
        code
      }
    }
  }
`;

export const customerAccessTokenRenewMutation = /* GraphQL */ `
  mutation customerAccessTokenRenew($customerAccessToken: String!) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerRecoverMutation = /* GraphQL */ `
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerResetMutation = /* GraphQL */ `
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customer {
        ...customerFields
      }
      customerAccessToken {
        ...customerAccessTokenFields
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  ${customerFragment}
  ${customerAccessTokenFragment}
`;
