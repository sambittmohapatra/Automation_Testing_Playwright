import {Page,Locator} from "@playwright/test"

export class LoginPage{

      constructor(page)
      {
        this.page = page
        this.EmailAddress = page.locator("input[data-qa='login-email']")
        this.Passsword = page.getByPlaceholder('Password')
        this.LoginButton  = page.getByRole('button', { name: 'Login' })
      }


      async Login(email,password)
      {
        await this.EmailAddress.fill(email)
        await this.Passsword.fill(password)
        await this.LoginButton.click()
      }

}