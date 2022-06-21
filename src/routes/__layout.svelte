<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/globals.css';
</script>

<svelte:head>
	<title>Web blog</title>
</svelte:head>

<Header />
<main class="content"><slot /></main>
<Footer />

<style>
	.content {
		padding: 30px 20px 20px;
	}

	@media (min-width: 1000px) {
		.content {
			width: 900px;
			margin: 0 auto;
			padding: 60px 0 0;
		}
	}
</style>
