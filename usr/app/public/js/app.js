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
    $("div#info").html("<img src='/deployments/images/spinner.gif'/> <strong>Activating deployment "+$(this).attr("id")+" deployment</strong>. The page will reload automatically when the activation is finished.").show();
    $.post("/deployments/"+$(this).attr('id')+"/diff", function(data) {
      $(this).closest("div.code pre").html(data);
      $(this).closest("div.code").slideDown("fast");
    });
  })
});
