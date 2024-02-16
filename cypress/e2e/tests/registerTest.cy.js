import { registerPage } from "../../pages/registerPage.js"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()

describe('Automate Registration Page', () => {

    it('Validate registration flow', () => {

        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.phone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
        
      
    })
    
});