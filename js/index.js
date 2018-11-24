$(()=>{
  lbtInit()

  //轮播图初始化
  function lbtInit() {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 2000,
      autoplayDisableOnInteraction : false,
      pagination : '.swiper-pagination',
      paginationClickable :true,
      loop : true
    })
  }
})