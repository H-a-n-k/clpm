describe('TestChatOnline', () => {
    it('should load the homepage and test chat online', () => {
      cy.visit('https://hasaki.vn/?gad_source=1&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8SfUiuO9Hv-gfKYgq2o8waoT-SYBIHaxZLbil9toddDOOrVOGcmqM4aAj08EALw_wcB');
      // Click vào biểu tượng chat
      cy.get('._icon_iq4kl_47').click();
      // Nhập số điện thoại
      cy.get('#username').type('0363861822');
      // Nhập mật khẩu
      cy.get('#password').type('BDCLPM123@');
      // Click nút Đăng nhập
      cy.get('.btn.btn_site_1').eq(0).click();
      // Chờ để đảm bảo trang đã tải xong
      cy.wait(2000); // Chờ 2 giây (điều này có thể cần được điều chỉnh)
        cy.visit('https://hasaki.vn/san-pham/sua-tam-hatomugi-duong-sang-da-800ml-78190.html')
        cy.contains(' Viết Bình luận').click();
        cy.get('label[for="rating-input-1-4"]').click();
        cy.get('#rating_content').type('Test Product Review');
        cy.get('#btnSendRating').click();
    });
  });
