sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      /** @override */
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        //set data model
        var oData = {
          recipient: {
            name: "World from the model ",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
