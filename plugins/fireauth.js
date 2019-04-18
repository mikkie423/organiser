import { auth } from '@/services/fireinit.js';

export default context => {
  const { store } = context;

  return new Promise(resolve => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.debug('Auth state changed: User found');

        return resolve(() => {
          store.commit('auth/setUser', user);
        });
      } else {
        console.debug('Auth state changed: User found');
        return resolve();
      }
      // return resolve(() => {
      //   store.commit('auth/setUser', null);
      //   store.commit('auth/setIsAuthenticated', false);
      // });
    });
  });
};
