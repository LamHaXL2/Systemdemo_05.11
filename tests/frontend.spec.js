const { test, expect } = require("@playwright/test");

test("Schichtmonitor zeigt Mockdaten, Teamwechsel und Aktualisierung", async ({ page }) => {
  await page.goto("/frontend/");

  await expect(page).toHaveTitle("Auslastung / Schichtmonitor | Werk Nord");
  await expect(
    page.getByRole("heading", { name: "Auslastung / Schichtmonitor" }),
  ).toBeVisible();

  const teamSelect = page.getByRole("combobox", { name: "Team auswählen" });
  await expect(teamSelect).toHaveValue("7A");
  await expect(page.locator("#workstation-count")).toHaveText("10");
  await expect(page.locator("#overload-count")).toHaveText("2");
  await expect(page.locator("#overload-total")).toHaveText("10");
  await expect(page.locator("#average-load")).toHaveText("93,0");
  await expect(page.locator("#preview-count")).toHaveText("2");

  const currentWindow = page.locator("#table-body tr.is-current");
  await expect(currentWindow).toContainText("09:15-10:15");
  await expect(currentWindow).toContainText("JETZT");
  await expect(currentWindow.locator("td").nth(1)).toHaveText("104,0 %");
  await expect(page.locator("#table-body tr")).toHaveCount(6);
  await expect(page.locator("#table-head")).toContainText("AP10");

  await teamSelect.selectOption("7B");
  await expect(page.locator("#live-team")).toHaveText("7B");
  await expect(page.locator("#workstation-count")).toHaveText("4");
  await expect(page.locator("#overload-count")).toHaveText("0");
  await expect(page.locator("#overload-total")).toHaveText("4");
  await expect(page.locator("#average-load")).toHaveText("89,0");
  await expect(page.locator("#table-head")).not.toContainText("AP5");
  await expect(page.locator("#table-body tr.is-current td").nth(1)).toHaveText("96,0 %");

  await page.getByRole("button", { name: "Daten jetzt aktualisieren" }).click();
  await expect(page.locator("#updated-at")).toHaveText(
    /^Aktualisiert \d{2}:\d{2}:\d{2}$/,
  );
  await expect(page.locator("#load-error")).toBeHidden();
});
