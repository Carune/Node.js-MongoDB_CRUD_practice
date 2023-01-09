$("#add_user").submit(function (event) {
  alert("데이터가 성공적으로 입력되었습니다.");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray(); //this = #update_user
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`, // id를 해당 url로 전달
    method: "put",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("데이터가 업데이트 되었습니다.");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id"); // 현재 사용자 id 얻기

    var request = {
      url: `http://localhost:3000/api/users/${id}`, // id를 해당 url로 전달
      method: "DELETE",
    };

    if (confirm("정말로 삭제하시겠습니까?")) {
      $.ajax(request).done(function (response) {
        alert("데이터가 삭제되었습니다.");
        location.reload();
      });
    }
  });
}
