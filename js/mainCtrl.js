angular.module('friendsList').controller('mainCtrl',function($scope){

  this.test = "testy";

  this.friends = ['John','Jacob','Hodor','Sue'];
  this.friendPusher = function(newFriendship){
    this.friends.push(newFriendship);
    this.newFriend= ""
  }

});
