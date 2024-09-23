({
  navigate: function (cmp) {
    var navigator = cmp.find('navService');
    var recordId = cmp.get('v.recordId');
    var objectName = cmp.get('v.sObject');
    var mode = cmp.get('v.mode');

    var recordPage = {
      type: 'standard__recordPage',
      attributes: {
        recordId: recordId,
        objectApiName: objectName,
        actionName: mode
      }
    };

    navigator.navigate(recordPage)
      // .then(() => {
      //   // Just hold this open for a sec while it loads...
      // })
      // .catch(error => {
      //   console.error('error navigating', error);
      // });
  }
});
