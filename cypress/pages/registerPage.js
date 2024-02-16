export class registerPage{

    weblocators={

        firstName : '#input-firstname',
        lastName : '#input-lastname',
        email : "//*[@id='input-email']",
        telephone : '#input-telephone',
        password : '#input-password',
        confirmPassword : '#input-confirm',
        policyCheckbox : "//*[@name='agree']",
        continue : "//*[@value='Continue']"

    }

    openUrl(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email){
        cy.xpath(this.weblocators.email).type(email)
    }

    enterTelephone(phone){
        cy.get(this.weblocators.telephone).type(phone)
    }

    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmPassword).type(password)
    }

    selectCheckbox(){
        cy.xpath(this.weblocators.policyCheckbox).check()
    }

    clickOnContinue(){
        cy.xpath(this.weblocators.continue).click()
    }
}