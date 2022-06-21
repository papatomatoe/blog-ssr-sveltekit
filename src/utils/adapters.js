export const getAdaptedAuthorInfoData = (data) => {
	return {
		title: data.attributes.title,
		description: data.attributes.description,
		fullDescription: data.attributes.fullDescription,
		desktopImage: data.attributes.desktop.data.attributes.url,
		mobileImage: data.attributes.mobile.data.attributes.url
	};
};

export const getAdaptedPost = (data) => ({
	id: data.id,
	title: data.attributes.title,
	epigraph: data.attributes.epigraph,
	content: data.attributes.content,
	date: data.attributes.publishedAt,
	desktopImage: data.attributes.desktop.data.attributes.url,
	mobileImage: data.attributes.mobile.data.attributes.url
});

export const getAdaptedPostsData = (data) => data.map((item) => getAdaptedPost(item));

export const getSkillsData = (data) =>
	data.map((item) => ({
		id: item.id,
		skill: item.attributes.skill
	}));

export const getContacts = (data) => ({
	phone: data.attributes.phone,
	email: data.attributes.email
});

export const getSocials = (data) =>
	data.map((item) => ({
		id: item.id,
		title: item.attributes.title,
		link: item.attributes.link,
		icon: item.attributes.icon.data.attributes.url
	}));
