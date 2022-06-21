<script>
	import PostItem from './PostItem.svelte';

	export let posts;
	export let isMarkFirstPost = false;
</script>

<ul class="posts__list">
	{#each posts as { id, title, epigraph, date, desktopImage, mobileImage }, idx (id)}
		<li class="posts__item">
			<PostItem
				{id}
				{title}
				{epigraph}
				{date}
				{desktopImage}
				{mobileImage}
				isMarked={idx === 0 && isMarkFirstPost}
			/>
		</li>
	{/each}
</ul>

<style>
	.posts__list {
		margin-top: 30px;
	}

	.posts__item {
		margin-bottom: 40px;
		padding-bottom: 30px;
		border-bottom: 1px solid #808080;
	}

	@media (min-width: 1000px) {
		.posts__list {
			margin-top: 50px;
		}

		.posts__item {
			margin-bottom: 50px;
			padding-bottom: 35px;
		}
	}
</style>
