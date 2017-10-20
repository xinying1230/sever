/**
 * Created by 12345 on 2017/10/19.
 */
app.directive('seach', function ($timeout) {
    return {
        templateUrl: 'App/View/temp/searchs.html',
        link: function (scope, ele, attr, controller) {
            $timeout(function () {
                var swiper = new Swiper('#swiper',
                    {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        autoplay: 1500,
                        loop: true
                    });
            }, 1500);
            $timeout(function () {
                var swiper = new Swiper('#hswiper',
                    {
                        paginationClickable: true,
                        autoplay: 1500,
                        loop: true,
                        slidesPerView: 2.5
                    });
            }, 1500);
            /*new iScroll("wrapper",{
                scrollbars:true,
                fadeScrollbars:true,
                onScrollMove: function () {
                    if(this.y<0){
                        $('#pullUp').addClass('loading');
                    }

                },
                onScrollEnd: function () {
                    if(this.y<this.maxScrollY + 1 && $('#pullUp').hasClass('loading')){

                    }
                }

            });*/
        }
    }
});