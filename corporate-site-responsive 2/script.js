// バーガーをクリックしたらメニューにis-activeがなければを付与する、あれば外す。
$(function(){

    // ハンバーガーmenu
$('.burger').click(function(){
    $(".burger").toggleClass("is-active");
    $(".menu").toggleClass("is-active");
});
// ロゴクリックでTOPに戻る

$('#top-btn').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },500);
  })  
});
