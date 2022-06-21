const sortPostsByDate = (posts) =>
	posts?.sort((a, b) => {
		const dateA = new Date(a.date).getTime();
		const dateB = new Date(b.date).getTime();
		return dateB - dateA;
	});

export const getPostsForHomePage = (posts) => {
	// throw new Error(''); // TThrow error for test ErrorBoundary
	return sortPostsByDate(posts).slice(0, 3);
};

export const searchByTitlePosts = (posts, value) =>
	sortPostsByDate(posts).filter((el) =>
		el.title.trim().toLowerCase().includes(value.toLowerCase())
	);

export const getFormattedDate = (date) => {
	const dataObject = new Date(date);

	return new Intl.DateTimeFormat('ru-RU').format(dataObject);
};
