<script>
	import { marked } from 'marked';
	import Image from './Image.svelte';
	export let title;
	export let desktopImage;
	export let mobileImage;
	export let description;
</script>

<section class="aboutSection">
	<h2 class="visually-hidden">Об авторе</h2>
	<div class="wrapper">
		<div class="image">
			<Image alt={title} {desktopImage} {mobileImage} />
		</div>
		<div class="description">{@html marked(description)}</div>
	</div>
</section>

<style>
	.aboutSection {
		margin-bottom: 50px;
	}

	.image {
		display: block;
		padding: 40px 0;
		border-bottom: 2px solid #808080;
		margin: 0 auto;
		margin-bottom: 40px;
	}

	@media (min-width: 768px) {
		:global(.description p::before) {
			position: absolute;
			content: '';
			width: 10px;
			height: 4px;
			background-color: tomato;
			top: 6px;
			left: 0;
		}

		.wrapper {
			margin-top: 20px;
			display: grid;
			grid-template-columns: 200px 1fr;
			gap: 20px;
		}

		.image {
			padding: 0;
			border: none;

			grid-column: 1 / 2;
		}
	}
</style>
