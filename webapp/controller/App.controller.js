// webapp/sap/ui/demo/walkthrough/controller/App.controller.js
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      /**
       * @override
       */
      onInit: function () {
        console.log("loading data model ...");
      },
    });
  }
);
