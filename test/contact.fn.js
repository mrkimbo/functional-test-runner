/* global page */

describe('Contact', () => {
  
  beforeAll((done) => {
    page.load('/#Contact', done);
  });
  
  it('should show the correct title', () => {
    console.log('contact test');
    expect(page.find('h2').textContent).toEqual('Contact');
  });
  
});
