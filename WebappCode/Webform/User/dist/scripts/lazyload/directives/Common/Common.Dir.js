! function () {
    "use strict";
    angular.module("app.directives", []).directive("collapseNavAccordion", ["$rootScope", function ($rs) {
        return {
            restrict: "A",
            link: function (scope, el) {
                var lists = el.find("ul").parent("li"),
                    a = lists.children("a"),
                    aul = lists.find("ul a"),
                    listsRest = el.children("li").not(lists),
                    aRest = listsRest.children("a"),
                    stopClick = 0;
                a.on("click", function (e) {
                    if (!scope.navHorizontal) {
                        if (e.timeStamp - stopClick > 300) {
                            var self = $(this),
                                parent = self.parent("li");
                            lists.not(parent).removeClass("open"), parent.toggleClass("open"), stopClick = e.timeStamp
                        }
                        e.preventDefault()
                    }
                    e.stopPropagation(), e.stopImmediatePropagation()
                }), aul.on("touchend", function (e) {
                    scope.isMobile && ($rs.navOffCanvas = $rs.navOffCanvas ? !1 : !0), e.stopPropagation(), e.stopImmediatePropagation()
                }), aRest.on("touchend", function (e) {
                    scope.isMobile && ($rs.navOffCanvas = $rs.navOffCanvas ? !1 : !0), e.stopPropagation(), e.stopImmediatePropagation()
                }), aRest.on("click", function (e) {
                    if (!scope.navHorizontal) {
                        var parent = aRest.parent("li");
                        lists.not(parent).removeClass("open")
                    }
                    e.stopPropagation(), e.stopImmediatePropagation()
                })
            }
        }
    }]).directive("highlightActive", ["$location", function ($location) {
        return {
            restrict: "A",
            link: function (scope, el) {
                var links = el.find("a"),
                    path = function () {
                        return $location.path()
                    },
                    highlightActive = function (links, path) {
                        var path = "#" + path;
                        angular.forEach(links, function (link) {
                            var link = angular.element(link),
                                li = link.parent("li"),
                                href = link.attr("href");
                            li.hasClass("active") && li.removeClass("active"), 0 == path.indexOf(href) && li.addClass("active")
                        })
                    };
                highlightActive(links, $location.path()), scope.$watch(path, function (newVal, oldVal) {
                    newVal != oldVal && highlightActive(links, $location.path())
                })
            }
        }
    }]).directive("customScrollbar", ["$interval", function ($interval) {
        return {
            restrict: "A",
            link: function (scope, el) {
                el.perfectScrollbar({
                    suppressScrollX: !0
                }), $interval(function () {
                    el[0].scrollHeight >= el[0].clientHeight && el.perfectScrollbar("update")
                }, 400)
            }
        }
    }]).directive("customPage", ["$location", function ($location) {
        return {
            restrict: "A",
            link: function (scope) {
                var path = function () {
                    return $location.path()
                },
                    addBg = function (path) {
                        switch (scope.bodyFull = !1, path) {
                            case "/404":
                            case "/pages/404":
                            case "/pages/signin":
                            case "/pages/signup":
                            case "/pages/forget-pass":
                            case "/pages/lock-screen":
                                scope.bodyFull = !0
                        }
                    };
                addBg(path()), scope.$watch(path, function (newVal, oldVal) {
                    angular.equals(newVal, oldVal) || addBg(path())
                })
            }
        }
    }]).directive('checkImage', function ($http) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                attrs.$observe('ngSrc', function (ngSrc) {
                    $http.get(ngSrc).success(function () {
                        if (ngSrc != '') {

                        }
                        else {
                            element.attr('src', 'http://damrak-hotels.com/wp-content/uploads/2015/02/avatar.png');
                        }
                    }).error(function () {
                        element.attr('src', 'http://damrak-hotels.com/wp-content/uploads/2015/02/avatar.png'); // set default image
                    });
                });
            }
        };
    })
}();