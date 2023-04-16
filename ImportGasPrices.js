function main() {
    let newVal = scrapeGasPrices("https://www.caa.ca/gas-prices/");
    //updateSheet(newVal);
  }
  
  function scrapeGasPrices(url) {
    let html = UrlFetchApp.fetch(url).getContentText();
    let $ = Cheerio.load(html);
    dropDown = $("#provinces_chooser_dropdown");
    dropDown.val("Nova Scotia");
  
    let gasPrice = $("#local_dropdown li[data-location='HALIFAX']").attr("data-today");
  
    newVal[0] = gasPrice;
  
    // Timestamp storage
    let newVal = [2];
    newVal[1] = Utilities.formatDate(new Date(), 'Etc/GMT', "yyyy-MM-dd HH:mm:ssZ");
    return newVal;
  }
  
  function updateSheet(newVal) {
      
    // Removed personal sheet ID, which would go in the line below
    let budgetSheet = SpreadsheetApp.openById("");
    let sheet = budgetSheet.getSheets()[0];
    let cell = sheet.createTextFinder("Gas").findNext();
    cell = cell.offset(1, 0)
    cell.setValue(newVal[0]);
  
    let timeCell = cell.offset(1, 0);
    timeCell.setValue(newVal[1]);
  }