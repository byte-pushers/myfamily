myFamilyApp.service('UserProfileService', function() {
	var userList = [];

    function getUserList(){
        return userList;
    }

    function addUser(user) {
        userList.push(user);
    }

    return {
            getUserList : getUserList,
            addUser: addUser
    };
});