$(document).ready(function(){

  function animate(pgnum) {
      var parent_element = $("#pt-main");
      var curr = parent_element.find(".pt-page-current");
      var next = $(".pt-page-"+ pgnum );
      
      // if (curr.is(':last-child')) {
      //     // alert("last");
      // } else {
          curr.removeClass("pt-page-current pt-page-moveFromRight");
          $(next).addClass("pt-page-current pt-page-moveFromRight");
      // }
  }

  $(".pg1btn").on("click", function () {
      $(".brand-logo").html("HOME");
      animate(1);
  });

  $(".pg2btn").on("click", function () {
      $(".brand-logo").html("QUEST");
      animate(2);
  });

  $(".pg3btn").on("click", function () {
      animate(3);
  });

  $(".pg4btn").on("click", function () {
      $(".brand-logo").html("INVENTORY");
      animate(4);
  });

  $(".pg5btn").on("click", function () {
      animate(5);
  });

  $(".pg6btn").on("click", function () {
      animate(6);
  });

});