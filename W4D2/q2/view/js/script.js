$(() => {
  $("#magic8").on("submit", () => {
    $.get({
      url: "/8ball",
      data: "",
      contentType: "application/json; charset=utf-8",
    })
      .done(handleSuccess)
      .fail(handleFail);
    return false;
  });

  const handleSuccess = (data) => {
    $("#question").val(data);
    $(this).select();
  };
  const handleFail = (err) => {
    console.log("error occurred" + err);
  };
  $("#question").focus(function () {
    $(this).select();
  });
});
