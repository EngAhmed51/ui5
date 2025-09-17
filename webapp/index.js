sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content"); // <-- correct spelling
    // optional: quick proof that UI5 is up
    sap.ui.require(["sap/m/MessageToast"], function (MessageToast) {
      MessageToast.show("UI5 is ready");
    });
  });
});
