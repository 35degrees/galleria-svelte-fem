<script>
	import Nav from '../components/Nav.svelte';
	import { fade } from 'svelte/transition';
	import data from '../lib/data.json';
	import MainGrid from '../components/MainGrid.svelte';
	import Slide from '../components/Slide.svelte';
	import { slideState } from '../stores.js';
	import { onDestroy } from 'svelte';

	let slideStateValue;

	const unsubscribe = slideState.subscribe((value) => {
		slideStateValue = value;
	});

	onDestroy(unsubscribe);
</script>

<Nav />
{#if !slideStateValue}
	<MainGrid {data} />
{/if}
{#if slideStateValue}
	<Slide {data} />
{/if}
