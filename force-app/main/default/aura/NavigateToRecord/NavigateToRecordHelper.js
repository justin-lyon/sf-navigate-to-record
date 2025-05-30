({
  navigate: function (cmp, helper) {
    var workspace = cmp.find("workspace");
    var navigator = cmp.find("navService");

    var recordPage = helper.getRecordPage(cmp);

    workspace
      .isConsoleNavigation()
      .then(function (isConsoleApp) {
        if (isConsoleApp) {
          return helper.openTab(cmp, helper);
        }
        navigator.navigate(recordPage);
      })
      .catch(function (error) {
        console.error(
          "Error navigating to record page",
          JSON.stringify(recordPage),
          error.message
        );
      });
  },

  getRecordPage: function (cmp) {
    var recordId = cmp.get("v.recordId");
    var objectName = cmp.get("v.sObject");
    var mode = cmp.get("v.mode");

    return {
      type: "standard__recordPage",
      attributes: {
        recordId: recordId,
        objectApiName: objectName,
        actionName: mode
      }
    };
  },

  openTab: function (cmp, helper) {
    var workspace = cmp.find("workspace");
    var recordPage = helper.getRecordPage(cmp);

    return workspace
      .openTab({
        pageReference: recordPage,
        focus: true
      })
      .catch(function (error) {
        console.error("Error opening new tab", recordPage, error.message);
      });
  }
});