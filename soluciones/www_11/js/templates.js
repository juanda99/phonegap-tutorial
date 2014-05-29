(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"topcoat-navigation-bar\">\n    <div class=\"topcoat-navigation-bar__item center full\">\n        <h1 class=\"topcoat-navigation-bar__title\">Futbolistas</h1>\n    </div>\n</div>\n<div class=\"search-bar\">\n<input type=\"search\" value=\"\" placeholder=\"buscar\" class=\"topcoat-search-input\" id=\"btnBuscar\">\n</div>\n<div class=\"topcoat-list scroller\">\n    <ul class=\"topcoat-list__container list\" id=\"lstFutbolistas\">\n  </ul>\n</div>\n";
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