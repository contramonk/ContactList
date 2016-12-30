app.factory('contactService', function() {
  var service = {};

  var contacts = [
    {
      id : 1,
      firstName : "Jeff",
      lastName : "Tithers",
      email : "one@two.com",
      phone : "555-567-7654",
      address : {
        street: "1234 Buggars Dr",
        city: "Calderon",
        zip: "55968",
        state: "CO"
      }
    },
    {
      id : 2,
      firstName : "Tim",
      lastName : "Murcury",
      email : "two@three.com",
      phone : "555-999-3333",
      address : {
        street: "4231 Timid Ln",
        city: "Phoenix",
        zip: "87654",
        state: "WY"
      }
    },
    {
      id : 3,
      firstName : "Sandra",
      lastName : "Featherlink",
      email : "three@four.com",
      phone : "555-567-456",
      address : {
        street: "9090 Titan Rd",
        city: "Labsynth",
        zip: "89574",
        state: "FL"
      }
    },
    {
      id : 4,
      firstName : "Mr.",
      lastName : "Pickles",
      email : "six@six.com",
      phone : "555-666-9879",
      address : {
        street: "6789 Beazelbub Rd.",
        city: "South Pole",
        zip: "97658",
        state: "AZ"
      }
    },
    {
      id : 5,
      firstName : "Turner",
      lastName : "Ted",
      email : "logger@tenminusone.com",
      phone : "555-789-4567",
      address : {
        street: "4089 Little St",
        city: "Fredericksburgen",
        zip: "99945",
        state: "HI"
      }
    },
    {
      id : 6,
      firstName : "Elf",
      lastName : "McFarlane",
      email : "dontyoudare@crazy.com",
      phone : "555-365-8906",
      address : {
        street: "1234 Angry Ln",
        city: "Brittain",
        zip: "28990",
        state: "NC"
      }
    },
    {
      id : 7,
      firstName : "Teresa",
      lastName : "Lotta-tai-ping",
      email : "exmogul@frenchRiviera.com",
      phone : "555-347-3474",
      address : {
        street: "7657 Willthis Rd",
        city: "Ever End",
        zip: "70998",
        state: "TX"
      }
    }
  ];

  service.getContacts = function() {
    return contacts;
  };

  service.deleteContact = function(contact) {
    var index = contacts.indexOf(contact);
    contacts.splice(index, 1);
  };

  service.createContact = function(firstName, lastName, email, phone,
      street, city, state, zip) {
    var newContact =
      {
        id : contacts.length + 1,
        firstName : firstName,
        lastName : lastName,
        email : email,
        phone : phone,
        address : {
          street: street,
          city: city,
          zip: zip,
          state: state
        }
      }
      return newContact;
  }

  return service;
});
