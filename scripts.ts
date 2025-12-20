import MenuData from "./src/assets/static/menu.static.json";

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

  // 1️etect category (always last)
  for (const key of Object.keys(categories)) {
    if (slug === key || slug.endsWith(`-${key}`)) {
      categoryKey = key;
      break;
    }
  }

  // Fallback if no category matched
  if (!categoryKey) {
    return slug.split("-").map(toTitle);
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

type TestCase = {
  slug: string;
  expected: string[];
};

const tests: TestCase[] = [
  {
    slug: "wall-decor",
    expected: ["Wall Decor", "All"],
  },
  {
    slug: "ivory-wall-decor",
    expected: ["Wall Decor", "Ivory"],
  },
  {
    slug: "trending-wall-decor",
    expected: ["Wall Decor", "Trending"],
  },
  {
    slug: "art-prints-wall-decor",
    expected: ["Wall Decor", "Art Prints", "All"],
  },
  {
    slug: "art-prints-new-wall-decor",
    expected: ["Wall Decor", "Art Prints", "New"],
  },
  {
    slug: "art-prints-trending-wall-decor",
    expected: ["Wall Decor", "Art Prints", "Trending"],
  },
];

function arraysEqual(a: string[], b: string[]) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

console.log("🔍 Running parseSlug tests...\n");

tests.forEach(({ slug, expected }) => {
  const result = parseSlug(slug);
  const pass = arraysEqual(result, expected);

  if (pass) {
    console.log("✅ PASS:", slug, "→", result);
  } else {
    console.error("❌ FAIL:", slug);
    console.error("   Expected:", expected);
    console.error("   Received:", result);
  }
});

console.log("\n✅ Test run complete.");
