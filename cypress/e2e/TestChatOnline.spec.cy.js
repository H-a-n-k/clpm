describe('TestChatOnline', () => {
    it('should load the homepage and test chat online', () => {
        cy.visit('https://hasaki.vn/?gad_source=1&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8SfUiuO9Hv-gfKYgq2o8waoT-SYBIHaxZLbil9toddDOOrVOGcmqM4aAj08EALw_wcB');
        cy.get('._icon_iq4kl_47').click();
        cy.get('#username').type('0363861822');
    // Nhập dữ liệu vào ô input password
        cy.get('#password').type('BDCLPM123@');
    // Nhấn nút Đăng nhập
        cy.get('.btn.btn_site_1').eq(0).click();
        cy.get('._icon_iq4kl_47').click();
        cy.wait(2000);
        // cy.get('#base-textarea-id', { timeout: 5000 }).should('be.visible').type('Test chat online');
        cy.get('#base-textarea-id').should('be.visible', { timeout: 4000 }).type('Test chat online');
        
        cy.get('svg[width="17"][height="17"]').click();
        cy.get('._wrap_60mfe_1').should('contain.text', 'Test chat online');
});
});