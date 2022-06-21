<script>
	import { page } from '$app/stores';
	export let link;
	export let title;
</script>

<li class="header__item">
	<a class="header__link" class:active={$page.url.pathname === link} href={link}>
		{title}
	</a>
</li>

<style>
	.header__link {
		color: #fff;
		text-decoration: underline;
	}

	.active {
		text-decoration: none;
	}

	@media (min-width: 1000px) {
		.header__item {
			margin-left: 40px;
		}

		.header__item:first-of-type {
			margin: 0;
		}
	}
</style>
