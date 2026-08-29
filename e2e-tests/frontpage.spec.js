import { test, describe, expect } from "@playwright/test";

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("http://localhost:8080/");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo.",
      ),
    ).toBeVisible();
  });

  test("can navigate from pokemon page to home page", async ({ page }) => {
    await page.goto("http://localhost:8080/pokemon/venusaur");
    await expect(page.getByText("chlorophyll")).toBeVisible();
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page.getByText("ivysaur")).toBeVisible();
  });
});
