import { test, expect } from "@playwright/test"
import { Countactus } from "../Page/contactusPage"
import dotenv from "dotenv"
dotenv.config()


test("Validate contactup @sanity", async ({ page }) => {

    const URL = process.env.BASEURL;
    await page.goto(`${URL}/contact_us`);

    let contacus = new Countactus(page)
    await contacus.GetinTouch("Sambiitt", "samb@gmail.com", "Thanks You",
        "If you have any suggestion areas or improvements, do let us know. We will definitely work on it."
    )
    await contacus.fileupload();

    await contacus.handleDialog();

    //Valiadte the success element
    await expect(page.locator('div.status.alert.alert-success'))
    .toHaveText("Success! Your details have been submitted successfully.")
    await expect(page.locator('span:has-text("Home")')).toBeVisible()

})