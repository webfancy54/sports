$(document).ready(function(){
  $(".menu-icon").click(function(){
      $(".menu").slideToggle(1000)
  });
    $(".menu ul li a").click(function(){
        $(".menu").slideToggle(1000)
    })
})