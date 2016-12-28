app.factory('contactService', function() {
  var service = {};

  var contacts = [
    {
      id : 1,
      firstName : "Jeff",
      lastName : "Tithers",
      email : "one@two.com",
      phone : "555-567-7654"
      address : {
        street: "1234 Buggars Dr",
        city: "Calderon",
        zip: "55968"
        state: "Colorado"
      }
    },
    {
      id : 1,
      firstName : "Tim",
      lastName : "Murcury",
      email : "two@three.com",
      phone : "555-999-3333"
      address : {
        street: "4231 Timid Ln",
        city: "Phoenix",
        zip: "87654"
        state: "Wyoming"
      }
    },
    {
      id : 1,
      firstName : "Sandra",
      lastName : "Featherlink",
      email : "three@four.com",
      phone : "555-567-456"
      address : {
        street: "9090 Titan Rd",
        city: "Labsynth",
        zip: "89574"
        state: "Florida"
      }
    }
  ];
  service.getContacts = function() {
    return contacts;
  }

  return service;
}
