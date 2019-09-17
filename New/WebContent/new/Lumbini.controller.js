
sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/base/Log",
	'sap/ui/model/json/JSONModel'

], function (jQuery, Controller, Log, JSONModel) {
	"use strict";

	return Controller.extend("new.Lumbini", {
		
		onInit: function () {
			var oModel = new JSONModel("model/Employee.json");
			this.getView().setModel(oModel);
			
       
		},
//		onBeforeRendering: function () {
//          Log.info("The view will shortly be rendered.");
//         },
//           onAfterRendering: function () {
//            Log.info("The view has been rendered.");
//          },
//          onExit: function () {
//          Log.info("Controller will shortly be destroyed.");
//          },

		onPress:function(oEvent){
			sap.ui.require(["sap/m/MessageToast"], function (Message) {
            Message.show("Searching..."+oEvent);
          });
			
		}
	});
});