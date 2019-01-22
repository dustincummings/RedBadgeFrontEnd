export let APIURL = '';

switch (window.location.hostname) {
  // this is the deployed angular application
  case 'dc-cateringcoordinator.herokuapp.com':
    // this is the full url of your deployed API
    APIURL = 'https://cateringcoordinator.azurewebsites.net/'
    break;
  default:
    // this is the local host name of your API
    APIURL = 'http://localhost:44311';
}

export const environment = {
  production: true
};

