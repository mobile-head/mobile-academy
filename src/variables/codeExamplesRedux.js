const ReduxExamples = {
  store: `// == @store/index.js ==
// IMPORTAÇÕES
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
// Nesse caso, usaremos o AsyncStorage para persistir os dados em redux
import AsyncStorage from '@react-native-community/async-storage';

// Daqui virão nossos reducers
import rootReducer from './reducers/index';

// É a configuração do pacote redux-persist
const persistConfig = {
    key: 'root',
    //Passamos o nosso método de armazenamento persistido de escolha
    storage: AsyncStorage,
    // Passamos o redux que queremos salvar em específico
    whitelist: [
        'data',
    ],
};

// Aqui criamos os reducers persistidos com os quais criaremos a Store.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Criação da Store e aplicação de console.logs para cada alteração no state
const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger(),
    ),
);

// Implementação final da persistência do state da Store
const persistor = persistStore(store);

export {
  store,
  persistor,
};
        `,
  reducer: `// == @store/reducers/index.js ==
import { combineReducers } from 'redux';
import {
  SET_STATE,
} from '@store/consts.js';

const INITIAL_STATE = {
  value: ""
};

function data(state = INITIAL_STATE, action){
  const { payload } = action;

  switch(action.type){
    case SET_STATE:
      return {
        ...state,
        value: payload
      }
    
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data,
});
export default rootReducer;
        `,
  actions: `// == @store/actions/index.js ==

import {
  SET_STATE
} from '@store/actions.js';

export const actionSetState = (payload) => ({
  type: SET_STATE,
  payload
});
        `,
  wrappper: `
  // == @main/App.js ==

  import Routes from '@routes';
  import { Provider } from 'react-redux';
  import { PersistGate } from 'redux-persist/integration/react';
  import { store, persistor } from '@stores/index';

  ...

  return (
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    </>
);

        `,
  changingState: `
    import { actionSetBiometricToggle } from '@stores/Actions';
    import { useDispatch } from 'react-redux';

    ...

    //= =================================================================================================
    export function useBiometricToggleHandler() {
        const { biometricToggle } = useSharedState();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(actionSetBiometricToggle(biometricToggle));
        }, [biometricToggle]);
    }
    `,
  changingStateStaticWay: `
    import { store } from '@stores';
    import { resetDataToLogout } from '@stores/Actions/index';
    
    ...

    store.dispatch(resetDataToLogout());
    `,
  viewingReduxData: `
import { useDispatch, useSelector } from 'react-redux';

    ...

//= =================================================================================================
export function useInit() {
    const { setBiometricToggle } = useSharedState();
    const datas = useSelector((state) => state.datas);

    useEffect(() => {
        setBiometricToggle(datas.biometricToggle);
    }, []);
}
    `,
  viewingReduxDataStaticWay: `
import { store } from '../stores';

...

const user = store.getState().datas.user;    
    `,
  migrationImports: `  import { persistStore, persistReducer, createMigrate } from 'redux-persist';
  import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
  import rootReducer from './reducers/index';`,
  migrationObject: `const migrations = {
    1: (state) => rootReducer,
};`,
  migrationPersistConfig: `version: 1,
debug: true,
stateReconcilier: autoMergeLevel2,
migrate: createMigrate(migrations, { debug: true }),`,
};

export { ReduxExamples };
