sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"CountriesZ02_Countries/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("CountriesZ02_Countries.controller.DetailView", {
	formatter: formatter,
	
		onInit: function(){
			this.getView().bindElement("countryModel>/countries/0");
			this.getOwnerComponent().getRouter().getRoute("detail").attachPatternMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched : function (oEvent) {
			var sContext, sIndex;
			sContext = oEvent.getParameter("arguments").context;
			sIndex = oEvent.getParameter("arguments").index;
			this.getView().bindElement("countryModel>/" + sContext + "/" + sIndex);
		}
	});
});