$(document).ready(function() {
  $("#formContact").submit(function() {
    var contactNameInput = $("input#contactName").val();
    var contactAddressInput = $("input#contactAddress").val();
    var contactPhoneInput = $("input#contactPhone").val();
    var contactEmailInput = $("input#contactEmail").val();
    var contactDobInput = $("input#contactDob").val();

    $(".contactName").text(contactNameInput);
    $(".contactAddress").text(contactAddressInput);
    $(".contactPhone").text(contactPhoneInput);
    $(".contactEmail").text(contactEmailInput);
    $(".contactDob").text(contactDobInput);

    // $("ul").prepend("<li>" + "<span class='clickable'>" + contactNameInput + "</span><span class='hiddenAddress'> " + contactAddressInput + "</span></li>");

    $("ul#contact").prepend("<div class='contactRow'><li>" + contactNameInput + "<ul class='hiddenAddress'><li>" + contactAddressInput + "</li><li>" + contactPhoneInput + "</li><li>" + contactEmailInput + "</li><li>" + contactDobInput + "</li></ul></span></li></div>");

    // $("ul#contact").prepend("<div class='contactRow'><li>" + contactNameInput + "<span class='hiddenAddress'><ul><li>" + contactAddressInput + "</li><li>" + contactPhoneInput + "</li><li>" + contactEmailInput + "</li></ul></span></li></div>");

    $(".contactRow").first().click(function(){
      $(this).find(".hiddenAddress").toggle();
    });

    // $(".clickable").click(function(){
    //   $(".hiddenAddress").toggle();
    // });

    event.preventDefault();
  });
});
