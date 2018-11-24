$(()=>{
  lbtInit()

  //轮播图初始化
  function lbtInit() {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 1000,
      watchSlidesProgress : true,
      watchSlidesVisibility : true,
      loop : true
    })
  }
})