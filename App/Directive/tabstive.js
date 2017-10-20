/**
 * Created by 12345 on 2017/10/11.
 */
app.directive("tabs", function () {
 return {
     templateUrl:"App/View/temp/tab.html",
     link: function (scope,ele,attr,controller) {
         $("ul").on("click","li", function () {
             var ind=$(this).index();
             $(this).addClass("bg").siblings().removeClass("bg");
             $(ele).find("dl").eq(ind).show().siblings().hide()
         })
     }

 }
});
