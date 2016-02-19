angular.module('hotOrNot').factory('VotableEntResource', function($resource){
    var resource = $resource('rest/votableents/:VotableEntId',{VotableEntId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});