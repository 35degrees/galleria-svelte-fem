<script>
	import { SlideState, SlideIndex } from '../state.svelte.js';
	const updateSlideState = new SlideState();
	$inspect(updateSlideState.slide);
	const myIndex = new SlideIndex();
	$inspect(myIndex.slideIndex);
	let { data } = $props();

	function handleClick(i) {
		myIndex.slideIndex = i;
		updateSlideState.toggle();
	}
</script>

<section id="main">
	<div
		class="container mx-auto flex items-start justify-center text-center lg:h-[950px] lg:max-h-[2000px]"
	>
		<div
			class="grid-container grid-rows-auto sm:grid-rows-16 grid h-auto w-full gap-4 p-0 sm:p-4 md:grid-cols-2 md:grid-rows-12 lg:grid-cols-4 lg:grid-rows-11"
		>
			{#each data as painting, i}
				<div
					onclick={() => handleClick(i)}
					class="grid-item relative z-0 flex w-full cursor-pointer flex-col items-start justify-end rounded-md bg-cover bg-center px-4 py-4 pt-20 hover:opacity-70"
					style="background-image: url({painting.images.thumbnail})"
				>
					<h3 class="z-9 font-main text-left text-xl font-semibold text-white drop-shadow-xl">
						{painting.name}
					</h3>
					<h5 class="z-99 font-main mt-1 text-left text-sm font-normal text-white drop-shadow-sm">
						{painting.artist.name}
					</h5>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		grid-template-rows: masonry;
	}

	.grid-item:nth-child(9),
	.grid-item:nth-child(14),
	.grid-item:nth-child(13) {
		background-position: 0 10%;
	}

	.grid-item:nth-child(7),
	.grid-item:nth-child(2) {
		background-position: 0 20%;
	}

	.grid-item:nth-child(12) {
		background-position: 25%;
	}

	/* .grid-item:nth-child(15) {
		grid-column: span 2;
	} */

	.grid-item:nth-child(1) {
		grid-row: span 3;
	}

	.grid-item:nth-child(2) {
		grid-row: span 4;
	}

	.grid-item:nth-child(3) {
		grid-row: span 3;
	}

	.grid-item:nth-child(4) {
		grid-row: span 2;
	}

	.grid-item:nth-child(5) {
		grid-row: span 2;
	}

	.grid-item:nth-child(6) {
		grid-row: span 3;
	}

	.grid-item:nth-child(7) {
		grid-row: span 5;
	}
	.grid-item:nth-child(8) {
		grid-row: span 2;
	}
	.grid-item:nth-child(9) {
		grid-row: span 3;
	}
	.grid-item:nth-child(10) {
		grid-row: span 3;
	}
	.grid-item:nth-child(11) {
		grid-row: span 2;
	}
	.grid-item:nth-child(12) {
		grid-row: span 4;
	}
	.grid-item:nth-child(13) {
		grid-row: span 3;
	}
	.grid-item:nth-child(14) {
		grid-row: span 3;
	}
	.grid-item:nth-child(15) {
		grid-row: span 2;
	}

	/* .grid-item:hover::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: #fff;
		opacity: 0.3;
		z-index: -1;
		top: 0;
		left: 0;
	} */

	/* *,
	*::before {
		outline: 2px dotted lime;
	} */

	@media (max-width: 1400px) {
		.grid-item:nth-child(1) {
			grid-row: span 2;
		}

		.grid-item:nth-child(2) {
			grid-row: span 3;
		}

		.grid-item:nth-child(3) {
			grid-row: span 3;
		}

		.grid-item:nth-child(4) {
			grid-row: span 3;
		}

		.grid-item:nth-child(5) {
			grid-row: span 3;
		}

		.grid-item:nth-child(6) {
			grid-row: span 3;
		}

		.grid-item:nth-child(7) {
			grid-row: span 5;
		}
		.grid-item:nth-child(8) {
			grid-row: span 3;
		}
		.grid-item:nth-child(9) {
			grid-row: span 4;
		}
		.grid-item:nth-child(10) {
			grid-row: span 5;
		}
		.grid-item:nth-child(11) {
			grid-row: span 3;
		}
		.grid-item:nth-child(12) {
			grid-row: span 5;
		}
		.grid-item:nth-child(13) {
			grid-row: span 6;
		}
		.grid-item:nth-child(14) {
			grid-row: span 6;
		}
		.grid-item:nth-child(15) {
			grid-row: span 4;
		}
	}

	@media (max-width: 768px) {
		.grid-item:nth-child(1) {
			grid-row: span 1;
		}

		.grid-item:nth-child(2) {
			grid-row: span 2;
		}

		.grid-item:nth-child(3) {
			grid-row: span 1;
		}

		.grid-item:nth-child(4) {
			grid-row: span 2;
		}

		.grid-item:nth-child(5) {
			grid-row: span 1;
		}

		.grid-item:nth-child(6) {
			grid-row: span 1;
		}

		.grid-item:nth-child(7) {
			grid-row: span 1;
		}
		.grid-item:nth-child(8) {
			grid-row: span 1;
		}
		.grid-item:nth-child(9) {
			grid-row: span 2;
		}
		.grid-item:nth-child(10) {
			grid-row: span 1;
		}
		.grid-item:nth-child(11) {
			grid-row: span 2;
		}
		.grid-item:nth-child(12) {
			grid-row: span 1;
		}
		.grid-item:nth-child(13) {
			grid-row: span 2;
		}
		.grid-item:nth-child(14) {
			grid-row: span 2;
		}
		.grid-item:nth-child(15) {
			grid-row: span 1;
		}
	}
</style>
