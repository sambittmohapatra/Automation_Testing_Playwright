import { test, expect } from "@playwright/test"
import { NewUserSignUp } from "../Page/SignUpPage"
import { CreateAccount } from "../Page/createAccount"
import dotenv from "dotenv"
dotenv.config();
let newsignup;
let createaccount;

test("create Account @regression" , async ({ page }) => {

    // new usersignup 
    const URL = process.env.BASEURL;
    await page.goto(`${URL}/login`); // uses baseURL automatically
    newsignup = new NewUserSignUp(page);

    //create uniqe email always 
    const uniqueEmail =
        `sambit${Date.now()}@gmail.com`;
    // use Date.now () to create with time stamp 

    await newsignup.signup("sambitt kumar MOhapatra", uniqueEmail)

    console.log(await newsignup.page.url());
    await expect(newsignup.page).
        toHaveURL("https://automationexercise.com/signup")
    // user Navigate to use 
    createaccount = new CreateAccount(page);

    await createaccount.selectTitle();

    await createaccount.enterPassword("Test@123");

    await createaccount.selectDOB(
        "10",
        "5",
        "1998"
    );

    await createaccount.subscribeNewsletter();

    await createaccount.subscribeSpecialOffer();

    await createaccount.fillAddressInfo(
        "Sambit",
        "Mohapatra",
        "ABC Pvt Ltd",
        "Bhubaneswar",
        "India",
        "Odisha",
        "Bhubaneswar",
        "751001",
        "9876543210"
    );

    await createaccount.clickCreateAccount();

    await expect(createaccount.page).toHaveURL("https://automationexercise.com/account_created")

    await expect(page.locator('[data-qa="account-created"]')).toHaveText("Account Created!")
});
