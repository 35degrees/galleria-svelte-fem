<script>
	let { showModal = $bindable(), image } = $props();
	import { fade } from 'svelte/transition';

	let dialog = $state();

	$effect(() => {
		if (showModal) dialog.showModal();
	});

	// $inspect(showModal);
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	{@render image()}
</dialog>

<style>
	dialog {
		max-width: 90%;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.9);
	}
</style>
