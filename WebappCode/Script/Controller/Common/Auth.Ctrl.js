/// <reference path="../../../Webform/User/dist/index.html" />
/// <reference path="../../User/Form/dist/index.html" />
app.controller("AuthCtrl", ['$scope', '$rootScope', 'ULoginService', '$localStorage', '$stateParams', '$state', function ($scope, $rootScope, ULoginService, $localStorage, $stateParams, $state) {
    $scope.user = {
        username: '',
        password: ''
    };
   
    $scope.Register = {
        FirstName: '',
        LastName: '',
        PanCard: '',
        Email: '',
        Password: '',
        mobileno: '',
    };
    
    $scope.Login_All = function () {
        ShowLoader();
        var askForPromise = ULoginService.LoginUser.getPromise($scope.user.username, $scope.user.password);
        askForPromise.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
            if (answer.data.GetLoginResult.ResponseCode == 0)
            {
                $localStorage.LoginStatus = true;
                $rootScope.LoginStatus = true;
                $localStorage.UserDetails = answer.data.GetLoginResult.Result;
                $rootScope.UserDetails = answer.data.GetLoginResult.Result;
                if ($state.params.From == 'ChildPlan')
                {
                    $localStorage.ChildState = true;
                    $state.go('ChildGoal');
                }
                else {
                    
                    window.location = "../../../Webform/User/dist/index.html"
                }
          
            }
            else {
                $scope.ErrorMessage = answer.data.GetLoginResult.ResponseMessage;
                $localStorage.LoginStatus = false;
                $rootScope.LoginStatus = false;
            }
            
        },
        // OnFailure function
        function (reason) {
            HideLoader();
            $scope.ErrorMessage = answer.data.GetLoginResult.ResponseMessage;
            //$scope.somethingWrong = reason;
            //$scope.error = true;
        }
      )
       
    }

    $scope.RegistrationFun = function () {
        var PostDataReq =
            {
                "request": 
                   {
                      
                "UR_First_Name":$scope.Register.FirstName,
                "UR_Middle_Name":"",
                "UR_Surname":$scope.Register.LastName,
                "UR_PanCardNo":$scope.Register.PanCard,
                "UR_Password":$scope.Register.Password,
                "UR_Gender":$scope.Register.Gender,
                "UR_Email":$scope.Register.Email,
                "UR_Mobile":$scope.Register.mobileno,
                "UR_Phone":"",
                "UR_Howdidyou":"",
                "UR_Comments":"",
                "UR_TaxStatus_ID":"",
                "UR_DOB":"",
                "UR_SourceOfWealth_ID":"",
                "UR_Ocucupation_ID":"",
                "UR_Income":"",
                "UR_HoldingNature_ID":""
                   }
                
            };

        ShowLoader();
        var askForPromise = ULoginService.Register.PostPromise(PostDataReq);
        askForPromise.then(
        // OnSuccess function
        function (answer) {
            HideLoader();
            if (answer.UserRegistrationResult.ResponseCode == "0") {
                $localStorage.IsComplete = "1";
                window.location = "../../../Webform/User/dist/index.html"
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
    };

    $scope.ForgotPassWordStep1 = function () {
        $scope.ForgotPasswordDiv = true;
        $scope.ForgotPasswordDiv2 = true;
        $scope.ForgotPasswordDivPassEnter = false;
    };

    $scope.ForgotPassWordStep2 = function () {
        $scope.ForgotPasswordDiv = true;
        $scope.ForgotPasswordDiv2 = false;
        $scope.ForgotPasswordDivPassEnter = true;

    };
    $scope.ChangePassword = function () {
        $scope.ForgotPasswordDiv = false;
        $scope.ForgotPasswordDiv2 = false;
        $scope.ForgotPasswordDivPassEnter = false;
    };
}]);