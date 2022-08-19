const CodeExampleAxios = {
  installAxiosNpm: `npm install axios`,

  installAxiosYarn: `yarn add axios`,

  cratingAxios: `import axios from 'axios';
import { env } from '../../config/env';

const API = axios.create({
    baseURL: ]|{env.PROTOCOL}://|{env.HOST_NAME}:|{env.PORT_APP_SERVER}],
});

export default API;`,

  middlewareRequest: `API.interceptors.request.use(async (request) => {
  const savedToken = await AsyncStorage.getItem(TOKEN);
  const user = await getUser();

  const token = savedToken || user?.TOKEN;

  console.log('---TOKEN_MOBILE---: ', token);

  if (token) {
      try {
          console.log('REQUEST: ', request);
          request.headers['x-access-token'] = token;
          request.data.user = { IDS001: user?.IDS001, DSEMALOG: user?.DSEMALOG };
      } catch (err) {
          console.log('ERROR_TOKEN: ', err);
      }
  }

  return request;
});`,

  middlewareResponse: `API.interceptors.response.use(
  async (responseSuccess) => {
      console.log('---TOKEN_RESPONSE-OK---: ', responseSuccess);

      const newToken = responseSuccess?.headers['x-access-token'];

      if (newToken) {
          AsyncStorage.setItem(TOKEN, newToken);

          console.log('HEADERS: ', newToken);
      }

      return responseSuccess;
  },
  (responseError) => {
      const isUserlogged = store.getState().header.user;

      console.log('---MIDDLEWARE_RESPONSE [FAIL]---: ', responseError?.response);
      console.log('---USER_LOGGED---: ', isUserlogged);

      if (String(responseError).includes('401') || responseError?.status === 401) {
          axios.CancelToken.source().cancel(
              'Cancelling all pending request because an 401 error.'
          );

          console.log('RESPONSE WITH ERRROR 401, LOGGING OUT');

          AsyncStorage.removeItem(TOKEN);

          store.dispatch(resetDataToLogout());
          store.dispatch(setLogoutMessage(responseError?.response.data.armensag));
      }
  }
);`,

  example: `export const getListOperations = async (user) =>
  new Promise(async (resolve, reject) => {
      try {
          await apiServer
              .post('/api/hc/app/lista-operacao', user)
              .then(async (operations) => {
                  trackEvent('@SERVICES->GETLISTOPERATIONS->API.POST() - RES - HAS PERMISSION?', {
                      operations: operations,
                  });
                  console.log(
                      '@SERVICES->GETLISTOPERATIONS->API.POST() - RES - HAS PERMISSION?: ',
                      operations
                  );
                  resolve(operations.data);
              })
              .catch((err) => {
                  resolve(err);
                  trackEvent('@SERVICES->GETLISTOPERATIONS->API.POST() - CATCH', { err: err });
                  console.log('@SERVICES->GETLISTOPERATIONS->API.POST() - CATCH: ', err);
              });
      } catch (err) {
          trackEvent('@SERVICES->GETLISTOPERATIONS() - CATCH', { err: err });
          console.log('@SERVICES->GETLISTOPERATIONS() - CATCH', err);
          reject(new Error(err));
      }
  });`,
};

export { CodeExampleAxios };
