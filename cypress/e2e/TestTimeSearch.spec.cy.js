describe('TestChatOnline', () => {
    it('Test Time Search', () => {
        cy.visit('https://hasaki.vn/?gad_source=1&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8SfUiuO9Hv-gfKYgq2o8waoT-SYBIHaxZLbil9toddDOOrVOGcmqM4aAj08EALw_wcB');
        cy.clock();
        const startTime = new Date();
        cy.get('#search').type('Dầu gội');
        cy.wait(4000);
        cy.get('#search').type('{enter}');
        const endTime = new Date();
        const elapsedTime = endTime - startTime; // Tính thời gian đã trôi qua
        expect(elapsedTime).to.be.lessThan(5000); // Giả sử 5000 milliseconds là thời gian chấp nhận được
    });
});
