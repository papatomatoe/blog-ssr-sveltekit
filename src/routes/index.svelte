<script context="module">
	import { getAdaptedAuthorInfoData, getAdaptedPostsData } from '../utils/adapters';
	export async function load({ fetch }) {
		const authorResponse = await fetch(
			'https://still-taiga-83588.herokuapp.com/api/author?populate=*'
		);

		const postsResponse = await fetch(
			'https://still-taiga-83588.herokuapp.com/api/posts?populate=*'
		);
		if (!authorResponse.ok || !postsResponse.ok) {
			return {
				status: authorResponse.status || postsResponse.status,
				error: new Error('Could not fetch data')
			};
		}

		const authorData = await authorResponse.json();
		const postsData = await postsResponse.json();

		const authorInfo = getAdaptedAuthorInfoData(authorData.data);
		const posts = getAdaptedPostsData(postsData.data);

		return {
			props: {
				authorInfo,
				posts
			}
		};
	}
</script>

<script>
	import { getPostsForHomePage } from '../utils/helpers';
	import AuthorInfo from '$lib/AuthorInfo.svelte';
	import Posts from '$lib/Posts.svelte';

	export let authorInfo;
	export let posts;

	$: filteredPosts = getPostsForHomePage(posts);
</script>

<h1 class="visually-hidden">Главная страница</h1>
<section class="about">
	<h2 class="section__heading">Об авторе</h2>
	<AuthorInfo
		title="Серёжа"
		desktopImage={authorInfo.desktopImage}
		mobileImage={authorInfo.mobileImage}
		description={authorInfo.description}
	/>
</section>
<section>
	<h2 class="section__heading">Последние посты</h2>
	<Posts posts={filteredPosts} />
	<a href="/posts" class="button toPosts">To Posts</a>
</section>

<style>
	.about {
		margin-bottom: 50px;
	}

	.toPosts {
		display: block;
		margin: 40px auto 30px;
		max-width: 500px;
		text-align: center;
	}

	@media (min-width: 768px) {
		.toPosts {
			display: block;
			margin: 40px 0 30px auto;
			width: 300px;
		}
	}
</style>
