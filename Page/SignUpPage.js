import {Page,Locator} from "@playwright/test"

export class NewUserSignUp{

  constructor(page) {
        this.page = page
        this.Name = page.getByPlaceholder('Name')
        this.Email_id = page.locator('[data-qa="signup-email"]');
        this.SignUpButton = page.locator('button:has-text("Signup")')
}

async signup(name,emailid){

    await this.Name.fill(name)
    await this.Email_id.fill(emailid)
    await this.SignUpButton.click()
}

}