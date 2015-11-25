describe('Find My Lunch', function() {
  var searchBox = element(by.model('searchTerm'));
  var searchButton = element(by.className('get-lunch-btn'));
  var searchedFor = element(by.className('searched_for'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Find My Lunch');
  });

  it('finds food and shows the search term', function() {
    searchBox.sendKeys('burritos');
    searchButton.click();
    var meals = element.all(by.repeater('item in searchResult'));
    expect(searchedFor.getText()).toEqual("Search results for burritos");
    expect(meals.get(0).element(by.binding('item.name')).getText()).toEqual('Bombay Burritos and Poppadoms');
  });
});