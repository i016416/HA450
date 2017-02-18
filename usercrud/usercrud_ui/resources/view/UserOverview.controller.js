jQuery.sap.require("sap.m.MessageBox");
sap.ui.controller("view.UserOverview", {
	
	_oTableUserOverview: undefined,
	_oInputPersNo: undefined,
	_oInputFirstName: undefined,
	_oInputLastName: undefined,
	_oInputEmail: undefined,
	
	onInit: function(){
		
		this._oTableUserOverview = this.getView().byId("idTableUserOverview");
		this._oInputPersNo = this.getView().byId("idInputPersNo");
		this._oInputFirstName = this.getView().byId("idInputFirstName");
		this._oInputLastName = this.getView().byId("idInputLastName");
		this._oInputEmail = this.getView().byId("idInputEmail");
		
		// Model for user input
		var oUserModel = new sap.ui.model.json.JSONModel({
			PERS_NO: "",
			FIRSTNAME: "",
			LASTNAME: "",
			E_MAIL: ""
		});
		this.getView().setModel(oUserModel);
		
		// Model for server data
		var oUserCollectionModel = new sap.ui.model.odata.ODataModel(
        		"/user.xsodata", true
        );
		oUserCollectionModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
		this.getView().setModel(oUserCollectionModel, "Users");
		
	},
	
	onUserCreatePressed: function(oEvent){
		
		var oUserCollectionModel = this.getView().getModel("Users");
		var oNewUser = this.getView().getModel().oData;
		
		oUserCollectionModel.create("/Users", oNewUser, {
			
			success: function(){
				sap.m.MessageBox.alert("The new user has been created.");
				this.onFormClear();
			},
			error: function(){
				sap.m.MessageBox.alert("The new user wasn't created!");
			}
		});
	},
	
	onFormClear: function(oEvent){
		
		this._oInputPersNo.setValue();
		this._oInputFirstName.setValue();
		this._oInputLastName.setValue();
		this._oInputEmail.setValue();
		
	},
	
	onUserDelete: function(oEvent){
		var oUserCollectionModel = this.getView().getModel("Users");
		var oSelectedItem = this._oTableUserOverview.getSelectedItem();
		
		if(oSelectedItem !== null){
			oUserCollectionModel.remove(oSelectedItem.getBindingContextPath());			
		
		}else{
			
			sap.m.MessageBox.alert("Select an item before you continue!");
		}
	}
});