sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("dk.dhek.SmartTableAndGatewayServices.controller.Main", {

		onInit : function() {
		},
		
		onSubmit : function() {
			var oModel = this.getView().getModel();
			oModel.submitChanges();
		},
		
		onItemSelect : function(oEvent) {
			// Get binding context of selected item
			var sPath = oEvent.getSource().getSelectedItem().getBindingContextPath();

			// Set binding for SmartForm so that it can display content of single line
			var oSmartForm = this.byId("smartformId");
			oSmartForm.bindElement(sPath);
		}
		
	});
});