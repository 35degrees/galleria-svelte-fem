<script>
	import { SlideIndex } from '../state.svelte.js';
	import Footer from './Footer.svelte';
	import Modal from './Modal.svelte';
	import { fade, fly } from 'svelte/transition';
	import { slideIndex } from '../stores.js';
	import { elasticOut } from 'svelte/easing';
	import { indexArray } from '../stores.js';
	import { slideState } from '../stores.js';

	let slideIndexValue = $state();

	slideIndex.subscribe((value) => {
		slideIndexValue = value;
	});

	let currIndex = SlideIndex.slideIndex;

	let { data } = $props();
	let showModal = $state(false);

	let innerWidth = $state(window.innerWidth);
	let imageSize = innerWidth < 768 ? 'small' : 'large';
	const mainImage = () => {
		return;
	};
	console.log(imageSize);
</script>

<svelte:window />

<section id="main" in:fade={{ duration: 480, delay: 520 }}>
	<div class="transition-container">
		{#key slideIndexValue}
			<div
				in:fly={{
					x: $indexArray === 1 ? 450 : -400,
					duration: 250,
					delay: 280,
					opacity: 0,
					motion: elasticOut
				}}
				out:fly={{ x: $indexArray === 1 ? -400 : 450, duration: 240, opacity: 0 }}
				class="container mx-auto flex select-none flex-col items-start justify-center sm:mt-5 md:mt-8 md:gap-12 lg:flex-row"
			>
				<!-- IMAGE GROUPING  -->
				<div class="lg:w-7/8 flex flex-col items-start justify-center gap-1 md:flex-row lg:ml-10">
					<div class="relative w-full">
						<!-- svelte-ignore a11y_img_redundant_alt -->
						<img src={data[slideIndexValue].images.hero.large} alt="main image" class="md:w-5/6" />
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							onclick={() => (showModal = true)}
							class="absolute flex cursor-pointer flex-row items-center justify-between gap-10 px-6 py-4
						backdrop-blur transition-transform duration-150 hover:scale-105 sm:left-5 sm:top-5
						md:top-[520px] md:items-end lg:top-[540px]"
						>
							<img
								src="https://raw.githubusercontent.com/35degrees/galleria-svelte-fem/f3f009801c4981b221dafd8baba955cf3577cf2c/src/lib/assets/shared/icon-view-image.svg"
								alt=""
								class="md:mb-1 md:h-[20px]"
							/>
							<a
								class="select-none font-main text-sm uppercase tracking-wider text-white md:text-lg"
							>
								View Image
							</a>
						</div>
					</div>
					<div class="flex w-4/5 flex-col md:w-1/5">
						<div
							class="title relative -top-14 z-10 flex-col justify-start gap-1 bg-cream p-4 py-6 text-left font-main md:right-64 md:top-0 md:w-[28rem] md:gap-2 md:pb-10 md:pl-12 lg:h-[11.2rem] lg:w-[28rem] lg:gap-4"
						>
							<h3
								class="text-2xl font-semibold sm:h-[25px] md:relative md:-top-[2rem] md:text-4xl md:leading-[2.8rem] lg:-top-[16px]"
							>
								{data[slideIndexValue].name}
							</h3>
							<p
								class="md:text-md relative text-sm font-light opacity-40 sm:top-[40px] md:top-8 md:mt-2 lg:mt-8"
							>
								{data[slideIndexValue].artist.name}
							</p>
						</div>

						<div
							class="relative -top-12 sm:-top-[30px] sm:left-4 md:-left-20 md:right-20 md:top-0 lg:top-[18.5rem]"
						>
							<img
								src={data[slideIndexValue].artist.image}
								alt=""
								class="h-[80px] md:h-[120px] lg:h-[150px] lg:w-[150px]"
							/>
						</div>
					</div>
				</div>

				<!-- TEXT BLURB  -->

				<div
					class=" relative sm:mt-5 lg:mr-28 lg:mt-24 lg:flex lg:h-[20rem] lg:w-1/2 lg:flex-col lg:items-center lg:justify-start"
				>
					<div
						class="absolute -z-10 p-0 font-main text-medGrey opacity-90 sm:-top-28 sm:left-24 sm:text-9xl md:-left-2 md:-top-14 md:text-[12rem] lg:-top-[8rem] lg:left-20"
					>
						{data[slideIndexValue].year}
					</div>
					<div
						class="text-blurb relative -top-4 text-left font-main text-sm leading-6 opacity-45 md:top-10 md:mx-auto md:w-2/3 lg:top-2 lg:h-full lg:w-3/4 lg:leading-8"
					>
						{data[slideIndexValue].description}
					</div>
					<div
						class="relative mt-4 font-main text-sm font-semibold uppercase tracking-wide underline opacity-40 sm:top-6 md:mx-auto md:mt-10 md:w-2/3 md:items-start lg:top-[10rem] lg:mt-16 lg:w-3/4"
					>
						<a href={data[slideIndexValue].source} target="__blank">go to source</a>
					</div>
				</div>
			</div>
		{/key}
	</div>
</section>
<Modal bind:showModal>
	{#snippet image()}
		<img class="select-none" src={data[slideIndexValue].images.gallery} alt="gallery size" />
	{/snippet}
</Modal>
<Footer {data} />

<style>
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
</style>
