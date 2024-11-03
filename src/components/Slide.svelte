<script>
	import { SlideIndex } from '../state.svelte.js';
	import Footer from './Footer.svelte';
	import Modal from './Modal.svelte';

	let currIndex = SlideIndex.slideIndex;
	console.log(currIndex);
	let { data, slideIndex } = $props();
	let showModal = $state(false);

	let innerWidth = $state(window.innerWidth);
</script>

<svelte:window bind:innerWidth />

<section id="main">
	<div
		class="container mx-auto flex select-none flex-col items-start justify-center md:mt-8 md:gap-12 lg:flex-row"
	>
		<!-- IMAGE GROUPING  -->
		<div class="lg:w-7/8 flex flex-col items-start justify-center gap-1 md:flex-row lg:ml-10">
			<div class="relative w-full">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="src/lib/assets/starry-night/hero-{innerWidth < 768 ? 'small' : 'large'}.jpg"
					alt="main image"
					class="md:w-5/6"
				/>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div
					onclick={() => (showModal = true)}
					class="absolute flex cursor-pointer flex-row items-center justify-between gap-10 px-6 py-4
					backdrop-blur transition-transform duration-150 hover:scale-105 sm:left-5 sm:top-5
					md:top-[520px] md:items-end lg:top-[540px]"
				>
					<img src="src/lib/assets/shared/icon-view-image.svg" alt="" class="md:mb-1 md:h-[20px]" />
					<a class="font-main select-none text-sm uppercase tracking-wider text-white md:text-lg">
						View Image
					</a>
				</div>
			</div>
			<div class="flex w-4/5 flex-col md:w-1/5">
				<div
					class="title md:gap-9md:pl-16 bg-cream font-main relative -top-14 z-10 flex-col justify-start gap-1 p-4 py-6 text-left md:right-64 md:top-0 md:w-[24rem] md:pb-10 md:pl-10"
				>
					<h3 class="md:leading-24 text-2xl font-semibold md:text-5xl">
						{data[0].name}
					</h3>
					<p class="md:text-md text-sm font-light opacity-40 md:mt-2">{data[0].artist.name}</p>
				</div>

				<div class="relative -top-12 md:right-20 md:top-0 lg:top-[20.4rem]">
					<img
						src="src/lib/assets/starry-night/artist.jpg"
						alt=""
						class="h-[80px] md:h-[120px] lg:h-[150px] lg:w-[150px]"
					/>
				</div>
			</div>
		</div>

		<!-- TEXT BLURB  -->
		<div
			class=" lg:mr-28 lg:mt-24 lg:flex lg:h-[20rem] lg:w-1/2 lg:flex-col lg:items-center lg:justify-start"
		>
			<div
				class="text-blurb font-main relative -top-4 text-left text-sm leading-6 opacity-45 md:mx-auto md:w-2/3 lg:w-3/4 lg:leading-8"
			>
				{data[0].description}
			</div>
			<div
				class="font-main mt-4 text-sm font-semibold uppercase tracking-wide underline opacity-40 md:mx-auto md:mt-5 md:w-2/3 md:items-start lg:w-3/4"
			>
				<a href={data[0].source} target="__blank">go to source</a>
			</div>
		</div>
	</div>
</section>
<Modal bind:showModal>
	{#snippet image()}
		<img class="select-none" src={data[1].images.gallery} alt="gallery size" />
	{/snippet}
</Modal>
<Footer {data} />
