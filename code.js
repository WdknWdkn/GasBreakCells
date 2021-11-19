
function myFunction() {
  // シート取得
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  // セル範囲
  var ranges = sheet.getDataRange().getMergedRanges();
  for (var i = 0; i < ranges.length; i++) {
    var mergedRange = ranges[i];
    var value = mergedRange.getDisplayValue();
    mergedRange.breakApart();
    mergedRange.setValue(value);
  }  
}
