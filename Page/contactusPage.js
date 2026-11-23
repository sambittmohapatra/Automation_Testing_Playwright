import { page } from "@playwright/test"

export class Countactus {
    constructor(page) {
        this.page = page
        this.Name = page.getByPlaceholder('Name', { exact: true })
        this.Email = page.locator("input[placeholder='Email']")
        this.Subject = page.locator("//input[@placeholder='Subject']")
        this.TextBox = page.locator('textarea[name="message"]')
        this.FileUpload = page.locator("input[name='upload_file']")
        this.Submit = page.locator('input[type="submit"]')

    }

    async GetinTouch(name, email, subject, text) {
        await this.Name.fill(name)
        await this.Email.fill(email)
        await this.Subject.fill(subject)
        await this.TextBox.fill(text)
    }
    async fileupload() {
        await this.FileUpload.
            setInputFiles("C:/Users/HP/OneDrive/Desktop/Automation Framework/reporting-labs/report.pdf")
    }

    
    async handleDialog() {

    this.page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await this.Submit.click();
}
    

    

}