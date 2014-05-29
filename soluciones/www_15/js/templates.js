(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"topcoat-navigation-bar\">\n    <div class=\"topcoat-navigation-bar__item center full\">\n        <h1 class=\"topcoat-navigation-bar__title\">Futbolistas</h1>\n    </div>\n</div>\n<div class=\"search-bar\">\n<input type=\"search\" value=\"\" placeholder=\"buscar\" class=\"topcoat-search-input\" id=\"btnBuscar\">\n</div>\n<div class=\"topcoat-list scroller\">\n    <ul class=\"topcoat-list__container list\" id=\"lstFutbolistas\">\n  </ul>\n</div>\n";
  });
templates['jugador'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "    <div class=\"topcoat-navigation-bar\">\n        <div class=\"topcoat-navigation-bar__item left quarter\">\n            <a class=\"topcoat-icon-button--quiet back-button\" href=\"#\">\n                <span class=\"topcoat-icon topcoat-icon--back\"></span>\n            </a>\n        </div>\n        <div class=\"topcoat-navigation-bar__item center half\">\n            <h1 class=\"topcoat-navigation-bar__title\">Futbolistas</h1>\n        </div>\n    </div>\n    <div class='detalles scroller'>\n        <img src=\"assets/img/";
  if (helper = helpers.imagen) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imagen); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"imagen-futbolista\">\n        <h1>";
  if (helper = helpers.nombre) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nombre); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.apellido) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.apellido); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <p><strong>Equipo:</strong> ";
  if (helper = helpers.equipo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.equipo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </p>\n        <p><strong>Posición: </strong>";
  if (helper = helpers.posicion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.posicion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p><strong>Dorsal:</strong> ";
  if (helper = helpers.dorsal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dorsal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p><em>";
  if (helper = helpers.desc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.desc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</em></p>\n        <div class=\"topcoat-list__container clearfix\">\n            <ul class=\"topcoat-list list actions\">\n                <li class=\"topcoat-list__item\"><a href=\"tel:+34606606606\"><p>Llamar al móvil</p><p>+34606606606</p><div class=\"action-icon icon-call\"/></a></li>\n		<li class=\"topcoat-list__item\"><a href=\"tel:+34606606606\"><p>Llamar al fijo</p><p>+34976414141</p><div class=\"action-icon icon-call\"/></a></li>\n                <li class=\"topcoat-list__item\"><a href=\"sms:+34606606606\"><p>Enviar SMS</p><p>+34606606606</p><div class=\"action-icon icon-sms\"/></a></li>\n                <li class=\"topcoat-list__item\"><a href=\"mailto:micorreo@gmail.com\"><p>Enviar correo electrónico</p><p>micorreo@gmail.com</p><div class=\"action-icon icon-mail\"/></a></li>\n                <li class=\"topcoat-list__item\"><a href=\"#\" class=\"add-location-btn\"><p>Añadir posición</p></a></li> \n                <li class=\"topcoat-list__item\"><a href=\"#\" class=\"add-contact-btn\"><p>Añadir a contactos</p></a></li>    \n                <li class=\"topcoat-list__item\"><a href=\"#\" class=\"change-pic-btn\"><p>Hacer una foto nueva</p></a></li> \n            </ul>\n        </div>\n    </div>\n";
  return buffer;
  });
templates['listaJugadores'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li class=\"topcoat-list__item\">\n      <a href=\"#futbolistas/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <img src=\"assets/img/";
  if (helper = helpers.imagen) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imagen); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <p>";
  if (helper = helpers.nombre) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nombre); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.apellido) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.apellido); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p>";
  if (helper = helpers.equipo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.equipo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <span class=\"chevron\"></span>\n        </a>\n      </li>\n    ";
  return buffer;
  }

  buffer += "  ";
  stack1 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();