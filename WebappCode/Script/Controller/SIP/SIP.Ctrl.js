app.controller("SIP.Ctrl", ['$scope', '$rootScope', '$mdDialog', '$mdMedia', '$localStorage', '$state', 'FundsService',
    function ($scope, $rootScope, $mdDialog, $mdMedia, $localStorage, $state, FundsService) {
    $scope.val = "";

    //Show Hide ***************
     $scope.SIP_GOAL_SHOW = true;
     $scope.SIPGoalStructureDate = 

        [
                 {
                     "Rank": "1",
                     "SchemeName": "SBI Bluechip Fund - Growth",
                     "ISIN": "INF200K01180",
                     "BSESchmecode": "103G",
                     "MinInvst": "500",
                     "MFtype": "EQ large cap",
                     "Minsip": "12",
                     "date": "1,5,10,15,20,25,30",
                     "multiplier": "100"
                 },
                   {
                       "Rank": "2",
                       "SchemeName": "Quantum Long-Term Equity Fund - Growth",
                       "ISIN": "INF082J01036",
                       "BSESchmecode": "QMFEF-GP",
                       "MinInvst": "500",
                       "MFtype": "EQ large cap",
                       "Minsip": "12",
                       "date": "5,7,15,21,25,28",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "Tata Equity P/E Fund - Reg - Growth",
                       "ISIN": "INF277K01451",
                       "BSESchmecode": "EPEG",
                       "MinInvst": "500",
                       "MFtype": "EQ large cap",
                       "Minsip": "12",
                       "date": "1-30 all days",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "Templeton India Growth Fund - Growth",
                       "ISIN": "INF090I01296",
                       "BSESchmecode": "FTIGF-GR",
                       "MinInvst": "500",
                       "MFtype": "EQ large cap",
                       "Minsip": "12",
                       "date": "1,7,10,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "5",
                       "SchemeName": "Birla Sun Life India GenNext Fund - Growth",
                       "ISIN": "INF209K01447",
                       "BSESchmecode": "B291G",
                       "MinInvst": "1000",
                       "MFtype": "EQ large cap",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "6",
                       "SchemeName": "DSP BlackRock Focus 25 Fund - Growth",
                       "ISIN": "INF740K01532",
                       "BSESchmecode": "DSP349-GR",
                       "MinInvst": "500",
                       "MFtype": "EQ large cap",
                       "Minsip": "12",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "ICICI Prudential Value Discovery Fund - Growth",
                       "ISIN": "INF109K01AF8",
                       "BSESchmecode": "DFG",
                       "MinInvst": "1000",
                       "MFtype": "EQ Multicap",
                       "Minsip": "6",
                       "date": "1,7,10,14,15,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Franklin India High Growth Companies Fund  - Growth",
                       "ISIN": "INF090I01981",
                       "BSESchmecode": "F273-GR",
                       "MinInvst": "500",
                       "MFtype": "EQ Multicap",
                       "Minsip": "12",
                       "date": "1,7,10,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "L&T India Value Fund - Reg - Growth",
                       "ISIN": "INF677K01023",
                       "BSESchmecode": "FIVFG",
                       "MinInvst": "500",
                       "MFtype": "EQ Multicap",
                       "Minsip": "6",
                       "date": "1,5,10,15,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "SBI Magnum Multi Cap Fund - Growth",
                       "ISIN": "INF200K01222",
                       "BSESchmecode": "099G",
                       "MinInvst": "500",
                       "MFtype": "EQ Multicap",
                       "Minsip": "12",
                       "date": "1,5,10,15,20,25,30",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "5",
                       "SchemeName": "Kotak Select Focus Fund - Reg - Growth",
                       "ISIN": "INF174K01336",
                       "BSESchmecode": "K168SF-GR",
                       "MinInvst": "500",
                       "MFtype": "EQ Multicap",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "6",
                       "SchemeName": "Birla Sun Life Equity Fund - Growth",
                       "ISIN": "INF209K01AJ8",
                       "BSESchmecode": "51",
                       "MinInvst": "1000",
                       "MFtype": "EQ Multicap",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "DSP BlackRock Micro Cap Fund - Reg - Growth",
                       "ISIN": "INF740K01797",
                       "BSESchmecode": "DSP157-GR",
                       "MinInvst": "500",
                       "MFtype": "EQ Mid/small",
                       "Minsip": "12",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Franklin India Smaller Companies Fund - Growth",
                       "ISIN": "INF090I01569",
                       "BSESchmecode": "F219-GR",
                       "MinInvst": "500",
                       "MFtype": "EQ Mid/small",
                       "Minsip": "12",
                       "date": "1,7,10,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "Kotak Emerging Equity Scheme - Reg - Growth",
                       "ISIN": "INF174K01DS9",
                       "BSESchmecode": "K123-GR",
                       "MinInvst": "1000",
                       "MFtype": "EQ Mid/small",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "L&T Midcap Fund - Reg - Growth",
                       "ISIN": "INF917K01254",
                       "BSESchmecode": "LT17-GR",
                       "MinInvst": "1000",
                       "MFtype": "EQ Mid/small",
                       "Minsip": "6",
                       "date": "1,5,10,15,20,25,30",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "5",
                       "SchemeName": "Mirae Asset Emerging Bluechip Fund - Growth",
                       "ISIN": "INF769K01101",
                       "BSESchmecode": "MAFEBRG-GR",
                       "MinInvst": "1000",
                       "MFtype": "EQ Mid/small",
                       "Minsip": "6",
                       "date": "1,10,20,25,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "6",
                       "SchemeName": "Principal Emerging Bluechip Fund - Growth",
                       "ISIN": "INF173K01155",
                       "BSESchmecode": "PCEBRGG-GR",
                       "MinInvst": "2000",
                       "MFtype": "EQ Mid/small",
                       "Minsip": "6",
                       "date": "1,5,10,20",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "Baroda Pioneer Liquid Fund - Plan B - Growth",
                       "ISIN": "INF955L01AL0",
                       "BSESchmecode": "BO114-GR",
                       "MinInvst": "500",
                       "MFtype": "Debt liquid",
                       "Minsip": "12",
                       "date": "1,10,15,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "DSP BlackRock Treasury Bill Fund - Direct Plan - Growth",
                       "ISIN": "INF740K01NU2",
                       "BSESchmecode": "DS723-GR",
                       "MinInvst": "500",
                       "MFtype": "Debt liquid",
                       "Minsip": "12",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "DHFL Pramerica Insta Cash Plus Fund - Growth",
                       "ISIN": "INF223J01BP6",
                       "BSESchmecode": "DWSCFSG-GR",
                       "MinInvst": "1000",
                       "MFtype": "Debt liquid",
                       "Minsip": "12",
                       "date": "1,5,10,15,20,25,30",
                       "multiplier": "100"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "Principal Cash Mgmt Fund - Growth",
                       "ISIN": "INF173K01DA9",
                       "BSESchmecode": "PCLFPGG-GR",
                       "MinInvst": "2000",
                       "MFtype": "Debt liquid",
                       "Minsip": "6",
                       "date": "1,5,10,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "IDBI ULTRA SHORT TERM FUND REGULAR PLAN - GROWTH",
                       "ISIN": "INF397L01745",
                       "BSESchmecode": "IDBI-USGP-GR",
                       "MinInvst": "500",
                       "MFtype": "Debt/ ultra short",
                       "Minsip": "12",
                       "date": "5,15,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "L&T ULTRA SHORT TERM FUND - GROWTH",
                       "ISIN": "INF917K01AS7",
                       "BSESchmecode": "LT122-GR",
                       "MinInvst": "1000",
                       "MFtype": "Debt/ ultra short",
                       "Minsip": "6",
                       "date": "1,5,10,15,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "ICICI Prudential Ultra Short Term - Growth",
                       "ISIN": "INF109K01CQ1",
                       "BSESchmecode": "ICICI1477-GR",
                       "MinInvst": "1000",
                       "MFtype": "Debt/ ultra short",
                       "Minsip": "6",
                       "date": "1,7,10,15,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "ICICI Prudential Flexible Income - Growth",
                       "ISIN": "INF109K01746",
                       "BSESchmecode": "FLEXI",
                       "MinInvst": "1000",
                       "MFtype": "Debt/Income",
                       "Minsip": "6",
                       "date": "1,7,10,15,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Birla Sun Life Dynamic Bond Fund - Ret - DAP",
                       "ISIN": "INF209K01793",
                       "BSESchmecode": "B321G",
                       "MinInvst": "1000",
                       "MFtype": "Debt/Income",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "Quantum Dynamic Bond Fund - Growth",
                       "ISIN": "INF082J01176",
                       "BSESchmecode": "QDBGP-GR",
                       "MinInvst": "500",
                       "MFtype": "Debt/Income",
                       "Minsip": "6",
                       "date": "5,7",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "DHFL Pramerica Gilt Fund - Growth",
                       "ISIN": "INF223J01AQ6",
                       "BSESchmecode": "DWGFGP-GR",
                       "MinInvst": "500",
                       "MFtype": "Debt/ GILT",
                       "Minsip": "10",
                       "date": "1,7,10,15,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "BNP Paribas G Sec Fund - Growth",
                       "ISIN": "INF251K01JF9",
                       "BSESchmecode": "BNP614G-GR",
                       "MinInvst": "500",
                       "MFtype": "Debt/ GILT",
                       "Minsip": "10",
                       "date": "1,7,10,15,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "HDFC GILT FUND  - LONG TERM PLAN - GROWTH OPTION",
                       "ISIN": "INF179K01756",
                       "BSESchmecode": "GLG",
                       "MinInvst": "1000",
                       "MFtype": "Debt/ GILT",
                       "Minsip": "10",
                       "date": "1,7,10,21, 25, 28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "HDFC Balanced Fund - Growth",
                       "ISIN": "INF179K01392",
                       "BSESchmecode": "BFG",
                       "MinInvst": "1000",
                       "MFtype": "Balanced",
                       "Minsip": "6",
                       "date": "1,5,10,15,20,25",
                       "multiplier": "100"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Franklin India Balanced Fund - Growth",
                       "ISIN": "INF090I01817",
                       "BSESchmecode": "F045-GR",
                       "MinInvst": "500",
                       "MFtype": "Balanced",
                       "Minsip": "12",
                       "date": "1,7,10,20,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "HDFC MF MONTHLY INCOME PLAN - LONG TERM PLAN - GROWTH  OPTION",
                       "ISIN": "INF179K01AE4",
                       "BSESchmecode": "MILTG",
                       "MinInvst": "1000",
                       "MFtype": "MIP",
                       "Minsip": "6",
                       "date": "1,5,10,15,20,25",
                       "multiplier": "100"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Birla Sun Life MIP II - Savings 5 - Reg - Growth",
                       "ISIN": "INF209K01XE1",
                       "BSESchmecode": "BS312GZ-GR",
                       "MinInvst": "1000",
                       "MFtype": "MIP",
                       "Minsip": "6",
                       "date": "1,7,10,15,20,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "SBI Regular Savings Fund - Growth",
                       "ISIN": "INF200K01636",
                       "BSESchmecode": "079B",
                       "MinInvst": "1000",
                       "MFtype": "MIP",
                       "Minsip": "12",
                       "date": "1,5,10,15,20,25,30",
                       "multiplier": "100"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "HDFC Corporate Debt Opportunities Fund",
                       "ISIN": "INF179KA1GC0",
                       "BSESchmecode": "CDOGR-GR",
                       "MinInvst": "500",
                       "MFtype": "Credit Opportunities",
                       "Minsip": "12",
                       "date": "1,5,15,20,25",
                       "multiplier": "100"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Kotak Income Opportunities Fund",
                       "ISIN": "INF174K01DY7",
                       "BSESchmecode": "K190-GR",
                       "MinInvst": "1000",
                       "MFtype": "Credit Opportunities",
                       "Minsip": "6",
                       "date": "1,7,14,21,25",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "SBI Corporate Bond Fund",
                       "ISIN": "INF200K01685",
                       "BSESchmecode": "080B",
                       "MinInvst": "500",
                       "MFtype": "Credit Opportunities",
                       "Minsip": "12",
                       "date": "1,5,10,15,20,25,30",
                       "multiplier": "100"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "Birla Sun Life Corporate Bond Fund",
                       "ISIN": "INF209KA1K47",
                       "BSESchmecode": "BL380B-GR",
                       "MinInvst": "1000",
                       "MFtype": "Credit Opportunities",
                       "Minsip": "6",
                       "date": "1,7,15,20,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "Franklin India Taxshield - Growth",
                       "ISIN": "INF090I01775",
                       "BSESchmecode": "034-GR",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "6",
                       "date": "1,7,10,20,25",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "Axis Long Term Equity Fund - Growth",
                       "ISIN": "INF846K01131",
                       "BSESchmecode": "AXFTSGP-GR",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "6",
                       "date": "1-30 all days",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "Birla Sun Life Tax Relief 96 - Growth",
                       "ISIN": "INF209K01108",
                       "BSESchmecode": "02G",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "6",
                       "date": "1,7,10,14,15,21,20,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "ICICI Prudential Long Term Equity Fund (Tax Saving) - Reg - Growth",
                       "ISIN": "INF109K01464",
                       "BSESchmecode": "1",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "6",
                       "date": "1,7,15,20,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "5",
                       "SchemeName": "HDFC TAXSAVER - GROWTH OPTION",
                       "ISIN": "INF179K01BB8",
                       "BSESchmecode": "32",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "12",
                       "date": "1,5,10,15,20,25",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "6",
                       "SchemeName": "LIC MF Tax Plan - Growth",
                       "ISIN": "INF767K01956",
                       "BSESchmecode": "LCTPGP-GR",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "12",
                       "date": "1,7,10,15,25",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "7",
                       "SchemeName": "KOTAK TAX SAVER-GROWTH",
                       "ISIN": "INF174K01369",
                       "BSESchmecode": "K144TS-GR",
                       "MinInvst": "500",
                       "MFtype": "ELSS",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21,25,28",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "1",
                       "SchemeName": "Canara Robeco Gold Savings FundDirect GrowthGrowth",
                       "ISIN": "INF174K01369",
                       "BSESchmecode": "CAGSDG-GR",
                       "MinInvst": "500",
                       "MFtype": "Gold",
                       "Minsip": "6",
                       "date": "1,5,15,20,25",
                       "multiplier": "500"
                   },
                   {
                       "Rank": "2",
                       "SchemeName": "DSP BLACKROCK WORLD GOLD FUND - REGULAR PLAN - GROWTH",
                       "ISIN": "INF740K01250",
                       "BSESchmecode": "DSP179-GR",
                       "MinInvst": "500",
                       "MFtype": "Gold",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21,25,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "3",
                       "SchemeName": "Birla Sun Life Gold Fund Growth",
                       "ISIN": "INF209K01PF4",
                       "BSESchmecode": "BSL916G-GR",
                       "MinInvst": "1000",
                       "MFtype": "Gold",
                       "Minsip": "6",
                       "date": "1,7,10,14,20,21,25,28",
                       "multiplier": "1"
                   },
                   {
                       "Rank": "4",
                       "SchemeName": "ICICI Prudential Regular Gold Savings Fund Growth",
                       "ISIN": "INF109K01TK8",
                       "BSESchmecode": "ICICI1815-GR",
                       "MinInvst": "1000",
                       "MFtype": "Gold",
                       "Minsip": "6",
                       "date": "1,5,10,15,20,25",
                       "multiplier": "1"
                   }
         ]

     
    //$scope.SIP_GOAL_SHOW = false;
    //$scope.SIP_GOAL_Setting_SHOW = false;
    //$scope.SIP_GOAL_Final_SHOW = true;
    //Show Hide End *****************
    //CLCULTOR PART START FROM HERE

    function calculator(LumpSumMoney, ChildNeedMoneyYear, ChildCurrentAge) {

        //How much i have saved for our child till now

        var saveMoney = parseInt(LumpSumMoney);
        var currentCost = $rootScope.Portfolio_Parameter.TotalCourseFee;

        //When Student Need Money

        var course_yr = parseInt(ChildNeedMoneyYear);

        var exp_irate = $rootScope.Portfolio_Parameter.Portfolio_ROInflation;

        var rog = 12;

        //Current Child Age

        var txtIncomeSlider = course_yr - parseInt(ChildCurrentAge);
        var graphTwo = Number(currentCost) * Math.pow((1 + Number(exp_irate) / 100), Number(txtIncomeSlider));
        var multiplier = 1;
        future_cost = graphTwo.toFixed(0);
        var mInvst = future_cost * Number(rog / 100) / ((Math.pow((1 + Number(rog) / 100), (Number(txtIncomeSlider))) - 1) * (1 + Number(rog) / 100));

        mInvst = mInvst * multiplier;

        var oInvst = future_cost - saveMoney;
        mInvst = mInvst.toFixed(0);
        var Temp1 = parseInt(mInvst) % 1000;
        var Temp2 = 1000 - Temp1;
        mInvst = parseInt(mInvst) + Temp2;
        //Monthly Investment
        mInvst = Math.round(mInvst / 12);
        var Temp11 = parseInt(mInvst) % 1000;
        var Temp21 = 1000 - Temp11;
        mInvst = parseInt(mInvst) + Temp21;
        //if (mInvst >= 5000)
        //{
            $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = mInvst;
        //}
        //else {
        //    $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = 5000;
        //}
        
        oInvst = oInvst.toFixed(0);

        $rootScope.Portfolio_Parameter.EstematedYear = txtIncomeSlider;
        var Temp1 = parseInt(oInvst) % 1000;
        var Temp2 = 1000 - Temp1;
        oInvst = parseInt(oInvst) + Temp2;
        $rootScope.Portfolio_Parameter.CalculatedTotalMoney = oInvst;
        //document.getElementById("idlExpLifeCover").innerHTML = oInvst + '<sup style="font-size:12px;position:relative;top:-10px;"> #</sup>';

        //document.getElementById("idlExpLifeCover").value = oInvst;

        //future_cost = addCommas(future_cost);

        //document.getElementById("saving").innerHTML = future_cost;

        //document.getElementById("saving").value = future_cost;
        //if (saveMoney > Number(removeCommas(document.getElementById('saving').value))) {

        //    $('.alredysave').css({ "display": "none" });

        //    $('.savePaisa').css({ "display": "block" });

        //}

        //else {

        //    $('.alredysave').css({ "display": "block" });

        //    $('.savePaisa').css({ "display": "none" });

        //}

        //document.getElementById('needyrs').innerHTML = course_yr;
    };

    $scope.CalculateMoneyAssignToExDebt=function(CalculatedPercentage,MoneyMonthwise)
    {
        var CalculatedEquityDebtMoney = CalculateMoneyEquityDebt(CalculatedPercentage, MoneyMonthwise);
        $rootScope.Portfolio_Parameter.Equity = CalculatedEquityDebtMoney[0].Equity;
        $rootScope.Portfolio_Parameter.Debt = CalculatedEquityDebtMoney[0].Debt;
        $rootScope.Portfolio_Parameter.Gold = CalculatedEquityDebtMoney[0].Gold;
        $scope.ChartFunctionForPortFolio();
    }
    $rootScope.Portfolio_Parameter =
        {
            Portfolio_ID: "1",
            Portfolio_Name: "",
            Portfolio_Year: "0",
            Portfolio_Duration: "",
            Portfolio_FeesPerYear: "",
            Portfolio_LivingPerYear: "",
            Portfolio_LumpSumAmount: "",
            Portfolio_ROInflation: "0",
            Portfolio_ChildCurrentAge: "",
            TotalCourseFee: "",
            TotalLivingExpensesFee: "",
            TotalMonthlyInvestment: "",
            EstematedYear: "",
            CalculatedTotalMoney:""
        };
    $scope.ShowDiv = function (Number) {


        $scope.sampleStructure = [];
        var EquityLargeCpIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "EQ large cap") {
                return index;
            }
        });
        var EquityMulticapIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "EQ Multicap") {
                return index;
            }
        });
        var EquityMidSmallIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "EQ Mid/small") {
                return index;
            }
        });
        var EquityUltraSortIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Debt/ ultra short") {
                return index;
            }
        });
        
        var EquityBondIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Debt/ GILT") {
                return index;
            }
        });
        var EquityLiquidIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Debt liquid") {
                return index;
            }
        });
        var CreditOpportunitiesIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Credit Opportunities") {
                return index;
            }
        });

        var GoldIndex = $.map($scope.SIPGoalStructureDate, function (obj, index) {
            if (obj.MFtype == "Gold") {
                return index;
            }
        });
        var Fund_LargeCap_result = "";
        var Fund_LargeCap_result_Temp = "";
        var Fund_MultiCap_result = "";
        var Fund_MultiCap_result_Temp = "";
        var Fund_BondCap_result = "";
        var Fund_BondCap_result_Temp = "";
        var Fund_UltraCap_result = "";
        var Fund_UltraCap_result_Temp = "";
        var Fund_MidCap_result = "";
        var Fund_MidCap_result_Temp = "";
        var Fund_CreditOpportunity_result = "";
        var Fund_CreditOpportunity_result_Temp = "";
        var Fund_DebtLiquid_result = "";
        var Fund_DebtLiquid_result_Temp = "";
        var Fund_Gold_result = "";
        var Fund_Gold_result_Temp = "";
        var Result_Temp = [];
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap != undefined) {
             Fund_LargeCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
             Fund_LargeCap_result_Temp = Fund_LargeCap_result % 100;
             Result_Temp.push({ "SchemeType": "Large", "ModResult": Fund_LargeCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap != undefined) {
             Fund_MultiCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
             Fund_MultiCap_result_Temp = Fund_MultiCap_result % 100;
             Result_Temp.push({ "SchemeType": "Multi", "ModResult": Fund_MultiCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds != undefined) {
             Fund_BondCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
             Fund_BondCap_result_Temp = Fund_BondCap_result % 100;
             Result_Temp.push({ "SchemeType": "Bond", "ModResult": Fund_BondCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund != undefined) {
            Fund_UltraCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_UltraCap_result_Temp = Fund_UltraCap_result % 100;
            Result_Temp.push({ "SchemeType": "Ultra", "ModResult": Fund_UltraCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap != undefined) {
            Fund_MidCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_MidCap_result_Temp = Fund_MidCap_result % 100;
            Result_Temp.push({ "SchemeType": "Mid", "ModResult": Fund_MidCap_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity != undefined) {
            Fund_CreditOpportunity_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_CreditOpportunity_result_Temp = Fund_CreditOpportunity_result % 100;
            Result_Temp.push({ "SchemeType": "Credit", "ModResult": Fund_CreditOpportunity_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap != undefined) {
            Fund_DebtLiquid_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_DebtLiquid_result_Temp = Fund_DebtLiquid_result % 100;
            Result_Temp.push({ "SchemeType": "Liquid", "ModResult": Fund_DebtLiquid_result_Temp });
        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold != undefined) {
            Fund_Gold_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
            Fund_Gold_result_Temp = Fund_Gold_result % 100;
            Result_Temp.push({ "SchemeType": "Gold", "ModResult": Fund_Gold_result_Temp });
        }
        for (var a = 0; a < Result_Temp.length; a++)
        {
            if (Result_Temp[a].SchemeType == "Large") {
                if(Result_Temp[a].ModResult!="0")
                {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Large") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0"; 
                                    }

                                };
                            }
                        }
                    }
                }
               
            };
            if (Result_Temp[a].SchemeType == "Multi") {
                if (Result_Temp[a].ModResult != "0") {
                    if (Result_Temp[a].ModResult != "0") {
                        for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                            if (Result_Temp[a1].SchemeType != "Multi") {
                                if (Result_Temp[a1].ModResult != "0") {
                                    if (Result_Temp[a1].SchemeType == "Large") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result  - Result_Temp[a1].ModResult;
                                            Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Bond") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Ultra") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Mid") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Credit") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Liquid") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Gold") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_MultiCap_result = Fund_MultiCap_result - Result_Temp[a1].ModResult;
                                            Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                }
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Bond") {
                
                    if (Result_Temp[a].ModResult != "0") {
                        for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                            if (Result_Temp[a1].SchemeType != "Bond") {
                                if (Result_Temp[a1].ModResult != "0") {
                                    if (Result_Temp[a1].SchemeType == "Large") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                            Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Multi") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result =Fund_BondCap_result  - Result_Temp[a1].ModResult;
                                            Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Ultra") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                            Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Mid") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                            Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Credit") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                            Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Liquid") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                            Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                    if (Result_Temp[a1].SchemeType == "Gold") {
                                        if (Result_Temp[a1].ModResult != "0") {
                                            Fund_BondCap_result = Fund_BondCap_result - Result_Temp[a1].ModResult;
                                            Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                            Result_Temp[a1].ModResult = "0";
                                        }

                                    };
                                }
                            }
                        }
                    }
                

            };
            if (Result_Temp[a].SchemeType == "Ultra") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Ultra") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result =Fund_UltraCap_result  - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_UltraCap_result = Fund_UltraCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Mid") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Mid") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result =Fund_MidCap_result  - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_MidCap_result = Fund_MidCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
            if (Result_Temp[a].SchemeType == "Credit") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Credit") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result =Fund_CreditOpportunity_result  - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };

            if (Result_Temp[a].SchemeType == "Liquid") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Liquid") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_LargeCap_result = Fund_LargeCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_MultiCap_result = Fund_MultiCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_BondCap_result = Fund_BondCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_UltraCap_result = Fund_UltraCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_MidCap_result = Fund_MidCap_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_CreditOpportunity_result = Fund_CreditOpportunity_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Gold") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };

            if (Result_Temp[a].SchemeType == "Gold") {
                if (Result_Temp[a].ModResult != "0") {
                    for (var a1 = 0; a1 < Result_Temp.length; a1++) {
                        if (Result_Temp[a1].SchemeType != "Gold") {
                            if (Result_Temp[a1].ModResult != "0") {
                                if (Result_Temp[a1].SchemeType == "Large") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Multi") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Bond") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Ultra") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Mid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Credit") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_DebtLiquid_result = Fund_DebtLiquid_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                                if (Result_Temp[a1].SchemeType == "Liquid") {
                                    if (Result_Temp[a1].ModResult != "0") {
                                        Fund_LargeCap_result = Fund_LargeCap_result - Result_Temp[a1].ModResult;
                                        Fund_Gold_result = Fund_Gold_result + Result_Temp[a1].ModResult;
                                        Result_Temp[a1].ModResult = "0";
                                    }

                                };
                            }
                        }
                    }
                }

            };
        }

        var ValueMinAmountTemp = [];
        //Equity Large Cap
        var TempAmount = "";
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap != undefined)
        {
            //Fund_LargeCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);

            for(var a=0;a<EquityLargeCpIndex.length;a++)
            {
                if(Fund_LargeCap_result>$scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].MinInvst)
                {

                    if ((Fund_LargeCap_result % $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].multiplier) == 0)
                    {
                        
                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityLargeCpIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_LargeCap_result

                        });
                        break;
                    }

                   
                   
                }
            }

        }
       
        //Equity Mid Cap
       
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap != undefined) {
            //Fund_MultiCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityMulticapIndex.length; a++) {
                if (Fund_MultiCap_result > $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].MinInvst) {

                    if ((Fund_MultiCap_result % $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityMulticapIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_MultiCap_result

                        });
                        break;
                    }



                }
            }

        }

        //Bonds Fund
        
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds != undefined) {
            //Fund_BondCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityBondIndex.length; a++) {
                if (Fund_BondCap_result > $scope.SIPGoalStructureDate[EquityBondIndex[a]].MinInvst) {

                    if ((Fund_BondCap_result % $scope.SIPGoalStructureDate[EquityBondIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityBondIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[EquityBondIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityBondIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_BondCap_result

                        });
                        break;
                    }



                }
            }

        }
        //Ultry Sort Fund
        
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund != undefined) {
            //Fund_UltraCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityUltraSortIndex.length; a++) {
                if (Fund_UltraCap_result > $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].MinInvst) {

                    if ((Fund_UltraCap_result % $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].BSESchmecode,
                            "ISIN":     $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_UltraCap_result

                        });
                        break;
                    }



                }
            }

        }

        //Mid Fund
        
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap != undefined) {
            //Fund_MidCap_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < EquityMidSmallIndex.length; a++) {
                if (Fund_MidCap_result > $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].MinInvst) {

                    if ((Fund_MidCap_result % $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].BSESchmecode,
                            "ISIN":       $scope.SIPGoalStructureDate[EquityMidSmallIndex[a]].ISIN,
                            "Date":       $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityUltraSortIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount":     Fund_MidCap_result

                        });
                        break;
                    }



                }
            }

        }


        //Credit Opportunity
        
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity != undefined) {
            //Fund_CreditOpportunity_result = parseInt(($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity / 100) * $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);

            for (var a = 0; a < CreditOpportunitiesIndex.length; a++) {
                if (Fund_CreditOpportunity_result > $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].MinInvst) {

                    if ((Fund_CreditOpportunity_result % $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[CreditOpportunitiesIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_CreditOpportunity_result

                        });
                        break;
                    }



                }
            }

        }

        //Liquid Fund
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap != undefined) {
           

            for (var a = 0; a < EquityLiquidIndex.length; a++) {
                if (Fund_DebtLiquid_result > $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].MinInvst) {

                    if ((Fund_DebtLiquid_result % $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[EquityLiquidIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_DebtLiquid_result

                        });
                        break;
                    }



                }
            }

        }

        //Gold Fund
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold != undefined) {


            for (var a = 0; a < GoldIndex.length; a++) {
                if (Fund_Gold_result > $scope.SIPGoalStructureDate[GoldIndex[a]].MinInvst) {

                    if ((Fund_Gold_result % $scope.SIPGoalStructureDate[GoldIndex[a]].multiplier) == 0) {

                        $scope.sampleStructure.push({
                            "SchemeName": $scope.SIPGoalStructureDate[GoldIndex[a]].SchemeName,
                            "SchemeCode": $scope.SIPGoalStructureDate[GoldIndex[a]].BSESchmecode,
                            "ISIN": $scope.SIPGoalStructureDate[GoldIndex[a]].ISIN,
                            "Date": $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1] == '1-30 all days' ? $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1] : $scope.SIPGoalStructureDate[GoldIndex[a]].date.split(',')[parseInt(Number) - 1],
                            "Amount": Fund_Gold_result

                        });
                        break;
                    }



                }
            }

        }



        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LargeCap != undefined)
        {

        }


        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MultiCap != undefined)
        {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_BondFunds != undefined)
        {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_UltraSortFund != undefined)
        {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_MidCap != undefined)
        {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_CreditOpportunity != undefined)
        {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_LiquidCap != undefined)
        {

        }
        if ($scope.CalculatedPercentage.Data[0].Fund[0].Fund_Gold != undefined)
        {

        }
        var tesmpArray = [];
        for (var a = 0; a < $scope.sampleStructure.length; a++)
        {
            if (parseInt($scope.sampleStructure[a].Amount) % 500 != 0)
            {
                tesmpArray.push(
                               {
                                   "RemainingAmount": parseInt($scope.sampleStructure[a].Amount) % 500,
                                   "ISIN": $scope.sampleStructure[a].ISIN
                               }
                );
            }
            //var Temp2 = 500 - Temp1;
            //mInvst = parseInt(mInvst) + Temp2;
        }

        
        tesmpArray.sort(function (a, b) {
            return a.RemainingAmount;
        })
        console.log(tesmpArray);
       // $scope.sampleStructure.sort();


        //console.log(EquityLargeCpIndex)
        $scope.weekNo = "Week " + Number;
        if (Number == "1") {

            $scope.WeekClass = "offer offer-warning";

        }
        else if (Number == "2") {
            $scope.WeekClass = "offer offer-radius offer-danger";
        }
        else if (Number == "3") {
            $scope.WeekClass = "offer offer-radius offer-primary";
        }
        else {
            $scope.WeekClass = "offer offer-info";
        }
    };
    $scope.Child_NoGoalYear = {
        "ChildYear": [{
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
    $scope.Portfolio_Calculate = function (Type) {
        $scope.Global_Message = "";
        if (Type == undefined)
        {
            $rootScope.Portfolio_Parameter.TotalCourseFee = (parseInt($rootScope.Portfolio_Parameter.Portfolio_LivingPerYear) + parseInt($rootScope.Portfolio_Parameter.Portfolio_FeesPerYear)) * ($rootScope.Portfolio_Parameter.Portfolio_Duration);

            calculator($rootScope.Portfolio_Parameter.Portfolio_LumpSumAmount, $rootScope.Portfolio_Parameter.Portfolio_Year, $rootScope.Portfolio_Parameter.Portfolio_ChildCurrentAge);

            $rootScope.Portfolio_Parameter.TotalLivingExpensesFee = parseInt($rootScope.Portfolio_Parameter.Portfolio_LivingPerYear) * ($rootScope.Portfolio_Parameter.Portfolio_Duration);

            $scope.SIP_GOAL_SHOW = false;
            $scope.SIP_GOAL_Setting_SHOW = true;
        }
        else {
            calculator($rootScope.Portfolio_Parameter.Portfolio_LumpSumAmount, $rootScope.Portfolio_Parameter.Portfolio_Year, $rootScope.Portfolio_Parameter.Portfolio_ChildCurrentAge);
        }
        
    };
    $scope.Portfolio_Final = function () {
      
        $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($rootScope.Portfolio_Parameter.EstematedYear, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
        $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
        //if ($rootScope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
        //{
            $scope.SIP_GOAL_SHOW = false;
            $scope.SIP_GOAL_Setting_SHOW = false;
            $scope.SIP_GOAL_Final_SHOW = true;
            $scope.ShowDiv("1");
        //}
        //else {
        //    $scope.Global_Message = "Amount Should be greate than 2500 your SIP amount is " + $rootScope.Portfolio_Parameter.TotalMonthlyInvestment +". Please select heigher amount";
        //    $scope.SIP_GOAL_SHOW = true;
        //    $scope.SIP_GOAL_Setting_SHOW = false;
        //    $scope.SIP_GOAL_Final_SHOW = false;
        //}
       
    };

    $scope.InvestNow = function (From) {
        if ($localStorage.ChildState )
        {
            if ($localStorage.LoginStatus)
            {
                $scope.SIP_GOAL_SHOW = false;
                $scope.SIP_GOAL_Setting_SHOW = false;
                $scope.SIP_GOAL_Final_SHOW = true;

                $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

                var CreateUserList = FundsService.CreatePlan.PostPromise($localStorage.POstJson);
                CreateUserList.then(
                // OnSuccess function
                function (answer) {
                    HideLoader();
                    window.location = "../../../Webform/User/dist/index.html"
                    if (answer.UserRegistrationResult.ResponseCode == "0") {

                    }

                    $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;


                },
                // OnFailure function
                function (reason) {
                    HideLoader();
                    $scope.ErrorMessage = answer.UserRegistrationResult.ResponseMessage;
                    //$scope.somethingWrong = reason;
                    //$scope.error = true;
                }
              )

            }
            else {
                $localStorage.POstJson = {
                    "User_ID": "",
                    "userPlan": {
                        "MasterPlan_ID": $rootScope.Portfolio_Parameter.Portfolio_ID,
                        "Goal": $rootScope.Portfolio_Parameter.Portfolio_Name,
                        "CurrentAge": $rootScope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                        "CourseTime": $rootScope.Portfolio_Parameter.Portfolio_Year,
                        "CourseDuration": $rootScope.Portfolio_Parameter.Portfolio_Duration,
                        "CourseFeePerYear": $rootScope.Portfolio_Parameter.Portfolio_FeesPerYear,
                        "LivingCostPerYear": $rootScope.Portfolio_Parameter.Portfolio_LivingPerYear,
                        "SavedAmount_Lumpsum": $rootScope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                        "InflationRate": $rootScope.Portfolio_Parameter.Portfolio_ROInflation,
                        "TotalCourseFees": $rootScope.Portfolio_Parameter.TotalCourseFee,
                        "TotalLivingExpanses": $rootScope.Portfolio_Parameter.TotalLivingExpensesFee,
                        "TotalAmount": $rootScope.Portfolio_Parameter.CalculatedTotalMoney,
                        "TotalLumpsumAmount": $rootScope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                        "EstimatedInflationRate": $rootScope.Portfolio_Parameter.Portfolio_ROInflation
                    },
                    "userPortfolio": {
                        "Equity": $rootScope.Portfolio_Parameter.Equity,
                        "Debt": $rootScope.Portfolio_Parameter.Debt,
                        "EstimatedTotalSIPAmt": $rootScope.Portfolio_Parameter.TotalMonthlyInvestment,
                        "Scheme_IDs": "1,2,3"
                    }
                };
                $state.go('Authentication', { From: 'ChildPlan' });
            }

            console.log($rootScope.Portfolio_Parameter)
        }
        else if (From != undefined) {
            if ($localStorage.LoginStatus) {
                $localStorage.POstJson.User_ID = $localStorage.UserDetails.LoginID;

            }
            else {
                $localStorage.POstJson = {
                    "User_ID": "",
                    "userPlan": {
                        "MasterPlan_ID": $rootScope.Portfolio_Parameter.Portfolio_ID,
                        "Goal": $rootScope.Portfolio_Parameter.Portfolio_Name,
                        "CurrentAge": $rootScope.Portfolio_Parameter.Portfolio_ChildCurrentAge,
                        "CourseTime": $rootScope.Portfolio_Parameter.Portfolio_Year,
                        "CourseDuration": $rootScope.Portfolio_Parameter.Portfolio_Duration,
                        "CourseFeePerYear": $rootScope.Portfolio_Parameter.Portfolio_FeesPerYear,
                        "LivingCostPerYear": $rootScope.Portfolio_Parameter.Portfolio_LivingPerYear,
                        "SavedAmount_Lumpsum": $rootScope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                        "InflationRate": $rootScope.Portfolio_Parameter.Portfolio_ROInflation,
                        "TotalCourseFees": $rootScope.Portfolio_Parameter.TotalCourseFee,
                        "TotalLivingExpanses": $rootScope.Portfolio_Parameter.TotalLivingExpensesFee,
                        "TotalAmount": $rootScope.Portfolio_Parameter.CalculatedTotalMoney,
                        "TotalLumpsumAmount": $rootScope.Portfolio_Parameter.Portfolio_LumpSumAmount,
                        "EstimatedInflationRate": $rootScope.Portfolio_Parameter.Portfolio_ROInflation
                    },
                    "userPortfolio": {
                        "Equity": $rootScope.Portfolio_Parameter.Equity,
                        "Debt": $rootScope.Portfolio_Parameter.Debt,
                        "EstimatedTotalSIPAmt": $rootScope.Portfolio_Parameter.TotalMonthlyInvestment,
                        "Scheme_IDs": "1,2,3"
                    }
                };
                $state.go('Authentication', { From: 'ChildPlan' });
            }
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

    $scope.ListOfInvestmentPortfolio = [{
        "SchemeName": "IDFB Debt",
        "Amount":"2000"
    },
    {
        "SchemeName": "SBI Bluechip Fund - Growth",
        "Amount": "1000"
    }, {
        "SchemeName": "ICICI Prudential Value Discovery Fund - Growth",
        "Amount": "2000"
    }, {
        "SchemeName": "IDFB Debt",
        "Amount": "2000"
    }]
    $scope.InvestNowPortFolio = {
        chart: {
            caption: "Investment Plan For You",
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
            //centerLabel: "Revenue from $label: $value",
            //plottooltext: "Investment of : $label will be : $datavalue%",
            theme: "fint"
        },
        data: [
            {
                label: "Equity",
                value: $scope.EquityPercentage
            },
            {
                label: "Debt",
                value: $scope.DebtPercentage
            }
        ]
    }

    $scope.ChangePortfolioAmount=function(From,Page)
    {
        if (Page == undefined)
        {

            
            if (From == 'M') {
                if (parseInt($rootScope.Portfolio_Parameter.TotalCourseFee) > 1000) {
                    $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($rootScope.Portfolio_Parameter.TotalMonthlyInvestment) - 1000;
                    //$scope.Portfolio_Calculate("ChnageAmount");
                    $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($rootScope.Portfolio_Parameter.EstematedYear, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment, $rootScope.Portfolio_Parameter.Risk);
                    $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
                    //$rootScope.Portfolio_Parameter.TotalMonthlyInvestment = $rootScope.Portfolio_Parameter.TotalMonthlyInvestment - 1000;
                    $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
                    $scope.ShowDiv("1");
                }
                else {
                    alert("You can not have less than 1000 Rupees");
                }
            }

            else {
                $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($rootScope.Portfolio_Parameter.TotalMonthlyInvestment) + 1000;
                //$scope.Portfolio_Calculate("ChnageAmount");
                $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($rootScope.Portfolio_Parameter.EstematedYear, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment, $rootScope.Portfolio_Parameter.Risk);
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
                //$rootScope.Portfolio_Parameter.TotalMonthlyInvestment = $rootScope.Portfolio_Parameter.TotalMonthlyInvestment + 1000;
                $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
                $scope.ShowDiv("1");
            }
        }
        else {
           
            if (From == 'M') {
                if (parseInt($rootScope.Portfolio_Parameter.TotalMonthlyInvestment) > 1000)
                {
                    $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt($rootScope.Portfolio_Parameter.TotalMonthlyInvestment) - parseInt(1000);
                    $scope.SIPClick();
                }
                else {
                    alert("You can not have less than 1000 Rupees");
                }
               
                //////$scope.Portfolio_Calculate("ChnageAmount");
                ////////$rootScope.Portfolio_Parameter.TotalMonthlyInvestment = $rootScope.Portfolio_Parameter.TotalMonthlyInvestment - 1000;
                //////$scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
                
            }

            else {
                $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = parseInt( $rootScope.Portfolio_Parameter.TotalMonthlyInvestment) + parseInt( 1000);
                $scope.SIPClick();
            }
        }
      
     
    }

    $scope.ChartFunctionForPortFolio=function()
    {
        
        $scope.InvestNowPortFolio = {
            chart: {
                caption: "Investment Plan For You",
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
                //centerLabel: "Revenue from $label: $value",
                //plottooltext: "Investment of : $label will be : $datavalue%",
                theme: "fint"
            },
            data: [
                {
                    label: "Equity",
                    value: $rootScope.Portfolio_Parameter.Equity
                },
                {
                    label: "Debt",
                    value: $rootScope.Portfolio_Parameter.Debt
                }
            ]
        }
    }

   

    $scope.InvestNow();
    HideLoader();
    //****************************Start SIP**************************************
    $scope.StartSIP_Step1 = true;
    $scope.StartSIP_Step2 = false;
    $scope.StartSIPArray = [];
    
    $rootScope.SIPClick = function () {



        $scope.CalculatedPercentage = Chield_CalculatePortfolioAllocation($rootScope.Portfolio_Parameter.EstematedYear, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment, $rootScope.Portfolio_Parameter.Risk);
        $scope.CalculateMoneyAssignToExDebt($scope.CalculatedPercentage, $rootScope.Portfolio_Parameter.TotalMonthlyInvestment);
        //if ($rootScope.Portfolio_Parameter.TotalMonthlyInvestment >= 2500)
        //{
        $scope.StartSIP_Step1 = false;
        $scope.StartSIP_Step2 = true;
        $scope.EasySIP_Step1 = false;
        $scope.EasySIP_Step2 = true;
        $scope.ShowDiv("1");
    };
   
    
    $scope.show_next = function (id, nextid, bar,typeValue) {
        $scope.StartSIPArray.push({
            "Key": id,
            "Value": typeValue
        });
        if (id == "InvestedYear") {
            $rootScope.Portfolio_Parameter.EstematedYear = typeValue;
        }
        if (id == "Risk") {
            $rootScope.Portfolio_Parameter.Risk = typeValue;
        }
        if (id == "Money") {
            $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = typeValue;
        }
        document.getElementById("Year").style.display = "none";
        document.getElementById("Money").style.display = "none";
        document.getElementById("Risk").style.display = "none";
        //document.getElementById("Investment").style.display = "none";
        document.getElementById("InvestedYear").style.display = "none";
        $("#" + nextid).fadeIn();
        document.getElementById(bar).style.backgroundColor = "rgba(102,0,51,1)";
        if(id=="InvestedYear")
        {
            $scope.StartSipInvestNowBtn = true;
            $scope.StartSIPClick();
        }
    };

    $scope.show_prev=function(previd, bar) {
        document.getElementById("account_details").style.display = "none";
        document.getElementById("user_details").style.display = "none";
        document.getElementById("qualification").style.display = "none";
        $("#" + previd).fadeIn();
        document.getElementById(bar).style.backgroundColor = "#D8D8D8";
    }
  

    //****************************Easy SIP**************************************
    $scope.EasySIP_Step1 = true;
    $scope.EasySIP_Step2 = false;
    $scope.StartSipPopup = function () {
        $rootScope.InvestmtntValue = $scope.Investment;
        $mdDialog.show({
            controller: StartSipDetailsCtrl,
            templateUrl: '../../../Webform/Common/Popup/StartSipPopup.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };
    function StartSipDetailsCtrl($scope, $mdDialog) {
        $scope.StartSipPopupLlDb = $rootScope.InvestmtntValue;
        $scope.FundsDetails = $rootScope.FundsDetailsData;


        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
        $scope.EasySIPClick=function()
        {
            $rootScope.Portfolio_Parameter.EstematedYear = $scope.StartSipPopupLlDb.horizone;
            $rootScope.Portfolio_Parameter.TotalMonthlyInvestment = $scope.StartSipPopupLlDb.MonthllyInvestment;
            $rootScope.Portfolio_Parameter.Risk = $scope.StartSipPopupLlDb.risk;
            $mdDialog.cancel();
            $rootScope.SIPClick();
        }
    }

    
}]);