var JugadorView = function(adapter, futbolista) {

   this.addLocation = function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(
        function(position) {
            alert(position.coords.latitude + ',' + position.coords.longitude);
        },
        function() {
            alert('Error obteniendo localización');
        });
    return false;
  };
   this.addToContacts = function(event) {
      event.preventDefault();
      console.log('Añadiendo a Contactos');
      if (!navigator.contacts) {
          alert("El API de contactos no está soportada", "Error");
          return;
      }
      /*Según doc de Cordova: https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md: */

      // create a new contact object
      var contact = navigator.contacts.create();
      contact.displayName = "Futbolista";
      contact.nickname = "Futbolista";            // specify both to support all devices

      // populate some fields
      var name = new ContactName();
      name.givenName = futbolista.nombre;
      name.familyName = futbolista.apellido;
      contact.name = name;

     // save to device
     contact.save(
        function () {
           alert ("Futbolista guardado en los contactos del teléfono");
	},
        function () {
	   alert("uppps, no ha ido bien: " + contactError.code)
        }
     );
   };

    this.inicializar = function() {
        this.el = $('<div/>');
	this.el.on('click', '.add-location-btn', this.addLocation);
        this.el.on('click', '.add-contact-btn', this.addToContacts);
    };

    this.render = function() {
        this.el.html(Handlebars.templates.jugador(futbolista));
        return this.el;
    };

    this.inicializar();

}
