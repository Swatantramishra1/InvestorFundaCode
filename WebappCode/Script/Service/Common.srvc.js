
    angular.module("app.ctrls", []).service('CommonSrvc', ['$http', '$q', function ($http, $q) {
        var deferObject,
        GetCountryDetails = {

            getPromise: function () {
                var promise = $http.get(API_GetCountryDetails),
                      deferObject = deferObject || $q.defer();

                promise.then(
                  // OnSuccess function
                  function (answer) {
                      // This code will only run if we have a successful promise.
                      deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function (reason) {
                      // This code will only run if we have a failed promise.
                      deferObject.reject(reason);
                  });

                return deferObject.promise;
            }
        };
        GetStateDetails = {

            getPromise: function () {
                var promise = $http.get(API_GetStateDetails),
                      deferObject = deferObject || $q.defer();

                promise.then(
                  // OnSuccess function
                  function (answer) {
                      // This code will only run if we have a successful promise.
                      deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function (reason) {
                      // This code will only run if we have a failed promise.
                      deferObject.reject(reason);
                  });

                return deferObject.promise;
            }
        };
        GetCityDetails = {

            getPromise: function () {
                var promise = $http.get(API_GetCityDetails),
                      deferObject = deferObject || $q.defer();

                promise.then(
                  // OnSuccess function
                  function (answer) {
                      // This code will only run if we have a successful promise.
                      deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function (reason) {
                      // This code will only run if we have a failed promise.
                      deferObject.reject(reason);
                  });

                return deferObject.promise;
            }
        };
        GetTaxStatus = {

            getPromise: function () {
                var promise = $http.get(API_GetTaxStatus),
                      deferObject = deferObject || $q.defer();

                promise.then(
                  // OnSuccess function
                  function (answer) {
                      // This code will only run if we have a successful promise.
                      deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function (reason) {
                      // This code will only run if we have a failed promise.
                      deferObject.reject(reason);
                  });

                return deferObject.promise;
            }
        };
        GetSourceOfWealth = {

            getPromise: function () {
                var promise = $http.get(API_GetSourceOfWealth),
                      deferObject = deferObject || $q.defer();

                promise.then(
                  // OnSuccess function
                  function (answer) {
                      // This code will only run if we have a successful promise.
                      deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function (reason) {
                      // This code will only run if we have a failed promise.
                      deferObject.reject(reason);
                  });

                return deferObject.promise;
            }
        };
        HoldingNature = {

            getPromise: function () {
                var promise = $http.get(API_HoldingNature),
                      deferObject = deferObject || $q.defer();

                promise.then(
                  // OnSuccess function
                  function (answer) {
                      // This code will only run if we have a successful promise.
                      deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function (reason) {
                      // This code will only run if we have a failed promise.
                      deferObject.reject(reason);
                  });

                return deferObject.promise;
            }
        };

        return {
            GetCountryDetails: GetCountryDetails,
            GetStateDetails: GetStateDetails,
            GetCityDetails: GetCityDetails,
            GetTaxStatus: GetTaxStatus,
            GetSourceOfWealth: GetSourceOfWealth,
            HoldingNature: HoldingNature

        };

    }]);
