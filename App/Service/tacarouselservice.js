/*
 Created by 12345 on 2017/10/11. */
app.factory('tacarouselservice',['baserServer',function(baserServer){
    var factory = {
        gets: function (type, url) {
            return baserServer.ajax(type, url);

        }
    };
    return factory;
}]);
