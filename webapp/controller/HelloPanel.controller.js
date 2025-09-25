sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        MessageToast.show("Hello from the HelloPanel controller 👋");
      },
      onOpenDialog: function () {
        //create dialoge lazily
        if (!this.pDialog) {
          console.log("show dialouge pressed ");
          this.pDialog = this.loadFragment({
            name: "sap.ui.demo.walkthrough.view.helloDialog",
          });
        }
        this.pDialog.then(function (oDialog) {
          console.log("oDialoug openned");
          oDialog.open();
        });
      },

      onCloseDialog: function () {
        this.byId("helloDialog").close();
      },
    });
  }
);
