app.controller("MainCtrl", ['$scope', '$rootScope', '$http', 'fileUpload', function ($scope, $rootScope, $http, fileUpload) {

    //********Defined Area*****************
    $scope.total_amount_invested = 11110;
    $scope.BankList = [];
    $scope.LogoName = "INVESTFUNDA";
    $scope.CompanyYear = "2016";
    $scope.SIP_Percet_bar = 15;
    $scope.PlanButton =
    {
        "color": "red"
    }
    $scope.calculate_SIP = function () {
        var principal = parseFloat($scope.SIP_Money_bar);
        $scope.total_amount_invested = principal * 12;
        var period = parseFloat($scope.SIP_Year_bar);
        //  var freq = parseFloat(document.getElementById("frequency").value);
        var freq = 1
        var rateofreturn = parseFloat($scope.SIP_Percet_bar);
        if (isNaN(principal)) {
            alert("Please enter Amount Invested in each Installment");
        } else if (isNaN(period)) {
            alert("Please enter No of Years");
        } else if (isNaN(freq)) {
            alert("Please enter Frequency");
        } else if (isNaN(rateofreturn)) {
            alert("Please enter Rate of Return");
        } else {
            var instalment_amount = principal;
            var no_of_compounding_periods = (12 / freq) * period;
            var int_rate_per_period = rateofreturn / (12 / freq) / 100;
            var total_amount_invested = period * instalment_amount * 12;
            var expected_amount_on_maturity = instalment_amount * ((Math.pow(1 + int_rate_per_period, no_of_compounding_periods) - 1) / int_rate_per_period) * (1 + int_rate_per_period);
            //document.getElementById("totalInvested").value = total_amount_invested.toFixed(2);
            $scope.calulated_Money_SIP = expected_amount_on_maturity.toFixed(2);


        }

    }

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

            //var elem = document.getElementById("myBar_Home");
            //var width = 1;
            //var id = setInterval(frame, 10);
            //function frame() {
            //    if (width >= 100) {
            //        clearInterval(id);
            //    } else {
            //        width++;
            //        elem.style.width = width + '%';
            //    }
            //}
            $scope.InvestNowPortFolio = {
                chart: {
                    //caption: "Expected Amount on Maturity",
                    //subcaption: "According this",
                    //startingangle: "310",
                    //showlabels: "0",
                    //showlegend: "1",
                    //enablemultislicing: "0",
                    //slicingdistance: "15",
                    //showpercentvalues: "1",
                    //animateClockwise: "1",
                    //showpercentintooltip: "0",
                    //defaultCenterLabel: "Plan Of Investment",
                    //centerLabel: "Amount of $label: $value",
                    ////plottooltext: "Investment of : $label will be : $datavalue%",
                    //theme: "fint"
                    caption: "Expected Amount on Maturity",
                    subCaption: "According this",
                    numberPrefix: "$",
                    showBorder: "0",
                    use3DLighting: "0",
                    enableSmartLabels: "0",
                    startingAngle: "310",
                    showLabels: "0",
                    showPercentValues: "1",
                   showLegend: "1",
                    defaultCenterLabel: "Investment Money",
                    centerLabel: "Money from $label: $value",
                    centerLabelBold: "1",
                    showTooltip: "0",
                    decimals: "0",
                    useDataPlotColorForLabels: "1",
                    theme: "fint"
                },
                data: [
                    {
                        label: "Investment Money",
                        value: $scope.calulated_Money_SIP
                    },
                    
                ]
            }
            $scope.calulated_Money = "Rs. " + $scope.calulated_Money_SIP;
            $scope.myJson.series[0].values[0] = $scope.total_amount_invested;
            $scope.myJson.series[1].values[1] = $scope.calulated_Money_SIP;

        }


    }
    //$scope.SIP_Money_bar = {
    //    value: 10,
    //    options:
    //        {
    //            showSelectionBar: true,
    //            getSelectionBarColor: function (value) {
    //                if (value <= 10)
    //                    return 'red';
    //                if (value <= 25)
    //                    return 'orange';
    //                if (value <= 35)
    //                    return 'yellow';
    //                return '#2AE02A';

    //            },
    //            ceil: 50,
    //            floor: 0,
    //            showTicks: 5,
    //            onChange: function () { checkSliderVal() }

    //        }
    //};
    //$scope.SIP_Year_bar = {
    //    value: 10,
    //    options:
    //        {
    //            showSelectionBar: true,
    //            getSelectionBarColor: function () {
    //                return '#2AE02A';
    //            },
    //            ceil: 30,
    //            floor: 0,
    //            showTicks: 5,
    //            onChange: function () { checkSliderVal() }

    //        }
    //};
    //$scope.SIP_Percet_bar = {
    //    value: 15,
    //    options:
    //        {
    //            showSelectionBar: true,
    //            getSelectionBarColor: function () {
    //                return '#2AE02A';
    //            },
    //            ceil: 35,
    //            floor: 0,
    //            showTicks: 5,
    //            onChange: function () { checkSliderVal() }

    //        }
    //};

    $.ajax({
        method: 'POST',
        url: 'https://mutualfundsnav.p.mashape.com/',
        headers: {
            'Content-Type': 'application/json',
            'X-Mashape-Key': '8OMioOCJyWmsh4eMNvOBCzM0s1TDp1tjHuHjsnUYzOX0zz90Tp',
            'Accept': 'application/json'
        },
        data: '{ "scodes": ["119018", "100520", "119528", "120503", "118533"] }',
        async: false,
        success: function (response) {

            $scope.BankList.push(response[119018]);
            $scope.BankList.push(response[100520]);
            $scope.BankList.push(response[119528]);
            $scope.BankList.push(response[120503]);
            $scope.BankList.push(response[118533]);
        }
    })
    //$scope.BankList = {
    //    "BankList": [
    //    {
    //        "id": "1",
    //        "title": "HDFC BANK",
    //        "favicon_image": "data:image/jpeg;base64,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",
    //        "url_address": "http://www.hdfc.net/",
    //        "tag": "Personal Loan"
    //    },
    //    {
    //        "id": "2",
    //        "title": "Axis Bank",
    //        "favicon_image": "data:image/png;base64,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",
    //        "url_address": "https://axis.com/",
    //        "tag": "Mutual Funds"
    //    },
    //    {
    //        "id": "3",
    //        "title": "Federal Bank",
    //        "favicon_image": "data:image/jpeg;base64,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",
    //        "url_address": "http://Federal.com/me",
    //        "tag": "Blog"
    //    },
    //    {
    //        "id": "4",
    //        "title": "Relince Digital",
    //        "favicon_image": "data:image/png;base64,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",
    //        "url_address": "https://goo.gl/fdr5Kq",
    //        "tag": "Social"
    //    },
    //    {
    //        "id": "5",
    //        "title": "ICICI",
    //        "favicon_image": "data:image/jpeg;base64,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",
    //        "url_address": "http://www.icici.com/",
    //        "tag": "Caricature"
    //    },
    //    {
    //        "id": "6",
    //        "title": "Relince Digital",
    //        "favicon_image": "data:image/png;base64,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",
    //        "url_address": "https://goo.gl/fdr5Kq",
    //        "tag": "Social"
    //    }
    //    ]
    //}
    $scope.active = true;
    $scope.active1 = true;
    var config = {
        headers: {
            'Content-Type': 'application/json',
            'X-Mashape-Key': '8OMioOCJyWmsh4eMNvOBCzM0s1TDp1tjHuHjsnUYzOX0zz90Tp',
            'Accept': 'application/json'
        }
    };
    $scope.TestApi = function () {
        //$http.post("https://mutualfundsnav.p.mashape.com/", config)
        //.then(function (response) {
        //    if (response.data == 'ok') {
        //        // success
        //    } else {
        //        // failed
        //    }
        //});
        $.ajax({
            method: 'POST',
            url: 'https://mutualfundsnav.p.mashape.com/',
            headers: {
                'Content-Type': 'application/json',
                'X-Mashape-Key': '8OMioOCJyWmsh4eMNvOBCzM0s1TDp1tjHuHjsnUYzOX0zz90Tp',
                'Accept': 'application/json'
            },
            data: '{ "scodes": ["119018", "100520", "119528", "120503", "118533"] }',
            success: function (response) {
                console.log(response)
            }
        })
        //$http({
        //    method: 'POST',
        //    url: 'https://mutualfundsnav.p.mashape.com/',
        //    data: '{ "scodes": ["119018", "100520", "119528", "120503", "118533"] }',
        //    config
        //}).then(function (response) {
        //    if (response.data == 'ok') {
        //        // success
        //    } else {
        //        // failed
        //    }
        //});
    }

    $scope.InvestNowPortFolio = {
        chart: {
            caption: "Expected Amount on Maturity",
            subcaption: "According this",
            startingangle: "310",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "15",
            showpercentvalues: "1",
            animateClockwise: "1",
            showpercentintooltip: "0",
            defaultCenterLabel: "Plan Of Investment",
            centerLabel: "Amount of $label: $value",
            //plottooltext: "Investment of : $label will be : $datavalue%",
            theme: "fint"
        },
        data: [
            {
                label: "Equity",
                value: 60
            },
            {
                label: "Debt",
                value: 0
            }
        ]
    }

    

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
}]);

