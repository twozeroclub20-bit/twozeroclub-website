export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = Omit<ShopifyCart, "lines"> & {
  lines: CartItem[];
};

export type CartProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: Image;
};

export type CartItem = {
  id: string | undefined;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: CartProduct;
  };
};

export type Collection = ShopifyCollection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = Omit<ShopifyProduct, "variants" | "images"> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopifyCustomer = {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  acceptsMarketing: boolean;
  createdAt: string;
  updatedAt: string;
  metafields?: Connection<{
    id: string;
    key: string;
    value: string;
    type: string;
    namespace: string;
  }>;
};
export type ShopifyCustomerAccessToken = {
  accessToken: string;
  expiresAt: string;
};

export type ShopifyCustomerUserError = {
  code?: string;
  field?: string[];
  message: string;
};

export type ShopifyNewsletterUpdateOperation = {
  data: {
    customerUpdate: {
      customer: ShopifyCustomer;
      customerUserErrors: ShopifyCustomerUserError[];
    };
  };
  variables: {
    customerAccessToken: string;
    acceptsMarketing: boolean;
  };
};

export type ShopifySignupCustomerOperation = {
  data: {
    customerCreate: {
      customer: ShopifyCustomer;
      customerUserErrors: ShopifyCustomerUserError[];
    };
  };
  variables: {
    input: {
      firstName?: string;
      lastName?: string;
      email: string;
      password: string;
      acceptsMarketing?: boolean;
    };
  };
};

export type ShopifyLoginCustomerOperation = {
  data: {
    customerAccessTokenCreate: {
      customerAccessToken: ShopifyCustomerAccessToken;
      customerUserErrors: ShopifyCustomerUserError[];
    };
  };
  variables: {
    input: {
      email: string;
      password: string;
    };
  };
};

export type ShopifyGetCustomerOperation = {
  data: {
    customer: ShopifyCustomer;
  };
  variables: {
    customerAccessToken: string;
  };
};

export type ShopifyRecoverCustomerOperation = {
  data: {
    customerRecover: {
      customerUserErrors: ShopifyCustomerUserError[];
    };
  };
  variables: {
    email: string;
  };
};

export type ShopifyResetCustomerOperation = {
  data: {
    customerReset: {
      customer: ShopifyCustomer | null;
      customerAccessToken: ShopifyCustomerAccessToken | null;
      customerUserErrors: ShopifyCustomerUserError[];
    };
  };
  variables: {
    id: string;
    input: {
      password: string;
      resetToken: string;
    };
  };
};

export type ShopifyCart = {
  id: string | undefined;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopifyCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
  collection: string;
};

export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopifyCreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopifyUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyCollectionOperation = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct> & {
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string | null;
        };
        edges: {
          cursor: string;
          node: ShopifyProduct;
        }[];
      };
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
    first?: number;
    after?: string;
  };
};

export type ShopifyFullCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct> & {
        edges: {
          cursor: string;
          node: ShopifyProduct;
        }[];
      };
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyProductsByTagOperation = {
  data: {
    products: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
      edges: {
        cursor: string;
        node: ShopifyProduct;
      }[];
    };
  };
  variables: {
    tag: string;
    first?: number;
    after?: string | null;
    sortKey?: string;
    reverse?: boolean;
  };
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type ShopifyPageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type ShopifyPagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

// blogs and articles

export type ShopifyArticleImage = {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type ShopifyArticle = {
  id: string;
  title: string;
  handle: string;
  publishedAt: string;
  authorV2: {
    name: string;
  };
  blogHandle: string;
  contentHtml: string;
  excerpt: string;
  url: string;
  image?: ShopifyArticleImage | null;
};

export type ShopifyBlog = {
  id: string;
  title: string;
  handle: string;
  url: string;
  articles: {
    edges: {
      node: ShopifyArticle;
    }[];
  };
};

export type ShopifyGetArticleByHandleOperation = {
  data: {
    blogByHandle: {
      articleByHandle: ShopifyArticle | null;
    } | null;
  };
  variables: {
    blogHandle: string;
    articleHandle: string;
  };
};

export type ShopifyBlogWithArticles = {
  id: string;
  title: string;
  handle: string;
  url: string;
  articles: {
    edges: {
      node: ShopifyArticle;
    }[];
  };
};

export type ShopifyGetBlogsWithArticlesOperation = {
  data: {
    blogs: {
      edges: {
        cursor: string;
        node: ShopifyBlogWithArticles;
      }[];
    };
  };
  variables: {
    first?: number;
  };
};
