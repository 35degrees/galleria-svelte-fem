<script>
	let { data } = $props();
</script>

<div
	class="bg-cream absolute bottom-0 mx-auto flex h-auto w-full flex-row items-center justify-between border-t-4 border-slate-300 p-4 px-12 text-center lg:px-28"
>
	<div class="font-main flex flex-col items-start justify-start gap-1">
		<h3 class="text-lg font-semibold">{data[0].name}</h3>
		<p class="text-sm opacity-45">Vincent Van Gogh</p>
	</div>
	<div class="arrows flex cursor-pointer flex-row items-center justify-center gap-7">
		<img src="src/lib/assets/shared/icon-back-button.svg" alt="left button" class="arrow-left" />
		<img src="src/lib/assets/shared/icon-next-button.svg" alt="right button" class="arrow-right" />
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
