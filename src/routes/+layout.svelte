<script>
	import { onMount } from 'svelte';
	import { auth0 } from '../authService';
	import { isAuthenticated } from '../store';
	import { Auth0Client } from '@auth0/auth0-spa-js';
	// export let data;

	/** @type {Auth0Client} */ let auth0Client;

	onMount(async () => {
		auth0Client = await auth0.createClient();
	});

	/**
	 * Perform the app login process.
	 */
	function login() {
		auth0.login(auth0Client);
	}

	/**
	 *  perform the app logout process.
	 */
	function logout() {
		auth0.logout(auth0Client);
	}
</script>

<div>
	{#if $isAuthenticated}
		<button on:click={logout}>Logout</button>
	{:else}
		<button on:click={login}>Login</button>
	{/if}
</div>

<slot />
