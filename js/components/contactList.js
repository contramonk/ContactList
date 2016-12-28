app.component('contactList', {
  controller : function(contactService) {
    var vm = this;
    vm.removeContact = contactService.deleteContact;
  },

  template : `
    <div class = 'contactContainer' ng-repeat="contact in $ctrl.data">
      <div class = 'contactHeader'>
        <h2>{{contact.firstName}} {{contact.lastName}}</h2>
      </div>
      <ul>
        <li>{{contact.email}}</li>
        <li>{{contact.phone}}</li>
        <li>{{contact.address.street}}</li>
        <li>{{contact.address.city}}</li>
        <li>{{contact.address.state}}</li>
        <li>{{contact.address.zip}}</li>
      </ul>
      <button ng-click = "$ctrl.removeContact(contact)">Delete</button>
    </div>
  `,

  bindings : {
    data : "="
  }

});
