

app.service('FundsService', ['$http', '$q', function ($http, $q) {
    var deferObject,
    FundsList = {

        getPromise: function (AmcCode,CategoryCode,SchemeOption) {
            var promise = $http.get(API_ListingFunds + AmcCode + '/' + CategoryCode + '/' + SchemeOption + '?responsetype=json'),
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
    FundsDetails = {

        getPromise: function (SchemeID) {
            var promise = $http.get(API_SchemeDetails + SchemeID + '?responsetype=json'),
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
    FundsHouse = {
        getPromise: function () {
            var promise = $http.get(API_Fundhouse),
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
    FundCategoryEQUITY = {
        getPromise: function () {
            var promise = $http.get(API_FundCategoryEQUITY),
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
    FundCategoryHybrid = {
        getPromise: function () {
            var promise = $http.get(API_FundCategoryHybrid),
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
    FundCategoryDebt = {
        getPromise: function () {
            var promise = $http.get(API_FundCategoryDebt),
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
    FundAssetAllocation = {
        getPromise: function (Scheme_ID) {
            var promise = $http.get(API_AssetAllocation + Scheme_ID + '?responsetype=json'),
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
    FundTopHolding = {
        getPromise: function (Scheme_ID) {
            var promise = $http.get(API_TopHolding + Scheme_ID + '?responsetype=json'),
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
    CreatePlan = {

        PostPromise: function (PostData) {
            deferObject = deferObject || $q.defer();
            $.ajax({
                url: API_Post_CreateUsersPlan,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(PostData),
                processData: false,
                async: false,
                success: function (data, textStatus, jQxhr) {
                    deferObject.resolve(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    deferObject.reject(errorThrown);
                }
            });
            return deferObject.promise;
        }

    }
    return {
        FundsList: FundsList,
        FundsDetails: FundsDetails,
        FundsHouse: FundsHouse,
        FundCategoryEQUITY: FundCategoryEQUITY, 
        FundCategoryHybrid: FundCategoryHybrid,
        FundCategoryDebt: FundCategoryDebt,
        FundAssetAllocation: FundAssetAllocation,
        FundTopHolding: FundTopHolding,
        CreatePlan: CreatePlan
    };

}]);