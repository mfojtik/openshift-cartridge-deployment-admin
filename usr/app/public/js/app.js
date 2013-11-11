$(function() {
  $("time").cuteTime();
  $("a.activate-deployment").click(function(event) {
    event.preventDefault();
    $("div#info").html("<img src='/deployments/images/spinner.gif'/> <strong>Activating deployment "+$(this).attr("id")+" deployment</strong>. The page will reload automatically when the activation is finished.").show();
    $.post("/deployments/"+$(this).attr('id')+"/activate", function(data) {
      $("div#info").hide();
      location.reload();
    });
  })
  $("a.show-diff").click(function(event) {
    event.preventDefault();
    $.get("/deployments/"+$(this).attr('id')+"/diff", function(data) {
      var code_div = $(this).closest("div.panel-body").children("div.code");
      $(code_div).children("pre").html(data);
      code_div.slideDown("fast");
    });
  })
});
