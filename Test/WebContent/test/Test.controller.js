sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/base/Log'
	], function(jQuery, MessageToast, Controller, JSONModel, Log) {
	"use strict";

	var CController = Controller.extend("test.Test", {



		onPressNavToDetail : function(oEvent) {
			this.getSplitAppObj().to(this.createId("detailDetail"));
		},

	  onListItemPress : function(oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

			this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},

       getSplitAppObj : function() {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		}

	});


	return CController;

});
