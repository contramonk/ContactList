app.component('contactList', {
  controller : function(contactService) {
    var vm = this;
    vm.removeContact = contactService.deleteContact;
  },

  template : `
  <div class='contactContainer'>
      <div ng-repeat="contact in $ctrl.data" ng-if="$index % 3 == 0" class="row">
          <!-- column 1 -->
          <div class="column">
              <div class="contactWrapper">
                  <div class='contactHeader'>
                      <h2>{{$ctrl.data[$index].firstName}} {{$ctrl.data[$index].lastName}}</h2>
                  </div>
                  <div class="contactBody">
                      <ul>
                          <li>{{$ctrl.data[$index].email}}</li>
                          <li>{{$ctrl.data[$index].phone}}</li>
                          <li>{{$ctrl.data[$index].address.street}}</li>
                          <li>{{$ctrl.data[$index].address.city}}, {{$ctrl.data[$index].address.state}}, {{$ctrl.data[$index].address.zip}}</li>
                      </ul>
                  </div>
                  <div class="contactFooter">
                      <button class = "deleteButton" ng-click="$ctrl.removeContact($ctrl.data[$index])">Delete</button>
                  </div>
              </div>
          </div>

          <!-- column 2 -->
          <!-- making sure index is not out of bounds -->
          <div class="column" ng-if="$index + 1 < $ctrl.data.length">
              <div class="contactWrapper">
                  <div class='contactHeader'>
                      <h2>{{$ctrl.data[$index + 1].firstName}} {{$ctrl.data[$index + 1].lastName}}</h2>
                  </div>
                  <div class="contactBody">
                      <ul>
                          <li>{{$ctrl.data[$index + 1].email}}</li>
                          <li>{{$ctrl.data[$index + 1].phone}}</li>
                          <li>{{$ctrl.data[$index + 1].address.street}}</li>
                          <li>{{$ctrl.data[$index + 1].address.city}}, {{$ctrl.data[$index + 1].address.state}}, {{$ctrl.data[$index + 1].address.zip}}</li>
                      </ul>
                  </div>
                  <div class="contactFooter">
                      <button class = "deleteButton" ng-click="$ctrl.removeContact($ctrl.data[$index + 1])">Delete</button>
                  </div>
              </div>
          </div>

          <!-- column 3 -->
          <!-- making sure index is not out of bounds -->
          <div class="column" ng-if="$index + 2 < $ctrl.data.length">
              <div class="contactWrapper">
                  <div class='contactHeader'>
                      <h2>{{$ctrl.data[$index + 2].firstName}} {{$ctrl.data[$index + 2].lastName}}</h2>
                  </div>
                  <!-- end contact header -->
                  <div class="contactBody">
                      <ul>
                          <li>{{$ctrl.data[$index + 2].email}}</li>
                          <li>{{$ctrl.data[$index + 2].phone}}</li>
                          <li>{{$ctrl.data[$index + 2].address.street}}</li>
                          <li>{{$ctrl.data[$index + 2].address.city}}, {{$ctrl.data[$index + 2].address.state}}, {{$ctrl.data[$index + 2].address.zip}}</li>
                      </ul>
                  </div>
                  <!-- end contactBody -->
                  <div class="contactFooter">
                      <button class = "deleteButton" ng-click="$ctrl.removeContact($ctrl.data[$index + 2])">Delete</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `,

  bindings : {
    data : "="
  }

});
