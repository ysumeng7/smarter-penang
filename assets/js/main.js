$(document).ready(function(){

  function animate(pgnum) {
      var parent_element = $("#pt-main");
      var curr = parent_element.find(".pt-page-current");
      var next = $(".pt-page-"+ pgnum );
      
      if (curr.is(':last-child')) {
          alert("last");
      } else {
          curr.removeClass("pt-page-current pt-page-moveFromRight");
          $(next).addClass("pt-page-current pt-page-moveFromRight");
      }
  }

  $(".pg1btn").on("click", function () {
      animate(1);

      $('.pg1btn img').attr('src', 'assets/images/nav-maps-selected.png');

      $('.pg2btn img').attr('src', 'assets/images/nav-quest.png');
      $('.pg4btn img').attr('src', 'assets/images/nav-inventory.png');
  });

  $(".pg2btn").on("click", function () {
      animate(2);

      $('.pg2btn img').attr('src', 'assets/images/nav-quest-selected.png');

      $('.pg1btn img').attr('src', 'assets/images/nav-maps.png');
      $('.pg4btn img').attr('src', 'assets/images/nav-inventory.png');
  });

  $(".pg3btn").on("click", function () {
      animate(3);
      
      $('.pg2btn img').attr('src', 'assets/images/nav-quest-selected.png');
      $('.pg1btn img').attr('src', 'assets/images/nav-maps.png');
      $('.pg4btn img').attr('src', 'assets/images/nav-inventory.png');
  });

  $(".pg4btn").on("click", function () {
      animate(4);

      $('.pg4btn img').attr('src', 'assets/images/nav-inventory-selected.png');

      $('.pg2btn img').attr('src', 'assets/images/nav-quest.png');
      $('.pg1btn img').attr('src', 'assets/images/nav-maps.png');
  });


});