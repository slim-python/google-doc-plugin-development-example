//google doc plugin to make title of your article stylish

function findHeader() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  // Define the search parameters.
  var searchType = DocumentApp.ElementType.PARAGRAPH;
  var searchHeading = DocumentApp.ParagraphHeading.TITLE;
  var searchResult = null;
  
  var style = {};
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Montserrat';
  style[DocumentApp.Attribute.FONT_SIZE] = '30';
  style[DocumentApp.Attribute.BOLD] = 'true';

  

  // Search until the paragraph is found.
  while (searchResult = body.findElement(searchType, searchResult)) {
    var par = searchResult.getElement().asParagraph();
    if (par.getHeading() == searchHeading) {
      // Found one, update
      par.setHeading(DocumentApp.ParagraphHeading.HEADING2);
      par.setAttributes(style);
    }
  }
}
