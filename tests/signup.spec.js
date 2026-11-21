import { test, expect } from "@playwright/test"
import { NewUserSignUp } from "../Page/SignUpPage"
import dotenv from "dotenv"
dotenv.config();
let newsignup;

test.describe("New UserSignUp", () => {

    test.beforeEach(async ({ page }) => {
        const URL = process.env.BASEURL;
        await page.goto(`${URL}/login`); // uses baseURL automatically
        newsignup = new NewUserSignUp(page);

    });

    test("newuser signup step-1", async () => {

        await newsignup.signup("sambitt kumar MOhapatra",
            "sambit1991@gmail.com")
        console.log(await newsignup.page.url());
        await expect(newsignup.page).toHaveURL("https://automationexercise.com/signup")

    



     })









});


