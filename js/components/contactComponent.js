app.component('contactComponent', {
  controller : function(contactService, STATES_LIST) {
    var vm = this;
    vm.contacts = contactService.getContacts();
    vm.statesList = STATES_LIST.states;
    vm.newFirstName = "";
    vm.newLastName = "";
    vm.newEmail = "";
    vm.newPhone = "";
    vm.newStreet = "";
    vm.newCity = "";
    vm.newState = {};
    vm.newZip = "";

    vm.addContact = function(firstName, lastName, email, phone, street, city,
        state, zip) {
      var newContact = contactService.createContact(firstName, lastName, email,
        phone, street, city, state, zip);
      vm.contacts.push(newContact);
      vm.newFirstName = "";
      vm.newLastName = "";
      vm.newEmail = "";
      vm.newPhone = "";
      vm.newStreet = "";
      vm.newCity = "";
      vm.newState = {};
      vm.newZip = "";
    };

  },
  template : `
    <div class = "container">
      <div class = "header">
        <h1>Contacts List</h1>
      </div>
      <div class = "contactForm">
        <input type="text" ng-model="$ctrl.newFirstName" />
        <input type="text" ng-model="$ctrl.newLastName" />
        <input type="text" ng-model="$ctrl.newEmail" />
        <input type="text" ng-model="$ctrl.newPhone" />
        <input type="text" ng-model="$ctrl.newStreet" />
        <input type="text" ng-model="$ctrl.newCity" />
        <select ng-model="$ctrl.newState" />
          <option ng-repeat="state in $ctrl.statesList" value="{{state.abbreviation}}">
          {{state.abbreviation}}
          </option>
        </select>
        <input type="text" ng-model="$ctrl.newZip" />
      </div>
      <div class = "addButton">
        <button ng-click="$ctrl.addContact($ctrl.newFirstName,
            $ctrl.newLastName, $ctrl.newEmail, $ctrl.newPhone,
            $ctrl.newStreet, $ctrl.newCity, $ctrl.newState,
            $ctrl.newZip)">Add</button>
      </div>
      <contact-list data="$ctrl.contacts"></contact-list>
    </div>
  `

});
