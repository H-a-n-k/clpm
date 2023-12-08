describe('TestChatOnline', () => {
    it('should load the homepage and test chat online', () => {
        cy.visit('https://hasaki.vn/?gad_source=1&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8SfUiuO9Hv-gfKYgq2o8waoT-SYBIHaxZLbil9toddDOOrVOGcmqM4aAj08EALw_wcB');
        cy.get('._icon_iq4kl_47').click();
        cy.get('#username').type('0363861822');
    // Nhập dữ liệu vào ô input password
        cy.get('#password').type('BDCLPM123@');
    // Nhấn nút Đăng nhập
        cy.get('.btn.btn_site_1').eq(0).click();
        cy.visit('https://hasaki.vn/sales/order/history');
        // Kiểm tra đơn hàng mới đặt
        cy.contains('Mới đặt').click();
        cy.wait(4000);
        // Kiểm tất cả đơn hàng 
        cy.contains('Tất cả').click();
        cy.wait(4000);
        // Kiểm tra đang xử lý
        cy.contains('Đang xử lý').click();
        cy.wait(4000);
        // Kiểm tra thành công 
        cy.contains('Thành công').click();
        cy.wait(4000);
        // Kiểm tra đơn hàng đã huỷ 
        cy.get('a._order_filler_status.item_sub_filler_donhang[data-filter_status="canceled"]').click();
    });
});
