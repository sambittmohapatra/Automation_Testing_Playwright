import { Page, Locator } from "@playwright/test"

export class CreateAccount {
    constructor(page) {
        this.page = page
        this.Title = page.locator("#id_gender1")
        this.password = page.getByLabel('Password *')
        this.Day = page.locator('#days')
        this.Month = page.locator('#months')
        this.year = page.locator('#years')
        this.SignupNewsLetter_Checkbox = page.locator("#newsletter")
        this.Specialoffer_checkbox = page.locator("#optin")
        //AddressInformation 
        this.FirstName = page.getByRole('textbox', { name: 'First name *' })
        this.LastName = page.getByRole('textbox', { name: 'Last name *' })
        this.Company = page.getByLabel('Company', { exact: true })
        this.Address = page.locator("#address1")
        this.Country = page.getByRole('combobox', { name: 'Country *' })
        this.State = page.getByRole('textbox', { name: 'State *' })
        this.City = page.getByRole('textbox', { name: 'City *' })
        this.Zipcode = page.locator('#zipcode')
        this.Mobile_number = page.getByRole('textbox', { name: 'Mobile Number *' })
        this.Create_Account = page.getByRole('button', { name: 'Create Account' })

    }

    async selectTitle() {
        await this.Title.check();
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async selectDOB(day, month, year) {
        await this.Day.selectOption(day);
        await this.Month.selectOption(month);
        await this.year.selectOption(year);
    }

    async subscribeNewsletter() {
        await this.SignupNewsLetter_Checkbox.check();
    }

    async subscribeSpecialOffer() {
        await this.Specialoffer_checkbox.check();
    }

    async fillAddressInfo(
        firstName,
        lastName,
        company,
        address,
        country,
        state,
        city,
        zipcode,
        mobile
    ) {
        await this.FirstName.fill(firstName);
        await this.LastName.fill(lastName);
        await this.Company.fill(company);
        await this.Address.fill(address);
        await this.Country.selectOption(country);
        await this.State.fill(state);
        await this.City.fill(city);
        await this.Zipcode.fill(zipcode);
        await this.Mobile_number.fill(mobile);
    }

    async clickCreateAccount() {
        await this.Create_Account.click();
    }


}