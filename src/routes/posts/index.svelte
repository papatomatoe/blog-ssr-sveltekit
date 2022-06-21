<script context="module">
	import { getAdaptedPostsData } from '../../utils/adapters';
	export async function load({ fetch }) {
		const postsResponse = await fetch(
			'https://still-taiga-83588.herokuapp.com/api/posts?populate=*'
		);

		if (!postsResponse.ok) {
			return {
				status: postsResponse.status,
				error: new Error('Could not fetch data')
			};
		}

		const postsData = await postsResponse.json();

		const posts = getAdaptedPostsData(postsData.data);

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Posts from '$lib/Posts.svelte';
	import { searchByTitlePosts } from '../../utils/helpers';
	export let posts;
	let searchValue = '';

	$: sortingPosts = searchByTitlePosts(posts, searchValue);
</script>

<h1 class="visually-hidden">Страница постоы</h1>
<section>
	<h2 class="section__heading">Посты</h2>
	<input class="search" type="text" placeholder="Search" bind:value={searchValue} />
	<Posts posts={sortingPosts} isMarkFirstPost />
</section>

<style>
	.search {
		width: 100%;
		height: 50px;
		margin-top: 20px;
		border: 2px solid #808080;
		padding: 5px;
		outline: 0;
	}

	.search:hover {
		opacity: 0.5;
	}
	.search:focus {
		opacity: 1;
		border-color: #d6bd86;
	}

	@media (min-width: 1000px) {
		.search {
			display: block;
			width: 300px;
			margin-top: 40px;
			margin-right: 0;
			margin-left: auto;
			font-size: 18px;
		}
	}
</style>
