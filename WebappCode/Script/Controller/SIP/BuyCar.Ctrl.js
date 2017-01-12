app.controller("BuyCar.Ctrl", ['$scope', '$rootScope', '$mdDialog', '$mdMedia', '$localStorage', '$state', 'FundsService',
    function ($scope, $rootScope, $mdDialog, $mdMedia, $localStorage, $state, FundsService) {
        $scope.BuyCar_Step1 = true;

        function CalculateAmount(AchieveGoal, exp_irate, TimePeriod) {
            var graphTwo = Number(AchieveGoal) * Math.pow((1 + Number(exp_irate) / 100), Number(TimePeriod));
            var multiplier = 1;
            var rog = 9;
            var future_cost = graphTwo.toFixed(0);
            var mInvst = future_cost * Number(rog / 100) / ((Math.pow((1 + Number(rog) / 100), (Number(TimePeriod))) - 1) * (1 + Number(rog) / 100));
            $scope.Portfolio_Parameter.SIPAmount = parseInt(mInvst / 12);
            $scope.Portfolio_Parameter.TotalMoney = parseInt(mInvst);
        }
        $scope.PortFolio_InflationRate = {
            "Inflation": [{
                "Inflation_Percentage": "3"
            },
            {
                "Inflation_Percentage": "4"
            },
            {
                "Inflation_Percentage": "5"
            },
            {
                "Inflation_Percentage": "6"
            },
            {
                "Inflation_Percentage": "7"
            },
            {
                "Inflation_Percentage": "8"
            },
            {
                "Inflation_Percentage": "9"
            },
            {
                "Inflation_Percentage": "10"
            },
            {
                "Inflation_Percentage": "11"
            },
            {
                "Inflation_Percentage": "12"
            },
            {
                "Inflation_Percentage": "13"
            },
            {
                "Inflation_Percentage": "14"
            },
            {
                "Inflation_Percentage": "15"
            }
            ]
        }

        $scope.BuyCar_NoGoalYear = {
            "BuyCar": [{
                "Year": "1"
            },
            {
                "Year": "2"
            },
            {
                "Year": "3"
            },
            {
                "Year": "4"
            },
            {
                "Year": "5"
            },
            {
                "Year": "6"
            },
            {
                "Year": "7"
            },
            {
                "Year": "8"
            },
            {
                "Year": "9"
            },
            {
                "Year": "10"
            },
            {
                "Year": "11"
            },
            {
                "Year": "12"
            },
            {
                "Year": "13"
            },
            {
                "Year": "14"
            }
            , {
                "Year": "15"
            },
            {
                "Year": "16"
            },
            {
                "Year": "17"
            },
            {
                "Year": "18"
            },
            {
                "Year": "19"
            },
            {
                "Year": "20"
            },
            {
                "Year": "21"
            },
            {
                "Year": "22"
            },
            {
                "Year": "23"
            },
            {
                "Year": "24"
            },
            {
                "Year": "25"
            }
            ]
        }
        $scope.BuyCar_NoGoalMonth = {
            "BuyCar": [{
                "Month": "1"
            },
            {
                "Month": "2"
            },
            {
                "Month": "3"
            },
            {
                "Month": "4"
            },
            {
                "Month": "5"
            },
            {
                "Month": "6"
            },
            {
                "Month": "7"
            },
            {
                "Month": "8"
            },
            {
                "Month": "9"
            },
            {
                "Month": "10"
            },
            {
                "Month": "11"
            },
            {
                "Month": "12"
            }
            ]
        }

        $scope.Portfolio_Calculate = function () {
            $scope.BuyCar_Step1 = false;
            $scope.BuyCar_Step2 = true;
            var Year = ((Number($scope.Portfolio_Parameter.Portfolio_Year) * 12) + (Number($scope.Portfolio_Parameter.Portfolio_Month))) / 12;
            CalculateAmount($scope.Portfolio_Parameter.Portfolio_GoalAmount, $scope.Portfolio_Parameter.Portfolio_ROInflation, parseInt(Year));

        };
    }]);