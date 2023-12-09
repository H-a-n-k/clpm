import React from 'react';
<reference type="cypress" />
describe('TestLazada', () => {
    it('should load the homepage', () => {
        cy.visit('https://s.net.vn/iUlC');
        //Hiển thị phần tử bằng cách sửa đổi CSS
         //Hiển thị phần tử cha trước khi click
        cy.get('.text_1_header').invoke('show');
        cy.get('#btn-login').invoke('show').click();
         //Click phần tử mà không kiểm tra trạng thái hiển thị
        cy.get('[id="btn-login"]').click({ force: true });
        
        //TC_01.Kiểm tra hoạt động của hệ thống khi nhập số điện thoại và mật khẩu không hợp lệ
        // cy.get('#username').type('0356333556');
        // cy.get('#password').type('123456Mm');
        // cy.get('.btn.btn_site_1').eq(0).click();
   

        
        //TC_02.Đăng nhập   bằng số điện thoại và mật khẩu hợp lệ
        cy.get('#username').type('0363861822');
        cy.get('#password').type('BDCLPM123@');
        // Nhấn nút Đăng nhập
        cy.get('.btn.btn_site_1').eq(0).click();
        
        //TC_03.Kiểm tra hoạt động của hệ thống khi nhập email  và mật khẩu không hợp lệ
        // cy.get('#username').type('nguyentienphat3322@gmail.com');
        // cy.get('#password').type('tienphat');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_04.Kiểm tra hoạt động của hệ thống khi nhập email và mật khẩu hợp lệ
        // cy.get('#username').type('nguyenbaodamchatluongphanmem@gmail.com');
        // cy.get('#password').type('BDCLPM123@');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_05.Kiểm tra hoạt động của hệ thống khi nhập số điện thoại hợp lệ và mật khẩu không hợp lệ
        // cy.get('#username').type('0363861822');
        // cy.get('#password').type('tienphat');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_06.Kiểm tra hoạt động của hệ thống khi nhập số điện thoại không hợp lệ và mật khẩu hợp lệ
        // cy.get('#username').type('0366655777');
        // cy.get('#password').type('BDCLPM123@');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_07.Kiểm tra hoạt động của hệ thống khi nhập email hợp lệ và mật khẩu không hợp lệ
        // cy.get('#username').type('nguyenbaodamchatluongphanmem@gmail.com');
        // cy.get('#password').type('BDCLPM123@@');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_08.Kiểm tra hoạt động của hệ thống khi nhập email không hợp lệ và mật khẩu hợp lệ
        // cy.get('#username').type('nguyentienphat3322@gmail.com');
        // cy.get('#password').type('BDCLPM123@');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_09.Kiểm tra hoạt động của hệ thống khi để trống trường id tài khoản và mật khẩu nhấn đăng nhập
        // cy.get('#username').type('');
        // cy.get('#password').type('');
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_10.Kiểm tra hoạt động của hệ thống khi chọn "keep me signed"
        // cy.get('#username').type('0363861822');
        // cy.get('#password').type('BDCLPM123@');
        // cy.get('[class="checkbox-inline"]').click({ multiple: true });
        // cy.get('.btn.btn_site_1').eq(0).click();
        //TC_11_TC_12.Kiểm tra hoạt động của hệ thống khi đăng nhập bằng Facebook và google
        // cy.get('[class="loading"]').click({ multiple: true });
        //Kiểm tra hiển thị trang thanh toán khi xác nhận giỏ hàng.
        // cy.get('#search').type("Kem chống nắng");
        // cy.get('.icon_search.loading').click();
        // cy.visit('https://s.net.vn/oWSV');
        // cy.get('#product-addtocart-button').click();
        // cy.visit('https://hasaki.vn/checkout/cart');
        //Kiểm tra hoạt động của hệ thống khi người dùng chỉnh sửa địa chỉ giao hàng trong thanh toán (chọn một địa chỉ khác hoặc thêm một địa chỉ mới).
        // cy.visit('https://hasaki.vn/checkout/shipping');
        // cy.get('.txt_edit.txt_color_1').click();
        // cy.get('[name="fullName"]').clear();
        // cy.get('[name="fullName"]').type("Nguyễn Văn B");
        // cy.get('.btn.btn_site_3.update').click();
        //Kiểm tra hoạt động của hệ thống khi chọn phương thức thanh toán.
        // cy.visit('https://hasaki.vn/checkout');
        // cy.get('.item_diachi_nhanhang.width_common.relative.active').click();
        //Kiểm tra hoạt động của hệ thống khi áp mã giảm giá.
        // cy.get('[name="tmpVoucherCode"]').type('CCDE17966');
        // cy.get('.btn_sudung').click();
        //Kiểm tra tính năng quản lý tài khoản của cá nhân
       // cy.visit('https://hasaki.vn/customer/account');
       //Kiểm tra hoạt động của hệ thống khi sửa đổi sổ địa chỉ (sửa địa chỉ hoặc thêm mới địa chỉ)
    //    cy.visit('https://hasaki.vn/customer/address/edit/id/5368020');
    //    cy.get('[name="fullName"]').clear();
    //     cy.get('[name="fullName"]').type("Nguyễn Văn C");
    //Kiểm tra hoạt động của hệ thống  khi chọn xem đánh giá của sản phẩm đó (Kiểm tra hiển thị)
   // cy.visit('https://hasaki.vn/san-pham/kem-chong-nang-skin1004-chiet-xuat-rau-ma-spf50-pa-50ml-86167.html');
   //Kiểm tra hoạt động của hệ thống khi lọc các đánh giá theo số sao.
  
      
     // cy.get('.v3_thumb_common_sp').click({multiple:true});
      // cy.get('.popup-login btn btn_site_2').click();
    //   cy.contains('Sữa Tắm Hatomugi Dưỡng Ẩm, Sáng Da Chiết Xuất Ý Dĩ 800ml').should('be.visible').click();
        cy.visit('https://hasaki.vn/san-pham/sua-tam-hatomugi-duong-sang-da-800ml-78190.html')
        cy.contains(' Viết Bình luận').click();
        cy.get('label[for="rating-input-1-4"]').click();
        cy.get('#rating_content').type('Test Product Review');
        cy.get('#btnSendRating').click();
   //Kiểm tra hoạt động của hệ thống khi thả like vào đánh giá của  khách hàng khác
   

  
      



      
        
        

        
          
        
        

       
          


        cy.wait(5000);

        


        


        

        




        


        
        

        
       
    


        
        
        
    })
})