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

    // Verify user can sign up successfully with valid name and unique email

    test("newuser signup step-1 @sanity", async () => {
        const uniqueEmail =
            `sambit${Date.now()}@gmail.com`;

        await newsignup.signup("sambitt kumar MOhapatra",
            uniqueEmail)
        console.log(await newsignup.page.url());
        await expect(newsignup.page).toHaveURL("https://automationexercise.com/signup")
    });

    //Verify validation message when name and email fields are blank
    test("invalid Signup with blank inputs @sanity", async () => {

        await newsignup.signup("", "")

        const validationMessage = await newsignup.Email_id.evaluate(
            el => el.validationMessage
        );

        
        console.log(validationMessage);
        expect(validationMessage).toBe("Please fill out this field.");

    });

    //Verify validation message when name field is blank

    test("invalid Signup with name inputs Blank @sanity", async () => {
        const uniqueEmail =
            `sambit${Date.now()}@gmail.com`;

        await newsignup.signup("", uniqueEmail)

        const validationMessage = await newsignup.Email_id.evaluate(
            el => el.validationMessage
        );
       
        console.log(validationMessage);
        expect(validationMessage).toBe("");

    });

    //Verify validation message when email field is blank

    test("invalid Signup with Email inputs Blank @sanity", async () => {
        const uniqueEmail =
            `sambit${Date.now()}@gmail.com`;

        await newsignup.signup("", uniqueEmail)

        const validationMessage = await newsignup.Email_id.evaluate(
            el => el.validationMessage
        
        );
        
        console.log(validationMessage);
        expect(validationMessage).toBe("");
    });

    //Verify validation message when invalid email format is entered

    test("invalid Signup with Invalid Email format  Blank @sanity", async () => {

        await newsignup.signup("Sambit", "Samb123")

        const validationMessage = await newsignup.Email_id.evaluate(
            el => el.validationMessage
        );
       
        console.log(validationMessage);
        expect(validationMessage).toBe("Please include an '@' in the email address. 'Samb123' is missing an '@'.");
    });

    //Verify error message when user attempts to sign up with an existing email address

    test("invalid Signup with existing record @sanity", async () => {

        await newsignup.signup("sambitt kumar MOhapatra", "sambit@gmail.com")
        await expect(newsignup.page.getByText('Email Address already exist!', { exact: true })).toBeVisible();

    });






})












