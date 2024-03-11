$(".checkbox__all").change(function () {
    if (this.checked) {
      $(".checkbox__p:not(:checked)").prop("checked", true);
    } else {
      $(".checkbox__p:checked").prop("checked", false);
    }
  });
  
  $(".checkbox__p").change(function () {
    let ca = $(".checkbox__p:not(:checked)").length == 0;
    $(".checkbox__all").prop("checked", ca);
  });
  