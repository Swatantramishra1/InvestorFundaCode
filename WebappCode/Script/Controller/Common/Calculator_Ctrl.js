app.controller("Calculator_Ctrll", ['$scope', '$rootScope', '$mdDialog', '$mdMedia', function ($scope, $rootScope, $mdDialog, $mdMedia) {
    $scope.OpenPopup = function (HeaderText) {
        $scope.Popup_Header = HeaderText;
    };

    //**********************SIP Calculator Start***********************************************************
    $scope.SIP_Expetation = "15";
    $scope.CalculatorFunction_SIP = function () {
        var Temp_Result = $("#SIP_Target").val() / $("#SIP_NOM").val();
        var Temp_ResultPercentage = (Temp_Result * ($("#SIP_Expetation").val() / 100)).toFixed(2);
        var FinalResult = Temp_Result - Temp_ResultPercentage;
        $scope.CalculatedAmount = FinalResult.toFixed(2);
        $scope.CalculateDiv_Show = true;
    };
    $scope.ResetCalculatorFunction_SIP = function () {
        $("#SIP_Target").val('');
        $("#SIP_NOM").val('');
        $("#SIP_Expetation").val('15');
        $scope.CalculateDiv_Show = false;
    };

}]);