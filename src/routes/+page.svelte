<script>
	import { authUser } from '../store';
</script>

<h1>Welcome {$authUser?.name || ''} to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
