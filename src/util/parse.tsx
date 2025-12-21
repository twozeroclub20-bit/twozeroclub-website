import MenuData from "@/assets/static/menu.static.json";

const toTitle = (str: string) =>
  str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export function parseSlug(slugStr: string): string[] {
  if (!slugStr) return [];

  const slug = decodeURIComponent(slugStr);
  const result: string[] = [];

  const categories = MenuData.categories;
  let categoryKey: string | undefined;

  // 1️⃣ Detect category (always last)
  for (const key of Object.keys(categories)) {
    if (slug === key || slug.endsWith(`-${key}`)) {
      categoryKey = key;
      break;
    }
  }

  // Fallback if no category matched
  if (!categoryKey) {
    return [slug.split("-").map(toTitle).join(" ")];
  }

  result.push(toTitle(categoryKey));

  // Remove category from slug
  let remaining = slug.replace(new RegExp(`-?${categoryKey}$`), "");

  console.log(remaining);

  // 2️⃣ Detect filter / style / color FIRST (important fix)
  const filterMatch =
    MenuData.featured.find((f) => f.ticker === remaining) ||
    // @ts-ignore
    MenuData.shop?.[categoryKey]?.find((s) => s.ticker === remaining) ||
    MenuData.classic.find((s) => s.ticker === remaining) ||
    MenuData.trending.find((s) => s.ticker === remaining);

  if (filterMatch) {
    result.push(filterMatch.label);
    return result;
  }

  // 3️⃣ Detect product type
  // @ts-ignore
  const productTypes: string[] = categories[categoryKey];
  let productType: string | undefined;

  for (const type of productTypes) {
    if (remaining === type || remaining.startsWith(`${type}-`)) {
      productType = type;
      result.push(toTitle(type));
      remaining = remaining.replace(type, "").replace(/^-/, "");
      break;
    }
  }

  // 4️⃣ Detect filter after product type (for safety)
  if (remaining) {
    const deepFilterMatch =
      MenuData.featured.find((f) => f.ticker === remaining) ||
      // @ts-ignore
      MenuData.shop?.[categoryKey]?.find((s) => s.ticker === remaining);

    if (deepFilterMatch) {
      result.push(deepFilterMatch.label);
      return result;
    }
  }

  // 5️⃣ Default fallback
  result.push("All");
  return result;
}

// ---------- Helpers (unchanged) ----------

export const toSlug = (str: string) =>
  str && str.replace(" & ", " ").split(" ").join("-").toLowerCase();

export const parseNameToSlug = (str: string) =>
  str.replace(" & ", " ").split(" ").join("-").toLowerCase();

export const prettifyTagName = (name: string) => {
  const map: Record<string, string> = {
    "plants-floral": "Plants & Floral",
    "food-drinks": "Food & Drinks",
    "black-white": "Black & White",
    "mid-century-bauhaus": "Mid Century & Bauhaus",
  };
  return map[toSlug(name)] || name;
};
