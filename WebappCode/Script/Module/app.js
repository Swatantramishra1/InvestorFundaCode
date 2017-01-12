/// <reference path="../../../WebForm/HtmlPages/SIP/SIP_Goal.html" />
/// <reference path="../../WebForm/HtmlPages/HomePage.html" />
/// <reference path="../../Webform/Common/Home.html" />

//google.setOnLoadCallback(function () {
//    angular.bootstrap(document.body, ['app']);
//});

var app = angular.module('app', ['ngMaterial', 'ui.router', 'ngStorage', 'rzModule', 'ng-fusioncharts']);
//, 'ui.router']
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Index");
    //
    // Now set up the states
    $stateProvider
      .state('Index', {
          url: "/Index",
          templateUrl: "../../Webform/Common/Home.html",
          controller: "MainCtrl"
      })
        .state('CAL', {
            url: "/CAL",
            templateUrl: "../../Webform/Common/Calculator.html",
            controller: "Calculator_Ctrl"
        })
        .state('Authentication', {
            url: "/Authentication/:From",
            templateUrl: "../../Webform/Common/LoginRegister.html",
            controller: "AuthCtrl"
        })
      .state('SIP', {
          url: "/SIP",
          templateUrl: "../../Webform/Common/SIP/SIP.html",
          controller: "SIP.Ctrl"
      }).state('StartSIP', {
          url: "/StartSIP",
          templateUrl: "../../Webform/Common/SIP/StartSip.html",
          controller: "SIP.Ctrl"
      })
        .state('EasySIP', {
            url: "/EasySIP",
            templateUrl: "../../Webform/Common/SIP/EasySip.html",
            controller: "SIP.Ctrl"
        })
    .state('ChildGoal', {
        url: "/ChildGoal",
        templateUrl: "../../Webform/Common/SIP/SIP_ChildGoal.html",
        controller: "SIP.Ctrl"
    }).state('Retirement', {
        url: "/Retirement",
        templateUrl: "../../Webform/Common/SIP/SIP_RetirementGoal.html",
        controller: "Retirement_SIP.Ctrl"
    }).state('HousePlan', {
        url: "/HousePlan",
        templateUrl: "../../Webform/Common/SIP/SIP_BuyHouse.html",
        controller: "BuyHouse.Ctrl"
    }).state('CarPlan', {
        url: "/CarPlan",
        templateUrl: "../../Webform/Common/SIP/SIP_BuyCar.html",
        controller: "BuyCar.Ctrl"
    }).state('ChildMerrage', {
        url: "/ChildMerrage",
        templateUrl: "../../Webform/Common/SIP/SIP_ChildMerrage.html",
        controller: "BuyChild.Ctrl"
    }).state('BankList', {
        url: "/BankList",
        templateUrl: "../../WebForm/HtmlPages/Bank/bankList.html",
        controller: "MainCtrl"
    }).state('MutualFunds', {
        url: "/MutualFunds",
        templateUrl: "../../Webform/Common/MutualFundsDetails.html",
        controller: "MtualFunds.Ctrl"
    })
    .state('MutualFundsList', {
        url: "/MutualFundsList",
        templateUrl: "../../Webform/Common/MutualFunds.html",
        controller: "MtualFunds.Ctrl"
    }).state('AdminUpload', {
        url: "/AdminUpload",
        templateUrl: "../../WebForm/HtmlPages/Admin/ExportExcel.html",
        controller: "MainCtrl"
    }).state('contact', {
        url: "/contact",
        templateUrl: "../../Webform/Common/contact.html",
        controller: "MainCtrl"
    });

    //.state('state1.list', {
    //    url: "/list",
    //    templateUrl: "partials/state1.list.html",
    //    controller: function ($scope) {
    //        $scope.items = ["A", "List", "Of", "Items"];
    //    }
    //})
    //.state('state2', {
    //    url: "/state2",
    //    templateUrl: "partials/state2.html"
    //})
    //.state('state2.list', {
    //    url: "/list",
    //    templateUrl: "partials/state2.list.html",
    //    controller: function ($scope) {
    //        $scope.things = ["A", "Set", "Of", "Things"];
    //    }
    //});
});
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

app.config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#e60073',
        '100': '#cc0066',
        '200': '#b30059',
        '300': '#99004d',
        '400': '#800040',
        '500': '#660033',
        '600': '#4d0026',
        '700': '#33001a',
        '800': '#1a000d',
        '900': '#000000',
        'A100': '#ff0080',
        'A200': '#ff1a8c',
        'A400': '#ff3399',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#000a08',
        '100': '#00231d',
        '200': '#003d31',
        '300': '#005646',
        '400': '#00705a',
        '500': '#00896f',
        '600': '#00bc97',
        '700': '#00d6ac',
        '800': '#00efc0',
        '900': '#0affcf',
        'A100': '#00bc97',
        'A200': '#00a383',
        'A400': '#00896f',
        'A700': '#23ffd4'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#737373',
        '100': '#666666',
        '200': '#595959',
        '300': '#4d4d4d',
        '400': '#404040',
        '500': '#333',
        '600': '#262626',
        '700': '#1a1a1a',
        '800': '#0d0d0d',
        '900': '#000000',
        'A100': '#808080',
        'A200': '#8c8c8c',
        'A400': '#999999',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        .backgroundPalette('customBackground')
});



app.directive('ngFiles', ['$parse', function ($parse) {

    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            onChange(scope, { $files: event.target.files });
        });
    };

    return {
        link: fn_link
    }
}]);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (data) {
            console.log(data);
        })
        .error(function () {
        });
    }
}]);