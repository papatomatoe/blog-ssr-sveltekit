<script>
	import { marked } from 'marked';
	import Image from './Image.svelte';
	import { getFormattedDate } from '../utils/helpers';
	export let isMarked = false;
	export let title;
	export let desktopImage;
	export let mobileImage;
	export let epigraph;
	export let date;
	export let id;
</script>

<h3 class="posts__title" class:marked={isMarked}>
	{title}
</h3>
<div class="posts__wrapper">
	<div class="image"><Image alt={title} {desktopImage} {mobileImage} /></div>
	<div class="posts__content">{@html marked(epigraph)}</div>
</div>
<div class="posts__bottom">
	<time class="posts__date" dateTime={date}>
		{getFormattedDate(date)}
	</time>
	<a class="button posts__read" href={`/posts/${id}`}>Read Post</a>
</div>

<style>
	.posts__title {
		margin-bottom: 15px;
	}

	.image {
		width: 100%;
		height: 130px;
		margin: 20px 0;
		object-fit: cover;
	}

	.posts__content {
		line-height: 1.5;
	}

	.posts__date {
		display: block;
		margin-top: 20px;
		font-weight: 700;
		color: #808080;
	}

	.marked {
		position: relative;
		background-color: #d6bd86;
		padding: 10px;
		padding-right: 90px;
	}

	.marked::after {
		position: absolute;
		content: 'new';
		color: tomato;
		display: block;
		top: 6px;
		right: 10px;
		border: 4px solid tomato;
		border-radius: 6px;
	}

	.posts__read {
		margin-top: 20px;
	}

	@media (min-width: 768px) {
		.image {
			width: 130px;
			height: 130px;
			margin: 0;
		}

		.posts__wrapper {
			display: grid;
			grid-template-columns: 130px 1fr;
			gap: 20px;
			align-items: start;
		}

		.posts__date {
			text-align: right;
		}

		.posts__bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.posts__bottom .posts__read {
			width: 150px;
			text-align: center;
		}
	}

	@media (min-width: 1000px) {
		.posts__title {
			margin-bottom: 30px;
			font-size: 28px;
		}

		.posts__content {
			font-size: 22px;
		}

		.posts__date {
			font-size: 16px;
		}

		.posts__bottom {
			margin-top: 40px;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			justify-content: flex-start;
			gap: 40px;
		}
	}
</style>
