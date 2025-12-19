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

  if (!categoryKey) {
    return slug.split("-").map(toTitle);
  }

  result.push(toTitle(categoryKey));

  // Remove category
  let remaining = slug.replace(new RegExp(`-?${categoryKey}$`), "");

  // 2️⃣ Detect product type
  // @ts-ignore
  const productTypes = categories[categoryKey];
  let productType: string | undefined;

  for (const type of productTypes) {
    if (remaining === type || remaining.startsWith(`${type}-`)) {
      productType = type;
      result.push(toTitle(type));
      remaining = remaining.replace(type, "").replace(/^-/, "");
      break;
    }
  }

  // 3️⃣ Detect style / featured filter
  if (remaining) {
    const match =
      MenuData.featured.find((f) => f.ticker === remaining) ||
      // @ts-ignore
      MenuData.shop[categoryKey]?.find((s) => s.ticker === remaining);

    if (match) {
      result.push(match.label);
      return result;
    }
  }

  // 4️⃣ Add All when no deeper filter
  result.push("All");
  return result;
}

export const toSlug = (str: string) =>
  str.replace(" & ", " ").split(" ").join("-").toLowerCase();

export const prettifyTagName = (name: string) => {
  const map: Record<string, string> = {
    "plants-floral": "Plants & Floral",
    "food-drinks": "Food & Drinks",
  };
  return map[toSlug(name)] || name;
};

export const parseNameToSlug = (str: string) =>
  str.replace(" & ", " ").split(" ").join("-").toLowerCase();
