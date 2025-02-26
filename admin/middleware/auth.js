export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path == '/') return navigateTo('/login');
  const token = useCookie('token');
  if (token.value) {
    if (to.path == '/login') {
      return navigateTo('/admin/reports')
    };
  } else {
    if (to.path !== '/login') {
      return navigateTo('/login')
    }
  }
});