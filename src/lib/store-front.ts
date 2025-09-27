"use server";
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "@/lib/constants";
import { ensureStartsWith } from "@/lib/shopify/util";
import { isShopifyError } from "@/lib/type-guards";

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
  : "";
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function shopifyFetch<T>({
  headers,
  query,
  variables,
}: {
  headers?: HeadersInit;
  query: string;
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T }> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
    });

    const contentType = result.headers.get("content-type");

    let body: any;
    if (contentType && contentType.includes("application/json")) {
      body = await result.json();
    } else {
      const text = await result.text();
      console.error("Non-JSON response from Shopify:", text);
      throw {
        cause: "non-json-response",
        status: result.status,
        message: "Shopify returned non-JSON response",
        query,
        body: text,
      };
    }

    if (body.errors) {
      throw body.errors[0];
    }

    return { status: result.status, body };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query,
      };
    }

    throw {
      error: e,
      query,
    };
  }
}
