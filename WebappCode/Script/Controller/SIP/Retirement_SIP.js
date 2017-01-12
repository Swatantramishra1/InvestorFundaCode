

app.controller("Retirement_SIP.Ctrl", ['$scope', '$rootScope', '$mdDialog', '$mdMedia', '$localStorage', '$stateParams', '$state', function ($scope, $rootScope, $mdDialog, $mdMedia, $localStorage, $stateParams, $state) {
    $scope.val = "";
 
    //Show Hide ***************
    $scope.Retirement_Step1 = true;


    //Calculator
    var GoalRounding = -4;
    function GetPrincipalValue(FutureValue, Years, Rate) {
        // return Math.round(FutureValue / Math.pow((1 + Rate / 100), Years));
        return rounding(Math.round(FutureValue / Math.pow((1 + Rate / 100), (Years + 1 / 365))), -3); /// changed - prasad. (rounding everything)
    }

    function GetFutureValue(PrinAmt, Years, Rate) {
        return rounding(Math.round(PrinAmt * Math.pow((1 + Rate / 100), (Years + 1 / 365))), -3);   /// changed - prasad. (rounding everything)
    }
    function rounding(a, b) {
        if (b > 0)
            return Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
        else
            return Math.round(Math.round(a * Math.pow(10, b)) / Math.pow(10, b));
    }
    function CalculateRetirementAmount(RetirementAnnualySave, Retirement_EstmMonthlyExpensePerChgVal, retirementAgeVal, age) {
      
            //document.getElementById("Retirement_MonthlyExpenseVal").innerHTML = GetRoundingFigure(retirementmonthexp * 1000)[0] + " <span class='fwNormal'>" + GetRoundingFigure(retirementmonthexp * 1000)[2] + "</span>";

            //var age = document.getElementById("retirement_PresentAgeVal").innerHTML;
        var amt = RequiredRetirementAmount(new Number(RetirementAnnualySave * 1000), new Number($scope.SIP_Percet_bar.value), new Number(retirementAgeVal), new Number(age), Retirement_EstmMonthlyExpensePerChgVal);
            //var goalamt = new Number(rounding(GetPrincipalValue(amt, document.getElementById("retirementAgeVal").innerHTML - age, inflationRate), GoalRounding));
            if (Retirement_EstmMonthlyExpensePerChgVal == "") { alert("Please enter Inflation Rate"); return false; }
            if (!isFinite(Retirement_EstmMonthlyExpensePerChgVal)) { alert("Please enter valid rate"); return false; }
            var goalamt = new Number(rounding(GetPrincipalValue(amt, retirementAgeVal - age, Retirement_EstmMonthlyExpensePerChgVal), GoalRounding));
            RetirementAmount = goalamt;
            $scope.Portfolio_Parameter.Portfolio_RetirementCurrentValue = RetirementAmount;
            //RetirementInflatedAmount = GetFutureValue(goalamt, document.getElementById("retirementAgeVal").innerHTML - age, inflationRate);
            RetirementInflatedAmount = GetFutureValue(goalamt, retirementAgeVal - age, Retirement_EstmMonthlyExpensePerChgVal);
            RetInfAmt = parseInt(RetirementInflatedAmount);
            return addCommas(RetirementInflatedAmount);
      
    }

    function RequiredRetirementAmount(curamt, chngper, retyear, curage, inflRateRetirement) {
        var riskfreerate = parseFloat('10');
        var lifeExpectancyValue = parseInt('80');
        var amt = new Number(curamt  * (1 + chngper / 100));
        //var amt = new Number(curamt * 12 * (1 + chngper / 100));
        var YearsToRetire = retyear - curage;
        $scope.Portfolio_Parameter.InvestedTillYear = YearsToRetire;
        //var infval = (1 + inflationRate / 100);
        var infval = (1 + inflRateRetirement / 100);
        //document.getElementById("inflRateRetirement").value
        var rfrval = (1 + riskfreerate / 100);
        amt = amt * Math.pow(infval, YearsToRetire);
        if (infval != rfrval)
            amt = amt * ((1 - Math.pow(infval / rfrval, (lifeExpectancyValue - retyear))) / (1 - (infval / rfrval)));
        else
            amt = amt * (lifeExpectancyValue - retyear);
        return amt;
    }

    $scope.InvestNow = function () {

    };
    

    $scope.Portfolio_Parameter = {
        Portfolio_Name: "",
        Portfolio_CurrentAge: "25",
        Portfolio_InflationRate: "7",
        Portfolio_RetirementCurrentValue: "",
        RetirementTotalMoney: "",
        InvestedTillYear: "",
        TotalInvestedMoneyByUser:""
     
    };

    $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v Amount"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "Total Amount Invested ",
            values: [$scope.total_amount_invested],
            backgroundColor: "#e75410 #e75410",
        }, {
            text: "Expected Amount on Maturity",
            values: [$scope.calulated_Money_SIP],
            backgroundColor: "#007acc #007acc"
        }]
    };
    var checkSliderVal = function () {
        if ($scope.SIP_Money_bar != undefined) {
            $scope.calculate_SIP();

            var elem = document.getElementById("myBar_Home");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }

            $scope.calulated_Money = "Rs. " + $scope.calulated_Money_SIP;
            $scope.myJson.series[0].values[0] = $scope.total_amount_invested;
            $scope.myJson.series[1].values[1] = $scope.calulated_Money_SIP;

        }


    }

    $scope.Portfolio_Calculate = function () {
        $scope.Retirement_Step1 = false;
        $scope.Retirement_Step2 = true;
        
        $scope.Portfolio_Parameter.RetirementTotalMoney = CalculateRetirementAmount($scope.SIP_AmountInvestment.value, $scope.Portfolio_Parameter.Portfolio_InflationRate, $scope.SIP_RetireAge.value, $scope.Portfolio_Parameter.Portfolio_CurrentAge);
        $scope.Portfolio_Parameter.TotalInvestedMoneyByUser = (parseInt($scope.SIP_AmountInvestment.value) * parseInt($scope.Portfolio_Parameter.InvestedTillYear)) + "000";
    };
    $scope.Retirement_Back = function () {

        $scope.Retirement_Step1 = true;
        $scope.Retirement_Step2 = false;
    };
    $scope.SIP_AmountInvestment = {
        value: 5,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function (value) {
                    if (value <= 10)
                        return 'red';
                    if (value <= 25)
                        return 'orange';
                    if (value <= 35)
                        return 'yellow';
                    return '#2AE02A';

                },
                ceil: 100,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };
    $scope.SIP_RetireAge = {
        value: 45,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function () {
                    return '#2AE02A';
                },
                ceil: 70,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };
    $scope.SIP_CurrentMonthlyExpndtr = {
        value: 5,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function () {
                    return '#2AE02A';
                },
                ceil: 100,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };
    $scope.SIP_Percet_bar = {
        value: 7,
        options:
            {
                showSelectionBar: true,
                getSelectionBarColor: function () {
                    return '#2AE02A';
                },
                ceil: 50,
                floor: 0,
                showTicks: 5,
                onChange: function () { checkSliderVal() }

            }
    };


    $scope.selectRow = function (index) {
        $scope.selected = index;
    };
    $scope.rowClass = function (index) {
        return ($scope.selected === index) ? "selected" : "";
    };
    $scope.chartTitle = "Lead Sources";
    $scope.chartWidth = 500;
    $scope.chartHeight = 320;
    $scope.chartData = [
        ['Equity', 63],
        ['Bonds', 12],
        ['Cash', 13],
        ['Others', 12]
    ];

    $scope.Portfolio_InvestNow = function () {
       
        if ($localStorage.UserID != undefined && $localStorage.UserID != '')
        {
            
        }
        else {
            $state.go('Authentication', { From: 'Retirement' });
        }
        
    };
    

}]);
