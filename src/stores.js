import { writable } from 'svelte/store';

export const slideState = writable(false);

export const slideIndex = writable(2);

export const indexArray = writable(0);
