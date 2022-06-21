<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script>
	export let status;

	const getError = (code) => {
		switch (code) {
			case 500:
				return 'Ой! Похоже что-то пошло не так...';
			case 404:
				return 'Страница не найдена...';
		}
	};

	$: message = getError(status);
</script>

<h1>{message}</h1>
