describe('Find My Lunch', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Find My Lunch');
  });
});