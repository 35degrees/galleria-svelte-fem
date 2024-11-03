import { slide } from 'svelte/transition';

export class SlideState {
	slide = $state(true);

	toggle() {
		this.slide = !this.slide;
	}
}

export class SlideIndex {
	slideIndex = $state(0);

	updateIndex() {
		this.slideIndex = slideIndex;
	}
}
