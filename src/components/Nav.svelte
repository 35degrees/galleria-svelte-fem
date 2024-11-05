<script>
	import { slideState } from '../stores.js';

	// import { SlideState } from '../state.svelte.js';

	// const updateState = new SlideState();
	// $inspect(updateState.slide);

	const updateSlideState = () => {
		slideState.update((slide) => (slide = !slide));
	};
	const logoSlideState = () => {
		slideState.update((slide) => {
			if (slide) {
				slide = !slide;
			}
		});
	};
</script>

<section
	id="nav"
	class="container sticky mx-auto flex w-full flex-row items-center justify-between border-b-2 border-medGrey sm:p-4"
>
	<div
		class="cursor-pointer select-none font-main text-3xl font-extrabold text-darkGrey outline-none sm:text-xl"
	>
		<a href="/" onclick={logoSlideState}>
			<img
				src="https://raw.githubusercontent.com/35degrees/galleria-svelte-fem/f3f009801c4981b221dafd8baba955cf3577cf2c/src/lib/assets/shared/logo.svg"
				alt=""
				class="sm:h-6 md:h-8 lg:h-12"
			/>
		</a>
	</div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- <h3
		onclick={() => updateState.toggle()}
		class="text-md font-main text-darkGrey cursor-pointer select-none py-4 uppercase tracking-wider opacity-50 sm:text-sm lg:text-lg"
	> -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<h3
		class="text-md cursor-pointer select-none py-4 font-main uppercase tracking-wider text-darkGrey opacity-50 sm:text-sm lg:text-lg"
		onclick={updateSlideState}
	>
		{$slideState ? 'Stop' : 'Start'} Slideshow
	</h3>
</section>
