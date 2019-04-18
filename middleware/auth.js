export default function({ store, redirect, route }) {
  if (!store.getters['auth/user']) {
    console.debug('Auth middleware failed');
    store.commit('auth/setIntended', route.path);
    return redirect('/auth/sign-in');
  }
}
