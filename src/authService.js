// eslint-disable-next-line no-unused-vars
import { createAuth0Client, Auth0Client } from '@auth0/auth0-spa-js';
import { authUser, isAuthenticated } from './store';
import { env } from '$env/dynamic/public';

/**
 * Creates the Auth0 client object
 * @returns Promise<Auth0Client>
 */
async function createClient() {
	return await createAuth0Client({
		domain: env.PUBLIC_AUTH0_DOMAIN,
		clientId: env.PUBLIC_AUTH0_CLIENT_ID
	});
}

/**
 * Opens a popup window to perform the app login process. If successful, it sets the authentication global objects.
 * @param {Auth0Client} client
 */
async function login(client) {
	client
		.loginWithPopup()
		.then(() => {
			client.getUser().then(async (user) => {
				if (user !== undefined) {
					authUser.set(user);
					isAuthenticated.set(await client.isAuthenticated());
				}
			});
		})
		.catch(() => {
			console.log('Popup closed. User not authenticated');
		});
}

/**
 * Performs the app logout process and reset the authentication global objects.
 * @param {Auth0Client} client
 */
function logout(client) {
	isAuthenticated.set(false);
	return client.logout();
}

export const auth0 = {
	createClient,
	login,
	logout
};
