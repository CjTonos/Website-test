function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
