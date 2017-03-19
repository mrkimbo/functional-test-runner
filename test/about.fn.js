/* global page */

describe('About', () => {
  
  beforeAll((done) => {
    page.load('/#About', done);
  });
  
  it('should show the correct title', () => {
    console.log('about test');
    expect(page.find('h2').textContent).toEqual('About');
  });
  
});
