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
          <form>
          <input type="text" ng-model="$ctrl.newFirstName" placeholder="First Name" />
          <input type="text" ng-model="$ctrl.newLastName" placeholder="Last Name" />
          <input type="text" ng-model="$ctrl.newEmail" placeholder="Email" />
          <input type="text" ng-model="$ctrl.newPhone" placeholder="Phone" />
          <input type="text" ng-model="$ctrl.newStreet" placeholder="Street" />
          <input type="text" ng-model="$ctrl.newCity" placeholder="City"/>
          <select ng-model="$ctrl.newState"/>
          <option value="" disabled selected>State</option>
            <option ng-repeat="state in $ctrl.statesList" value="{{state.abbreviation}}">
            {{state.abbreviation}}
            </option>
          </select>
          <input type="text" ng-model="$ctrl.newZip" placeholder="Zip" />
          <div class = "addButton">
            <button class="addButton" ng-click="$ctrl.addContact($ctrl.newFirstName,
                $ctrl.newLastName, $ctrl.newEmail, $ctrl.newPhone,
                $ctrl.newStreet, $ctrl.newCity, $ctrl.newState,
                $ctrl.newZip)">Add</button>
          </div>
        </div>
      </form>
      <contact-list data="$ctrl.contacts"></contact-list>
    </div>
  `

});
