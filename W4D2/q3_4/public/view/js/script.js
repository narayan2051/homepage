$(() => {
  $(".item").on("submit", function () {
    let data = {
      name: $(this).children("#name").val(),
      price: $(this).children("#price").val(),
    };

    $.post({
      url: "/addToCart",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
    })
      .done(handleSuccess)
      .fail(handleFailure);
      return false;
  });

  const handleSuccess = (data) => {
      $("#message").text(data.message);
      $("#message").show();
      $("#goToCart").text("Go to cart("+ data.cartCount+")")
      setTimeout(clearMessage,2000);
  };
  const handleFailure = (error) => {
      $("#message").val("oops! Something went wrong")
  };
  const clearMessage=()=>{
      $("#message").hide();
  }
});
