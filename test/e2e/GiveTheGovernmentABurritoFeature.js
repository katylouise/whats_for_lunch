describe('Find My Lunch', function() {
  var searchBox = element(by.model('searchTerm'));
  var searchButton = element(by.className('get-lunch-btn'));
  var searchedFor = element(by.className('searched-for'));
  var meals = element.all(by.repeater('item in searchResult'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Find My Lunch');
  });

  it('finds food and displays the search term, meal names, cost, image and vendor', function() {
    searchBox.sendKeys('burritos');
    searchButton.click();
    expect(searchedFor.getText()).toEqual('Search results for burritos');
    expect(meals.get(0).element(by.binding('item.name')).getText()).toEqual('Bombay Burritos and Poppadoms');
    expect(meals.get(0).element(by.binding('item.totalGrossFoodCost')).getText()).toEqual('£7.20');
    expect(meals.get(0).element(by.binding('item.vendor.name')).getText()).toEqual('Bombay Burrito');
    expect(meals.get(0).element(by.tagName('img')).getAttribute('src')).toEqual('https://uploads.citypantry.com/images/package/2015-04/medium-917295721bb4b238777b6296a760e81958126887.jpg');
  });

  it('clears search if search term deleted', function() {
    searchBox.sendKeys('');
    expect(meals.count()).toBe(0);
  });
});