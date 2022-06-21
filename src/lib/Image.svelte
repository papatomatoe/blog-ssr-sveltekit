<script>
	export let desktopImage;
	export let mobileImage;
	export let alt;
</script>

<picture>
	<source media="(min-width: 768px)" srcSet={desktopImage} />
	<img src={mobileImage} {alt} />
</picture>
