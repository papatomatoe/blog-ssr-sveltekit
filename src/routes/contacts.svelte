<script context="module">
	import { getContacts, getSocials } from '../utils/adapters';
	export async function load({ fetch }) {
		const contactsResponse = await fetch('https://still-taiga-83588.herokuapp.com/api/contact');
		const socialsResponse = await fetch(
			'https://still-taiga-83588.herokuapp.com/api/socials?populate=*'
		);

		if (!contactsResponse.ok || !socialsResponse.ok) {
			return {
				status: contactsResponse.status || socialsResponse.status,
				error: new Error('Could not fetch data')
			};
		}

		const contactsData = await contactsResponse.json();
		const socilalsData = await socialsResponse.json();

		const contacts = getContacts(contactsData.data);
		const socials = getSocials(socilalsData.data);

		return {
			props: {
				contacts,
				socials
			}
		};
	}
</script>

<script>
	export let contacts;
	export let socials;
</script>

<h1>Контактная информация</h1>
<div class="wrapper">
	<section>
		<h2 class="visually-hidden">Номер телефона и адрес электронной почты</h2>
		<ul class="list">
			<li class="item">
				<span class="label">Телефон: </span>
				<a class="value" href="tel:{contacts.phone}">
					{contacts.phone}
				</a>
			</li>
			<li class="item">
				<span class="label">E-mail: </span>
				<a class="value" href="mailto:{contacts.mail}">
					{contacts.mail}
				</a>
			</li>
		</ul>
	</section>
	<section>
		<h2 class="visually-hidden">Социальные сети</h2>
		<ul class="socialList">
			{#each socials as { id, title, link, icon } (id)}
				<li class="socialItem">
					<a
						class="socialLink"
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={title}
					>
						<img src={icon} alt={title} />
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.list {
		margin: 40px 0;
	}

	.item {
		margin-bottom: 20px;
	}

	.item:last-of-type {
		margin: 0;
	}

	.socialList {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
	}

	.label {
		margin-right: 10px;
	}

	.value {
		color: tomato;
	}

	@media (min-width: 768px) {
		.wrapper {
			display: grid;
			grid-template-columns: minmax(200px, 250px) 1fr;
			margin: 40px 0;
			gap: 50px;
		}
		.list {
			margin: 0;
		}
	}
</style>
