<script context="module">
	import { getAdaptedAuthorInfoData, getSkillsData } from '../utils/adapters';
	export async function load({ fetch }) {
		const authorResponse = await fetch(
			'https://still-taiga-83588.herokuapp.com/api/author?populate=*'
		);

		const skillsResponse = await fetch('https://still-taiga-83588.herokuapp.com/api/skills');

		if (!authorResponse.ok || !skillsResponse.ok) {
			return {
				status: authorResponse.status || skillsResponse.status,
				error: new Error('Could not fetch data')
			};
		}

		const authorData = await authorResponse.json();
		const skillsData = await skillsResponse.json();

		const authorInfo = getAdaptedAuthorInfoData(authorData.data);

		const skills = getSkillsData(skillsData.data);

		return {
			props: {
				authorInfo,
				skills
			}
		};
	}
</script>

<script>
	import { marked } from 'marked';
	import Image from '$lib/Image.svelte';
	export let authorInfo;
	export let skills;
</script>

<h1 class="visually-hidden">Об авторе</h1>

<section class="about">
	<h2 class="section__heading">Привет, я {authorInfo.title}</h2>
	<div class="wrapper">
		<div class="image">
			<Image
				alt={authorInfo.title}
				desktopImage={authorInfo.desktopImage}
				mobileImage={authorInfo.mobileImage}
			/>
		</div>
		<div class="description">{@html marked(authorInfo.fullDescription)}</div>
	</div>
</section>
<section>
	<h2 class="section__heading">Мои скилы</h2>
	<ul class="skills">
		{#each skills as { id, skill } (id)}
			<li class="default {skill.toLowerCase()}">
				{skill}
			</li>
		{/each}
	</ul>
</section>

<style>
	.about {
		margin-bottom: 40px;
	}
	.image {
		display: block;
		padding: 40px 0;
		border-bottom: 2px solid #808080;
		margin: 0 auto;
		margin-bottom: 40px;
	}

	:global(.description p) {
		padding: 0;
	}

	:global(.description p::before) {
		display: none;
	}

	@media (min-width: 768px) {
		.wrapper {
			margin-top: 20px;
			display: grid;
			grid-template-columns: 200px 1fr;
			gap: 20px;
		}

		.skills {
			margin: 40px 0;
			display: flex;
			flex-wrap: wrap;
		}

		.skills li {
			padding: 7px 10px;
			margin-right: 10px;
		}

		.default {
			color: #000;
			background-color: #fff;
			border: 1px solid #000;
		}

		.html {
			color: #fff;
			background-color: #dd4b25;
			border-color: #dd4b25;
		}
		.css {
			color: #fff;
			background-color: #254bdd;
			border-color: #254bdd;
		}
		.javascript {
			color: #000;
			background-color: #efd81d;
			border-color: #efd81d;
		}
		.react {
			color: #000;
			background-color: #5ed3f3;
			border-color: #5ed3f3;
		}

		.svelte {
			color: #fff;
			background-color: #dd4b25;
			border-color: #dd4b25;
		}

		.image {
			padding: 0;
			border: none;

			grid-column: 1 / 2;
		}
	}
</style>
