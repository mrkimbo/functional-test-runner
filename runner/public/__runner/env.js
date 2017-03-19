// replace jasmine's window.onload action
const execJasmine = window.onload;

window.onload = (evt) => {
  console.info('[runner] Initialising environment and Executing tests');
  const frame = document.querySelector('iframe');
  const win = frame.contentWindow;
  
  window.page = {
    window: win,
    document: win.document,
    find: (sel) => win.document.querySelector(sel),
    load: (url, done) => {
      console.info(`[runner] load url: ${url}`);
      
      // ToDo: add trigger for tests on hash change as well as page load
      // win.addEventListener('hashchange', () => {
      //   console.log('[runner] hash change');
      // });
      
      frame.onload = function () {
        // use timeout just in case there's any other onload events firing
        // from within the app
        setTimeout(() => {
          console.log('[runner] Resuming test execution:\n', win.location.href);
          done();
        });
      };
      
      win.location.href = url;
      win.location.reload(); // reload in case it's just a hash-change
    }
  };
  execJasmine();
};
