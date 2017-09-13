$(document).ready(function() {
  $("#formContact").submit(function() {
    alert("working!");
    var contactNameInput = $("input#contactName").val();
    var contactAddressInput = $("input#contactAddress").val();

    $(".contactName").text(contactNameInput);
    $(".contactAddress").text(contactAddressInput);

    $("ul").prepend("<li>" + "<span class='clickable'>" + contactNameInput + "</span><span class='hiddenAddress'> " + contactAddressInput + "</span></li>");

    $(".clickable").click(function(){
      $(".hiddenAddress").toggle();
    });

    event.preventDefault();
  });
});
