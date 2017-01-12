/// <reference path="../../../Webform/Common/Popup/MutualFundsDetailPopup.html" />
app.controller("MtualFunds.Ctrl", ['$scope', '$rootScope', '$http', 'fileUpload', '$mdDialog', 'FundsService', '$stateParams', '$state', '$localStorage', '$interval', '$timeout',
function ($scope, $rootScope, $http, fileUpload, $mdDialog, FundsService, $stateParams, $state, $localStorage,$interval, $timeout) {


    $scope.Return_3Mon = 0;
    $scope.Return_6Mon = 0;
    $scope.Return_1Yr = 0;
    $scope.Return_3Yr = 0;
    $scope.Return_5Yr = 0;

        //Onload Loader
    ShowLoader();
    var ListEx = {};
    //$scope.Timer = $interval(function () {
    //    SchemeLimitTo = SchemeLimitTo + 5;
    //}, 1000);
    $scope.SchemeLimitTo = 15;
    $scope.GetFundList = function (AmcCode, CategoryCode, SchemeOption)
    {
        if ($scope.FundsList == '' || $scope.FundsList == undefined)
        {
            var getListOfMutualFunds = FundsService.FundsList.getPromise(AmcCode, CategoryCode, SchemeOption);
            getListOfMutualFunds.then(
            // OnSuccess function
            function (response) {

                HideLoader();
                //if(response.@type=='success')
                //{

                //}
                ListEx = response.data.response.data.Schemelist.Scheme;
                $scope.FundsList = response.data.response.data.Schemelist.Scheme;
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
        }

    
    }
    $scope.CheckFundsListExists=function()
    {
        if ($('tr').find('td').length == 1)
        {
            $scope.FundsListShowMore = true;
        }
        else {
            $scope.FundsListShowMore = false;
        }
    }
        if ($state.current.name == 'MutualFundsList')
        {
            //OnLoad Calss
            $scope.GetFundList('-', '-', 'Growth');
           
            var getDetailsFundsHouse = FundsService.FundsHouse.getPromise();
            getDetailsFundsHouse.then(
            // OnSuccess function
            function (response) {
                
                $scope.FundsHouse = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
               
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryEQUITY = FundsService.FundCategoryEQUITY.getPromise();
            FundCategoryEQUITY.then(
            // OnSuccess function
            function (response) {
               
                $scope.FundCategoryEQUITY = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryHybrid = FundsService.FundCategoryHybrid.getPromise();
            FundCategoryHybrid.then(
            // OnSuccess function
            function (response) {
                
                $scope.FundCategoryHybrid = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundCategoryDebt = FundsService.FundCategoryDebt.getPromise();
            FundCategoryDebt.then(
            // OnSuccess function
            function (response) {
                
                $scope.FundCategoryDebt = response.data.response.data.Schemelist.Scheme;

            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
        }
        else {
            var getDetailsOfMutualFunds = FundsService.FundsDetails.getPromise($localStorage.Scheme_ID);
            getDetailsOfMutualFunds.then(
            // OnSuccess function
            function (response) {
                HideLoader();
                $rootScope.FundsDetailsData = response.data.response.data;
                $scope.Return_3Mon = $scope.FundsDetailsData.Schemelist.Scheme.Return_3Mon;
                $scope.Return_6Mon = $scope.FundsDetailsData.Schemelist.Scheme.Return_6Mon;
                $scope.Return_1Yr = $scope.FundsDetailsData.Schemelist.Scheme.Return_1Yr;
                $scope.Return_3Yr = $scope.FundsDetailsData.Schemelist.Scheme.Return_3Yr;
                $scope.Return_5Yr = $scope.FundsDetailsData.Schemelist.Scheme.Return_5Yr;
                $scope.myDataSourceStart = {
                    chart: {
                        caption: "Returns Snapshot",
                        subCaption: "Top 5 Snapshot",
                        numberSuffix: "%",
                        xaxisname: "Months",
                        yaxisname: "Returns",
                        BgColor: "rgba(102,0,51,1)",
                        theme: "ocean"
                    },
                    data: [
                                 {
                                     label: "3 Month",
                                     value: parseInt($scope.Return_3Mon).toFixed(2)
                                 },
                                {
                                    label: "6 Month",
                                    value: parseInt($scope.Return_6Mon).toFixed(2)
                                },
                                {
                                    label: "1 Year",
                                    value: parseInt($scope.Return_1Yr).toFixed(2)
                                },
                                {
                                    label: "3 Year",
                                    value: parseInt($scope.Return_3Yr).toFixed(2)
                                },
                                {
                                    label: "5 Year",
                                    value: parseInt($scope.Return_5Yr).toFixed(2)
                                }]
                };
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });

            var FundAssetAllocation = FundsService.FundAssetAllocation.getPromise($localStorage.Scheme_ID);
            FundAssetAllocation.then(
            // OnSuccess function
            function (response) {
                HideLoader();
                $rootScope.FundAssetAllocation = response.data.response.data.Schemelist.Scheme;
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
            var FundTopHolding = FundsService.FundTopHolding.getPromise($localStorage.Scheme_ID);
            FundTopHolding.then(
            // OnSuccess function
            function (response) {
                HideLoader();
                $rootScope.FundTopHolding = response.data.response.data.Schemelist.Scheme;
            },
            // OnFailure function
            function (reason) {
                HideLoader();
                console.log(reason.GetLoginResult.ResponseMessage)
                $scope.somethingWrong = reason;
                $scope.error = true;
            });
        }
        $scope.ShowMore=function()
        {
            $scope.SchemeLimitTo =$scope.SchemeLimitTo+ 15;
        }
        $scope.DataForChart = [
                     {
                       label: "3 Month",
                       value: $scope.Return_3Mon
                    },
                    {
                        label: "6 Month",
                        value: $scope.Return_6Mon
                    },
                    {
                        label: "1 Year",
                        value: $scope.Return_1Yr
                    },
                    {
                        label: "3 Year",
                        value: $scope.Return_3Yr
                    },
                    {
                        label: "5 Year",
                        value: $scope.Return_5Yr
                    }];
        $scope.datasourceData = {
            "chart": {
                "caption": "NAV Performance",
                "xaxisname": "Month",
                "yaxisname": "Changes",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan"
                        },
                        {
                            "label": "Feb"
                        },
                        {
                            "label": "Mar"
                        },
                        {
                            "label": "Apr"
                        },
                        {
                            "label": "May"
                        },
                        {
                            "label": "Jun"
                        },
                        {
                            "label": "Jul"
                        },
                        {
                            "label": "Aug"
                        },
                        {
                            "label": "Sep"
                        },
                        {
                            "label": "Oct"
                        },
                        {
                            "label": "Nov"
                        },
                        {
                            "label": "Dec"
                        }
                    ]
                }
            ],
            "dataset": [
                
                {
                    "seriesname": "NAV",
                    "renderas": "area",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "4000"
                        },
                        {
                            "value": "5000"
                        },
                        {
                            "value": "3000"
                        },
                        {
                            "value": "4000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "7000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "4000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "8000"
                        },
                        {
                            "value": "2000"
                        },
                        {
                            "value": "7000"
                        }
                    ]
                }
            ]
        }
    $scope.MfPopUp = function () {
        $mdDialog.show({
            controller: MFSortDetails,
            templateUrl: '../../../Webform/Common/Popup/MutualFundsDetailPopup.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };
    $scope.showAdvanced = function (SchemeID) {
      
        ShowLoader();
        var getDetailsOfMutualFunds = FundsService.FundsDetails.getPromise(SchemeID);
        getDetailsOfMutualFunds.then(
        // OnSuccess function
        function (response) {
            HideLoader();
            $rootScope.FundsDetailsData = response.data.response.data.Schemelist.Scheme;
            $scope.MfPopUp();
        },
        // OnFailure function
        function (reason) {
            HideLoader();
            console.log(reason.GetLoginResult.ResponseMessage)
            $scope.somethingWrong = reason;
            $scope.error = true;
        });
    };
   

    function MFSortDetails($scope, $mdDialog) {

        $scope.FundsDetails = $rootScope.FundsDetailsData;


        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.GoForMFDetails=function(Scheme_ID)
    {
        $localStorage.Scheme_ID = Scheme_ID;
        $state.go('MutualFunds');
    }
    
    $scope.myDataSourceStart = {
        chart: {
            caption: "Returns Snapshot",
            subCaption: "Top 5 Snapshot",
            numberPrefix: "%",
            theme: "ocean"
        },
        data:  [
                     {
                         label: "3 Month",
                         value: $scope.Return_3Mon
                     },
                    {
                        label: "6 Month",
                        value: $scope.Return_6Mon
                    },
                    {
                        label: "1 Year",
                        value: $scope.Return_1Yr
                    },
                    {
                        label: "3 Year",
                        value: $scope.Return_3Yr
                    },
                    {
                        label: "5 Year",
                        value: $scope.Return_5Yr
                    }]
    };
    var ArrayList =
        [
        {
            "FundsHouseList": []

        },
        {
            "FundsEquityList": []

        }
        ];

    $scope.ApplyFilterOnFundsList=function()
    {
        var FinalOutPutList = {};
        if(ArrayList[0].FundsHouseList.length>0)
        {
            var ids = [];
            _.each(ArrayList[0].FundsHouseList, function (objFundsHouseList) { ids.push(objFundsHouseList.mf_cocode); });

            $scope.FundsList = _.filter($scope.FundsList, function (val) {
                // return ids[val.mf_cocode];
                return _.find(ids, function (listObj) {
                    return val.mf_cocode === listObj;
                })
            });

        }
       else if (ArrayList[1].FundsEquityList.length > 0) {
           
            var ids = [];
            _.each(ArrayList[1].FundsEquityList, function (objFundsEquityHouseList) { ids.push(objFundsEquityHouseList.CategoryCode); });

            $scope.FundsList = _.filter($scope.FundsList, function (val) {
                // return ids[val.mf_cocode];
                return _.find(ids, function (listObj) {
                    return val.CategoryCode === listObj;
                })
            });

        }

        

        if ((ArrayList[0].FundsHouseList.length > 0) || (ArrayList[1].FundsEquityList.length > 0))
        {
        }
        else {
            $scope.FundsList = ListEx;
        }
        HideLoader();
    }
    $scope.SortFundsList=function(FilterType,Code)
    {
        ShowLoader();
        var SelectedList = {};
        var SelectionExists = false;
        if(FilterType=='FundsHouse')
        {
            SelectedList = {
                "mf_cocode": Code
            }
            SelectionExists = _.some(ArrayList[0].FundsHouseList, function (obj) {
                return obj.mf_cocode == Code
            })

            if(SelectionExists)
            {
                ArrayList[0].FundsHouseList = _.filter(ArrayList[0].FundsHouseList, function (obj) {
                    return obj.mf_cocode !== Code
                })
            }
            else {
                ArrayList[0].FundsHouseList.push(SelectedList);
            }
        }
        else if (FilterType == 'Equity') {
            SelectedList = {
                "CategoryCode": Code
            }
            SelectionExists = _.some(ArrayList[1].FundsEquityList, function (obj) {
                return obj.CategoryCode == Code
            })

            if (SelectionExists) {
                ArrayList[1].FundsEquityList = _.filter(ArrayList[1].FundsEquityList, function (obj) {
                    return obj.CategoryCode !== Code
                })
            }
            else {
                ArrayList[1].FundsEquityList.push(SelectedList);
            }
        }
        $scope.ApplyFilterOnFundsList();
    }
    
}]);

