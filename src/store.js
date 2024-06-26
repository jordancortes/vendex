import { writable } from 'svelte/store';
import { User } from '@auth0/auth0-spa-js';

/**
 * Identifies if the user is authenticated in the application
 */
const isAuthenticated = writable(false);

/**
 * Contains the authenticated user information
 */
const authUser = writable(new User());

export { isAuthenticated, authUser };
