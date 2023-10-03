export const PrivateKeyManager = (() => {
  let instance;

  function init() {
    // Private variables
    const BASE_URL = "https://www.boredapi.com/api/"; //Note: it should get from dot env file

    function getBaseUrl(tokenName) {
      return BASE_URL;
    }

    // Public methods
    return {
      getBaseUrl,
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
