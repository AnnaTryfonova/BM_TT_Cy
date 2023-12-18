import {ContactPage} from "../pages/ContactPage";
const contactPage = new ContactPage()

describe("Check the Contact Form Functionality", ()  => {
    it ('Valid Submission', () => {
        contactPage.navigate('http://verestem.com');
        contactPage.enterUsername('Anna');
        contactPage.enterUserEmail('abcd@gmail.com');
        contactPage.clickSubmit();
        cy.contains('Thank you for subscribing').should('be.visible');
    })
    // //Submit with Blank Fields
    it ('Blank Fields', () => {
        contactPage.navigate('http://verestem.com');
        contactPage.clickSubmit();
        cy.contains('Please enter username!').should('be.visible');
    })
    //Missing Name Field
    it ('Missing Name Field', () => {
        contactPage.navigate('http://verestem.com');
        contactPage.enterUserEmail('abcd@gmail.com');
        contactPage.clickSubmit();
        cy.contains('Please enter username!').should('be.visible');
    });
    //Missing E-mail Field
    it ('Missing E-mail Field', () => {
        contactPage.navigate('http://verestem.com');
        contactPage.enterUsername('Anna');
        contactPage.clickSubmit();
        cy.contains('Please enter email!').should('be.visible');
    })
    // //Invalid E-mail Format
    it ('Invalid E-mail Format', () => {
        contactPage.navigate('http://verestem.com');
        contactPage.enterUsername('Anna');
        contactPage.enterUserEmail('abcd.gmail.com');
        contactPage.clickSubmit();
        cy.contains('Please enter valid email address').should('be.visible');
    })
    //Invalid Name Format
    it ('Invalid Name Format', () => {
        contactPage.navigate('http://verestem.com');
        contactPage.enterUsername('anna1');
        contactPage.enterUserEmail('abcd@gmail.com');
        contactPage.clickSubmit();
        cy.contains('Allowed capital and small letters').should('be.visible');
    })

})