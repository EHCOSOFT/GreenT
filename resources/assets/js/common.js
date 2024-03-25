$(document).ready(function () {
  /**
   * 공통상단 메뉴 이벤트
   */
  $(".i-menu").click(function () {
    $(".header-menu").toggle();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".header-menu, .i-menu").length) {
      if ($(".header-menu").is(":visible")) {
        $(".header-menu").hide();
      }
    }
  });

  /**
   * Tab 이벤트
   * 부모 Tab, 자식 Tab 
   */
  $(".tab-list-item").click(function () {
    var target = $(this).data("target");
    $("#" + target)
      .addClass("active-tab-content")
      .siblings(".tab-content")
      .removeClass("active-tab-content");
    $(this)
      .addClass("active-tab-list-item")
      .siblings()
      .removeClass("active-tab-list-item");

    $(this).closest(".tab").find(".sub-tab").show();
  });

  $(".sub-tab-list-item").click(function () {
    var target = $(this).data("target");
    $("#" + target)
      .addClass("active-tab-content")
      .siblings(".tab-content")
      .removeClass("active-tab-content");
    $(this)
      .addClass("active-tab-list-item")
      .siblings()
      .removeClass("active-tab-list-item");
  });
});
