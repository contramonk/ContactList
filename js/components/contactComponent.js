app.component('contactComponent', {
  controller : function(contactService) {
    var vm = this;
    vm.contacts = contactService.getContacts();
    vm.removeContact = contactService.deleteContact;
    vm.newFirstName = "";
    vm.newLastName = "";
    vm.newEmail = "";
    vm.newPhone = "";
    vm.newStreet = "";
    vm.newCity = "";
    vm.newState = "";
    vm.newZip = "";

    vm.addContact = function(firstName, lastName, email, phone, street, city,
        state, zip) {
      var newContact = contactService.createContact(firstName, lastName, email,
        phone, street, city, state, zip);
      // console.log(firstName, lastName, email, phone, street, city,
      //     state, zip);
      vm.contacts.push(newContact);
      vm.newFirstName = "";
      vm.newLastName = "";
      vm.newEmail = "";
      vm.newPhone = "";
      vm.newStreet = "";
      vm.newCity = "";
      vm.newState = "";
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
        <input type="text" ng-model="$ctrl.newState" />
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
