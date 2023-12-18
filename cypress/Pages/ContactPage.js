export class ContactPage {
    contactPage_username = '#user-name'
    contactPage_useremail = '#user-email'
    contactpage_submitbutton = '#submit-message'
    navigate (url) {
        cy.visit(url);
    }
    enterUsername (username) {
        cy.get(this.contactPage_username).type(username);
    }
    enterUserEmail (useremail){
        cy.get(this.contactPage_useremail).type(useremail);
    }
    clickSubmit (submitbutton) {
        cy.get(this.contactpage_submitbutton).click(submitbutton);
    }
}