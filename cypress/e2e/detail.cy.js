const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe('detail-page', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  const page = 'https://hasaki.vn/san-pham/nuoc-tay-trang-duong-am-l-oreal-3-in-1-danh-cho-da-thuong-da-kho-95ml-5294.html'

  it('access', () => {
    //chọn sp đầu tiên trong mục gợi ý, vào trang chi tiết 
    cy.visit('https://hasaki.vn/');
    cy.scrollTo('bottom')

    cy.get('.item_goiy .vn_names').first().then(x => cy.wrap(x[0].innerText).as('name'))
    cy.get('.item_goiy').first().click()

    //so sách tên sp trong trang ct vs sp đã chọn
    cy.get('.product .product__title').first().then(x => { 
      var name = x[0].innerText
      cy.get('@name').should('be.eq', name)
    })
  });

  
  it('quantity', () => {
    cy.visit(page)

    //đổi số lượng sản phẩm bằng cách nhập vào nhiều trường hợp

    cy.get('input#qty').first().should('have.value', '1')

    cy.fixture('detail-test-1').then(tests => { 

      tests.forEach(x => {
        cy.get('input#qty').first().clear().type(x[0]).should('have.value', x[1] + '')
      })

    })
  });

  it('choose type', () => {
    cy.visit(page)

    //tìm một option chưa được chọn và chọn nó
    //nếu trang không có mục chọn hoặc chỉ có 1 option thì thôi

    cy.get('body').then(body => {
      const query = 'a.item_chose_type:not(.active)'
      if (body.find(query).length) {

        //gán option = text của option chưa chọn (cái đầu tiên)
        var option
        cy.get(query).first().then(x => { 
          option = x.text()

          //chọn option đó
          cy.get(query).first().click();

          //so option đã lưu với text của option đang được chọn
          cy.get('a.item_chose_type.active').first().then(x => { 
            expect(x.text()).to.be.eq(option)
          })
        });
        
      }
    })
    
  })

  //giống giống ở trên, nhưng mà khác
  it('choose type 2', () => { 
    cy.visit(page)

    cy.get('body').then(body => {
      const query = '.item_chose_type_color:not(.active)'

      if (body.find(query).length) {
        var option
        cy.get(query).first().then(x => {
          option = x.attr('title')

          cy.get(query).first().click();

          //so title của option cũ vs option mới
          cy.get('a.item_chose_type_color.active').first().then(x => {
            expect(x.attr('title')).to.be.eq(option)
          })

          //so title vs text hiển thị 
          cy.get('#txt_soluong_capacity .selection').last().then(x => {
            expect(x.text()).to.be.eq(option)
          })
        });
      }
    })
  })
  

});