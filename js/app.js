var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

let todoList = $(".todo-list").children("li");
let leftItem = 1;

$(".toggle").on("click", function (e) {
    $(e.target).closest("li").toggleClass("completed");
    $(e.target).is(":checked") ? leftItem += 1 : leftItem -= 1;
    if (leftItem < todoList.length) {
        $(".toggle-all").prop("checked",false);
    } else {
        $(".toggle-all").prop("checked", true);
    }
});

$(".toggle-all").on("click", function (e) {
    if ($(e.target).is(":checked")) {
        todoList.addClass("completed");
        $(".toggle").prop("checked",true);
    }
    else {
        todoList.removeClass("completed")
        $(".toggle").prop("checked", false);
    }
})

// TODO 더블클릭시 입력창, 다른 곳 클릭시 입력창 꺼짐
todoList.dblclick(function (e) {
    $(e.target).closest("li").addClass("editing");
    console.log(this != e.currentTarget);
    console.log(this);
    console.log(e.currentTarget);
    
    if (this != e.currentTarget) {
        $(e.target).closest("li").removeClass("editing");
    }
})