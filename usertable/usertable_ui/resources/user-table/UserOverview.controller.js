sap.ui.controller("user-table.UserOverview", {

	onInit: function() {
		
		var oUserOverviewModel = new sap.ui.model.json.JSONModel({
			UserCollection: [
			    {PERS_NO: 1, FIRSTNAME: "Mario", LASTNAME: "Rossi", E_MAIL: "mario.rossi@example.com"},
			    {PERS_NO: 2, FIRSTNAME: "Jean", LASTNAME: "Claude", E_MAIL: "jean.claude@example.com"},
			    {PERS_NO: 3, FIRSTNAME: "Fritz", LASTNAME: "Heitzmann", E_MAIL: "fritz.heitzmann@example.com"}
			]
		});
		this.getView().setModel(oUserOverviewModel, "Users");
	}
});