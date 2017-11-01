(function(){
  angular
    .module('friendsList')
    .controller('mainCtrl',mainCtrl);
  
  function mainCtrl(){
      var vm = this;

      vm.friendPusher = friendPusher; 
      vm.friends = ['John','Jacob','Hodor','Sue'];

      function friendPusher(newFriendship){
        vm.friends.push(newFriendship);
        vm.newFriend= ""
      }
    
    }
})()
