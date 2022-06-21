<script>
	let currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<p class="footer__copy">&copy; Blog {currentYear}</p>
</footer>

<style>
	.footer {
		padding: 30px 20px 20px;
		background-color: burlywood;
		box-shadow: inset 0 10px 0 0 tomato;
	}

	.footer__copy {
		color: #fff;
	}

	@media (min-width: 1000px) {
		.footer__copy {
			width: 900px;
			margin: 0 auto;
		}
	}
</style>
