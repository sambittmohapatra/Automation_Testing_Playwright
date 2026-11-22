import { test, expect, } from "@playwright/test"
import { LoginPage } from "../Page/LoginPage"
import dotenv from "dotenv"
dotenv.config()

let loginpage;

test.describe("Login Functionality Test @sanity", () => {

    test.beforeEach(async ({ page }) => {
        const URL = process.env.BASEURL;
        await page.goto(`${URL}/login`); // uses baseURL automatically
        loginpage = new LoginPage(page);
    });

    test("Login with Valid Credentials", async () => {

        await loginpage.Login(process.env.EMAIL_ADDRESS, process.env.PASSWORD)
        await expect(loginpage.page).toHaveURL("https://automationexercise.com/login")

    })

    //Verify validation message when name and email fields are blank
    test("invalid Signup with blank inputs @sanity", async () => {

        await loginpage.Login("", "")

        const validationMessage = await loginpage.EmailAddress.evaluate(
            el => el.validationMessage
        );
        console.log(validationMessage);
        expect(validationMessage).toBe("Please fill out this field.");
    });

    test("invalid Login with Email Address Blank @sanity", async () => {

        await loginpage.Login("", process.env.PASSWORD)

        const validationMessage = await loginpage.EmailAddress.evaluate(
            el => el.validationMessage
        );
        console.log(validationMessage);
        expect(validationMessage).toBe("Please fill out this field.");
    });

    test("invalid Login with Incorrect Password  @sanity", async () => {

        await loginpage.Login(process.env.EMAIL_ADDRESS, "hdkf")

        await expect(loginpage.page.getByText('Your email or password is incorrect!', { exact: true }))
            .toBeVisible()
    });

    test("invalid Signup with Invalid Email format @sanity", async () => {
    
            await loginpage.Login("Sambit", "Test@123")
    
            const validationMessage = await loginpage.EmailAddress.evaluate(
                el => el.validationMessage
            );
            console.log(validationMessage);
            expect(validationMessage).
            toBe("Please include an '@' in the email address. 'Sambit' is missing an '@'.");
        });









})