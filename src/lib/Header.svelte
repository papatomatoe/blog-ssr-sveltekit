<script>
	import Menu from './Menu.svelte';
	const MENU_LINKS = [
		{ id: 1, title: 'об авторе', link: '/about' },
		{ id: 2, title: 'посты', link: '/posts' },
		{ id: 3, title: 'контакты', link: '/contacts' }
	];

	let isActive = false;

	const setActiveHandler = () => {
		isActive = !isActive;
	};
</script>

<header class="header">
	<nav class="header__nav">
		<a sveltekit:prifetch class="header__logo" href="/"> Blog </a>
		<button
			class:active={isActive}
			class="header__button"
			aria-label="open menu"
			on:click={setActiveHandler}
		/>
		<Menu menuData={MENU_LINKS} {isActive} />
	</nav>
</header>

<style>
	.header {
		padding: 20px 20px 30px;
		background-color: burlywood;
		box-shadow: inset 0 -10px 0 0 tomato;
		position: relative;
	}

	.header__nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header__logo {
		font-size: 34px;
		font-weight: 700;
		color: #fff;
		text-shadow: 4px 4px 0 #181818;
	}

	.header__button {
		width: 40px;
		height: 35px;
		background: linear-gradient(
			to bottom,
			white 5px,
			transparent 5px,
			transparent 15px,
			white 15px,
			white 20px,
			transparent 20px,
			transparent 30px,
			white 30px
		);
		border: none;
	}

	.active {
		width: 40px;
		height: 40px;
		background: transparent;
		position: relative;
	}
	.active::after {
		position: absolute;
		content: '';
		width: 40px;
		height: 4px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		background-color: #fff;
	}
	.active::before {
		position: absolute;
		content: '';
		width: 40px;
		height: 4px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background-color: #fff;
	}

	@media (min-width: 1000px) {
		.header {
			padding: 30px 0 40px;
		}

		.header__nav {
			width: 900px;
			margin: 0 auto;
		}

		.header__button {
			display: none;
		}
	}
</style>
