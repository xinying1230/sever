/**
 * Created by 12345 on 2017/10/19.
 */
app.factory('searchsever', ['baserServer', function (baserServer) {
    var factory = {
        gets: function (type, url) {
            return baserServer.ajax(type, url);

        }
    };
    return factory;
}])