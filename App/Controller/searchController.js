/**
 * Created by 12345 on 2017/10/19.
 */
app.controller("searchController", ['$scope','searchsever',function ($scope,searchsever) {
 var config={
     type:"get",
     url:"http://localhost:9090/?car"

 };
    searchsever.gets(config.type,config.url).then(function(result){
     $scope.shuju=result;
    })

}]);