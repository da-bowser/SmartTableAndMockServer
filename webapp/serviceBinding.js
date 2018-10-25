function initModel() {
	var sUrl = "/ZDEK_NPL_ABAP752/sap/opu/odata/sap/ZDEK_SMART_TABLE_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}