
angular.module('hotOrNot').controller('NewVotableEntController', function ($scope, $location, locationParser, flash, VotableEntResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.votableEnt = $scope.votableEnt || {};
    
    $scope.entityTypeList = [
        "CELEB",
        "VEHICLE"
    ];
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The votableEnt was created successfully.'});
            $location.path('/VotableEnts');
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        VotableEntResource.save($scope.votableEnt, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/VotableEnts");
    };
});