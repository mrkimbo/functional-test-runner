/* global page */

describe('Home', () => {
  
  beforeAll((done) => {
    page.load('/#Home', done);
  });
  
  it('should show the correct title', () => {
    console.log('home test');
    expect(page.find('h2').textContent).toEqual('Home');
  });
  
});
