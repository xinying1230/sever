/**
 * Created by 12345 on 2017/10/11.
 */
app.controller("tabsController", ['$scope','tacarouselservice',function ($scope,tacarouselservice) {
    var config={
        type:"get",
        url:"http://localhost:9090/?tabs"

    };
    tacarouselservice.gets(config.type,config.url).then(function(result){
        $scope.tabs=result;
    });
    $scope.bgC = "bgC";
}]);
