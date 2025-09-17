SVGComponentTransferFunctionElement.define(
  ["sap/ui/core/mvc/controller"],
  function (controller) {
    "use strict";
    return controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function () {
        alert("hello from the controller 😒");
      },
    });
  }
);
