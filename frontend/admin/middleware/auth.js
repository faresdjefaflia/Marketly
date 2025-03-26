export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/') return navigateTo('/login');

  const token = useCookie('token');
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  if (!auth.login) {
    if (!token.value) {
      if (to.path !== '/login') return navigateTo('/login');
    } else {
      await verifyToken();
      if (to.path === '/login') return navigateTo('/admin/reports');
    }
  } else {
    if (!token.value) {
      if (to.path !== '/login') return navigateTo('/login');
    } else {
      if (to.path === '/login') return navigateTo('/admin/reports');
    }
  }

  async function verifyToken() {
    try {
      const data = await $fetch(`${config.public.apiBase}/admin/auth`, {
        headers: { Authorization: `Bearer ${token.value}` },
        method: "GET",
      });
      auth.login = data.login;
    } catch (error) {
      token.value = undefined;
    }
  }
});

/*
1. If the user tries to access the root path ('/'), redirect them to the login page.

2. Retrieve the authentication token from cookies.

3. Access the authentication store to check login status.

4. Get runtime configuration settings.

5. If the user is not logged in:
   a. If no token exists:
      - Redirect the user to the login page (unless they are already there).
   b. If a token exists:
      - Verify the token by making a request to the authentication API.
      - If the user is on the login page and the token is valid, redirect them to the dashboard ('/admin/reports').

6. If the user is already logged in:
   a. If no token exists:
      - Redirect the user to the login page (unless they are already there).
   b. If a token exists:
      - If the user is on the login page, redirect them to the dashboard ('/admin/reports').

7. Token verification function:
   a. Send a request to the authentication API with the token.
   b. If the token is valid, update the authentication state.
   c. If the token is invalid or the request fails, clear the token.
*/