

angular.module('hotOrNot').controller('EditVotableEntController', function($scope, $routeParams, $location, flash, VotableEntResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.votableEnt = new VotableEntResource(self.original);
        };
        var errorCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The votableEnt could not be found.'});
            $location.path("/VotableEnts");
        };
        VotableEntResource.get({VotableEntId:$routeParams.VotableEntId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.votableEnt);
    };

    $scope.save = function() {
        var successCallback = function(){
            flash.setMessage({'type':'success','text':'The votableEnt was updated successfully.'}, true);
            $scope.get();
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        $scope.votableEnt.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/VotableEnts");
    };

    $scope.remove = function() {
        var successCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The votableEnt was deleted.'});
            $location.path("/VotableEnts");
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        }; 
        $scope.votableEnt.$remove(successCallback, errorCallback);
    };
    
    $scope.entityTypeList = [
        "CELEB",  
        "VEHICLE"  
    ];
    
    $scope.get();
});