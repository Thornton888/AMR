function onOpen(e) {
  setupUI();
  calcSideBar();
  

}

function doGet() {
  return HtmlService.createTemplateFromFile('calcSidebar')
    .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function setupUI(){
  var sheet = SpreadsheetApp.getActive();
  var emgTools = [
    {name: "GoTo Last", functionName: "jumpToLastLine"},
    {name: "Calculator", functionName: "calcSideBar"},
    {name: "ADMINISTRATION", functionName: "authenticationPrompt"}
    ];    
    sheet.addMenu("EMG Tools", emgTools);
}



