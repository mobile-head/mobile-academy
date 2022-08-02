const CodeExampleNavigation = {
  notAuth: `import React from 'react';
    import { createStackNavigator } from '@react-navigation/stack';
    
    import SignIn from '@screens/SignIn';
    import SignUp from '@screens/SignUp';
    import ForgotPassword from '@screens/ForgotPassword';
    
    //= ==========================================================================================
    const NotAuthStack = createStackNavigator();
    
    const NotAuthRoutes = () => {    
        return (
            <NotAuthStack.Navigator>
                <NotAuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
                <NotAuthStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <NotAuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            </NotAuthStack.Navigator>
        );
    };
    
    export default NotAuthRoutes;
    `,

  auth: `import React from 'react';
    import { createStackNavigator } from '@react-navigation/stack';
    
    import Home from '@screens/Home';
    import Profile from '@screens/Profile';
    import Settings from '@screens/Settings';
    
    //= ==========================================================================================
    const AuthStack = createStackNavigator();
    
    const AuthRoutes = () => {    
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <AuthStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <AuthStack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            </AuthStack.Navigator>
        );
    };
    
    export default AuthRoutes;
    `,
  routes: `import React, { useEffect, useReducer, useMemo } from 'react';
    import { createStackNavigator } from '@react-navigation/stack';
    import { NavigationContainer } from '@react-navigation/native';
    import { useSelector } from 'react-redux';
    import { requestTrackingPermission } from 'react-native-tracking-transparency';
    
    import AuthContext from '@context';
    import Welcome from '@screens/Welcome';
    import { wait } from '@utils';
    
    import AuthRoutes from './AuthRoutes';
    import AppRoutes from './AppRoutes';
    
    const Stack = createStackNavigator();
    const Routes = () => {
        const header = useSelector((state) => state.header);
    
        const [state, dispatch] = useReducer(
            (prevState, action) => {
                switch (action.type) {
                    case 'LOADING':
                        return {
                            ...prevState,
                            isSignout: false,
                            isSignin: false,
                            isLoading: true,
                        };
                    case 'SIGN_IN':
                        return {
                            ...prevState,
                            isSignout: false,
                            isLoading: false,
                            isSignin: true,
                        };
                    case 'SIGN_OUT':
                        return {
                            ...prevState,
                            isLoading: false,
                            isSignin: false,
                            isSignout: true,
                        };
                    default:
                        return prevState;
                }
            },
            {
                isLoading: true,
                isSignout: false,
                isSignin: false,
            }
        );
    
        //= ===================================================================================
        /** Realiza o logout quando o usuário estiver dentro de uma stack autenticada
            e tentar realizar um request em uma rota autenticada no backend mas o a
            situação do usuário seja inativada, ou o email seja inativado, ou o usuário
            tenha sido deletado.
        * */
        useEffect(() => {
            if (state.isSignin && !header.user) dispatch({ type: 'SIGN_OUT' });
        }, [header.user]);
    
        //= ===================================================================================
        useEffect(() => {
            initPermission();
        }, []);
    
        //= ==============================================================================================
        const initPermission = async () => {
            const trackingStatus = await requestTrackingPermission();
            if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
                wait(3000).then(async () => {
                    if (header.user) {
                        dispatch({ type: 'SIGN_IN' });
                    } else {
                        dispatch({ type: 'SIGN_OUT' });
                    }
                });
            } else {
                wait(3000).then(async () => {
                    if (header.user) {
                        dispatch({ type: 'SIGN_IN' });
                    } else {
                        dispatch({ type: 'SIGN_OUT' });
                    }
                });
            }
        };
    
        //= ===================================================================================
        const authContext = useMemo(
            () => ({
                setLoading: () => dispatch({ type: 'LOADING' }),
                signIn: () => dispatch({ type: 'SIGN_IN' }),
                signOut: () => dispatch({ type: 'SIGN_OUT' }),
            }),
            []
        );
    
        //= ===================================================================================
        return (
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    <Stack.Navigator>
                        {state.isSignout && (
                            <Stack.Screen
                                name="Auth"
                                component={NotAuthStack}
                                options={{ headerShown: false, animationEnabled: true }}
                            />
                        )}
                        {state.isSignin && (
                            <Stack.Screen
                                name="App"
                                component={AuthStack}
                                options={{ headerShown: false, animationEnabled: false }}
                            />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        );
    };
    
    export default Routes;
    `,
};

export { CodeExampleNavigation };
