sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"CountriesZ02_Countries/model/formatter"
], function(Controller, formatter) {
	"use strict";
	
	return Controller.extend("CountriesZ02_Countries.controller.MasterView", {
		formatter: formatter,

		onListPressed: function(oEvent) {
			//var oCtx = oEvent.getSource().getSelectedItem().getBindingContext("countryModel").getPropert
			var sPath = oEvent.getSource().getSelectedItem().getBindingContext("countryModel").getPath();
			var aContext = sPath.split("/");

			this.getOwnerComponent().getRouter().navTo("detail", {
				context: aContext[1],
				index: aContext[2]
			});
		}
	});

});