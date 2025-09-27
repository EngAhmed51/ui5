sap.ui.define([], function () {
  "use strict";

  function resolveI18nModel(context) {
    if (context && typeof context.getView === "function") {
      var oView = context.getView();
      if (oView && typeof oView.getModel === "function") {
        var oViewModel = oView.getModel("i18n");
        if (oViewModel) {
          return oViewModel;
        }
      }
    }

    if (context && typeof context.getModel === "function") {
      var oModel = context.getModel("i18n");
      if (oModel) {
        return oModel;
      }
    }

    if (context && typeof context.getOwnerComponent === "function") {
      var oComponent = context.getOwnerComponent();
      if (oComponent && typeof oComponent.getModel === "function") {
        return oComponent.getModel("i18n");
      }
    }

    return null;
  }

  return {
    statusText: function (sStatus) {
      var oI18nModel = resolveI18nModel(this);
      if (!oI18nModel) {
        return sStatus;
      }

      var oResourceBundle = oI18nModel.getResourceBundle();
      switch (sStatus) {
        case "A":
          return oResourceBundle.getText("invoiceStatusA");
        case "B":
          return oResourceBundle.getText("invoiceStatusB");
        case "C":
          return oResourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },
  };
});
