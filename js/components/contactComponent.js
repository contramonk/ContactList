app.component('contactComponent', {
  controller : function(contactService) {
    var vm = this;
    vm.contacts = contactService.getContacts();

  },
  template : `
    <div class = 'contactContainer' ng-repeat="contact in $ctrl.contacts">
      <div class = 'contactHeader'>
        <h1>{{contact.firstName}} {{contact.lastName}}</h1>
      </div>
      <li>{{contact.email}}</li>
      <li>{{contact.phone}}</li>
      <li>{{contact.address.street}}</li>
      <li>{{contact.address.city}}</li>
      <li>{{contact.address.state}}</li>
      <li>{{contact.address.zip}}</li>
    </div>
  `

});
