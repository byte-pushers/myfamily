var $rootScope = {};
var $httpBackend, requestHandler;
describe('person test', function () {
    beforeEach(module('myFamilyApp'));
    beforeEach(function () {
            inject(function($controller){
                $controller('createUserController',{$scope:$rootScope});
            });
        });

    it('can create empty person', function () {
        var person = new Person();
        expect(person).toBeDefined();
    });
    it('defines the controller object', function () {
        expect($rootScope.personUIObject).toBeDefined();
    });
    it('defines a populated person', function (){
        var phoneNumberConfig = {type: "PRIMARY", country: "UNITED_STATES", areaCode: "940", exchangeCode: "368", localNumber: "7410"};
        var addressConfig = {type: "PRIMARY", street1: "1004 West Oak", street2: null, city: "denton", state: "TEXAS", zip: "76201", country: "UNITED_STATES"};
        var number = new PhoneNumber(phoneNumberConfig);
        var address = new Address(addressConfig);

        var personConfig = {
           id : null,
           firstName : "Jared",
           middleName : null,
           lastName : "Ramirez",
           username : "jaredramirez",
           password : "password123",
           passwordConfirm : "password123",
           birthDate : new Date("1997-03-30"),
           phoneNumbers : [number],
           addresses : [address],
           gender: "MALE"
        };

        var person = new Person(personConfig);
        var personUIObject = person.toUIObject();
        var phoneArray = person.getPhoneNumbers();
        var addressArray = person.getAddresses();


        expect(person.getFirstName()).toEqual(personUIObject.firstName);
        expect(person.getMiddleName()).toEqual(personUIObject.middleName);
        expect(person.getLastName()).toEqual(personUIObject.lastName);
        expect(person.getUsername()).toEqual(personUIObject.username);
        expect(person.getPassword()).toEqual(personUIObject.password);
        expect(person.getBirthDate().getFullYear()+ "-" + person.getBirthDate().getMonth() + "-" +person.getBirthDate().getDate()).toEqual(personUIObject.birthDate);
        expect(phoneArray[0].getConfig()).toEqual(personUIObject.phoneNumbers[0]);
        expect(addressArray[0].getConfig()).toEqual(personUIObject.addresses[0]);
        expect(person.getGender()).toEqual(personUIObject.gender);
    });
});


/*
describe('person test', function () {
    beforeEach(module('myFamilyApp'));
    beforeEach(function () {
        inject(function($controller){
            $controller('createUserController',{$scope:$rootScope});
        });
        inject(function(UserProfileService, _$httpBackend_){
            service = UserProfileService;
            $httpBackend = _$httpBackend_;
        });
    });

    it('can create user profile', function () {
        $rootScope.personUIObject.id = null;
        $rootScope.personUIObject.firstName = "Jared";
        $rootScope.personUIObject.middleName = null;
        $rootScope.personUIObject.lastName = "Ramirez";
        $rootScope.personUIObject.username = "jaredramirez";
        $rootScope.personUIObject.password = "password123";
        $rootScope.personUIObject.passwordConfirm = "password123";
        $rootScope.personUIObject.birthDate = new Date("2015-03-30");
        $rootScope.personUIObject.city = "Denton";
        $rootScope.personUIObject.state = "TEXAS";
        $rootScope.personUIObject.zip = "76201";
        $rootScope.personUIObject.country = "UNITED_STATES";
        $rootScope.personUIObject.phoneNumbers[0] = (new PhoneNumber(country= "UNITED_STATES", areaCode= "940", exchangeCode= "368", localNumber= "7410"));
        $rootScope.personUIObject.addresses[0] = (new Address(street1= "W Oak", street2= null, city= "D-Town", state= "TEXAS", zip= "12345", country= "UNITED_STATES"));
        $rootScope.personUIObject.gender= "MALE";

        $httpBackend.when('POST', 'http://localhost:8080/person-profile-ws/user-profile/newUser.json').respond([{
            id : null,
            firstName : "Jared",
            middleName : null,
            lastName : "Ramirez",
            username : "jaredramirez",
            password : "password123",
            passwordConfirm : "password123",
            birthDate : new Date("2015-03-30"),
            city : "Denton",
            state : "TEXAS",
            zip : "76201",
            country : "UNITED_STATES",
            phoneNumbers : $rootScope.personUIObject.phoneNumbers,
            addresses : $rootScope.personUIObject.addresses,
            gender: "MALE"
        }]);
        $httpBackend.expectPOST('http://localhost:8080/person-profile-ws/user-profile/newUser.json').respond([{
            id : 1,
            firstName : "Jared",
            middleName : null,
            lastName : "Ramirez",
            username : "jaredramirez",
            password : "password123",
            passwordConfirm : "password123",
            birthDate : new Date("2015-03-30"),
            city : "Denton",
            state : "TEXAS",
            zip : "76201",
            country : "UNITED_STATES",
            phoneNumbers : $rootScope.personUIObject.phoneNumbers,
            addresses : $rootScope.personUIObject.addresses,
            gender: "MALE"
        }]);
        $httpBackend.expectGET('partials/home.ng.html').respond(200, '');
        $httpBackend.expectGET('partials/userCreated.ng.html').respond(200, '');

        $rootScope.submit(true);
        $httpBackend.flush();
    });
});
*/
