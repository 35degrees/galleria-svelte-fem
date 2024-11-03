<script>
	import Nav from '../components/Nav.svelte';
	import { fade, slide } from 'svelte/transition';
	import data from '../lib/data.json';
	import MainGrid from '../components/MainGrid.svelte';
	import Slide from '../components/Slide.svelte';
	import { SlideState, SlideIndex } from '../state.svelte.js';

	let currState = new SlideState();
</script>

<Nav />
{#if currState.slide}
	<MainGrid {data} />
{/if}
{#if !currState.slide}
	<Slide {data} />
{/if}
