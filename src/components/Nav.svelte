<script>
	import { SlideState } from '../state.svelte.js';

	const updateState = new SlideState();
	$inspect(updateState.slide);

	function logoState() {
		if (updateState.slide) {
			updateState.slide = false;
		}
	}
</script>

<section
	id="nav"
	class="border-medGrey container sticky mx-auto flex w-full flex-row items-center justify-between border-b-2 sm:p-4"
>
	<div
		class="font-main text-darkGrey cursor-pointer select-none text-3xl font-extrabold outline-none sm:text-xl"
	>
		<a href="/" onclick={logoState}>
			<img src="src/lib/assets/shared/logo.svg" alt="" class="sm:h-6 md:h-8 lg:h-12" />
		</a>
	</div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<h3
		onclick={() => updateState.toggle()}
		class="text-md font-main text-darkGrey cursor-pointer select-none py-4 uppercase tracking-wider opacity-50 sm:text-sm lg:text-lg"
	>
		{updateState.slide ? 'Stop' : 'Start'} Slideshow
	</h3>
</section>
