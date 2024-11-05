<script>
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	let { data } = $props();
	import { slideIndex } from '../stores.js';
	import { slide } from 'svelte/transition';
	import { indexArray } from '../stores.js';

	let slideIndexVal = $state();

	const unsubscribe = slideIndex.subscribe((value) => {
		slideIndexVal = value;
	});

	let indexArrayVal;

	const unsubscribeArr = indexArray.subscribe((value) => {
		indexArrayVal = value;
	});

	onDestroy(unsubscribe);
	onDestroy(unsubscribeArr);

	const upIndex = () => {
		indexArray.update((arr) => (arr = 1));
		if (slideIndexVal === 14) {
			slideIndex.update((index) => (index = 0));
		} else {
			slideIndex.update((index) => (index += 1));

			console.log($slideIndex);
		}
	};

	const downIndex = () => {
		indexArray.update((arr) => (arr = -1));
		if (slideIndexVal === 0) {
			slideIndex.update((index) => (index = 14));
		} else {
			slideIndex.update((index) => (index -= 1));

			console.log($slideIndex);
		}
	};

	let num1 = 3;
	let num2 = 4;
</script>

<div
	class="absolute bottom-0 mx-auto flex h-auto w-full select-none flex-row items-center justify-between border-t-4 border-slate-300 bg-cream p-4 px-12 text-center lg:px-28"
>
	{#key slideIndexVal}
		<div
			in:fly={{
				x: indexArrayVal === -1 ? -350 : 300,
				duration: 250,
				opacity: 0,
				delay: 265
			}}
			out:fly={{ x: indexArrayVal === -1 ? 300 : -350, duration: 250, opacity: 0 }}
			class="flex flex-col items-start justify-start gap-1 font-main"
		>
			<!-- <div
			in:fly={{ x: -300, duration: 250, opacity: 0, delay: 265 }}
			out:fly={{ x: 480, duration: 250, opacity: 0 }}
			class="flex flex-col items-start justify-start gap-1 font-main"
		> -->
			<h3 class="relative w-[20rem] text-left text-lg font-semibold">
				{data[slideIndexVal].name}
			</h3>
			<p class="text-sm opacity-45">{data[slideIndexVal].artist.name}</p>
		</div>
	{/key}
	<div class="arrows flex cursor-pointer select-none flex-row items-center justify-center gap-7">
		<img
			src="https://raw.githubusercontent.com/35degrees/galleria-svelte-fem/f3f009801c4981b221dafd8baba955cf3577cf2c/src/lib/assets/shared/icon-back-button.svg"
			alt="left button"
			class="arrow-left"
			onclick={downIndex}
		/>
		<img
			src="https://raw.githubusercontent.com/35degrees/galleria-svelte-fem/f3f009801c4981b221dafd8baba955cf3577cf2c/src/lib/assets/shared/icon-next-button.svg"
			alt="right button"
			class="arrow-right"
			onclick={upIndex}
		/>
	</div>
</div>

<style>
	.arrow-left,
	.arrow-right {
		transition: transform 0.1s ease-in-out;
		&:hover {
			transform: scale(1.18);
		}
	}
</style>
