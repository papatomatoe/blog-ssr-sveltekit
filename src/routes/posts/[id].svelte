<script context="module">
	import { getAdaptedPost } from '../../utils/adapters';

	export async function load({ fetch, params }) {
		const id = params.id;
		const postResponse = await fetch(
			`https://still-taiga-83588.herokuapp.com/api/posts/${id}?populate=*`
		);

		if (!postResponse.ok) {
			return {
				status: postResponse.status,
				error: new Error('Could not fetch data')
			};
		}

		const postData = await postResponse.json();

		const post = getAdaptedPost(postData.data);

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import { marked } from 'marked';
	import Image from '$lib/Image.svelte';
	import { getFormattedDate } from '../../utils/helpers';
	export let post;
</script>

<article class="post">
	<h1 class="post__title">{post.title}</h1>
	<div class="post__image">
		<Image desktopImage={post.desktopImage} mobileImage={post.mobileImage} alt={post.title} />
	</div>
	<time class="post__date" dateTime={post.date}>
		{getFormattedDate(post.date)}
	</time>
	<div class="post__content">{@html marked.parse(post.content)}</div>

	<a class="button post__back" href="/posts"> Go Back </a>
</article>

<style>
	.post {
		padding: 20px 0;
	}

	.post__title {
		margin: 0 0 40px 0;
		line-height: 1.5;
	}

	.post__date {
		display: block;
		text-align: right;
		margin: 20px 0;
		font-weight: 700;
		color: gray;
	}

	.post__back {
		display: block;
		width: 150px;
		text-align: center;
		margin: 0 0 0 auto;
	}
</style>
