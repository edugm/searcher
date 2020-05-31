import List from "./list.interface";

export const buildSearcherFunctor = (list: List) => {
	const items = new Map(Object.keys(list).map((i) => [i, 0]));

	return (searchers: string[]) => {
		fillTeamCounters(searchers);
		return Object.keys(Object.fromEntries(items)).filter(
			(item) => items.get(item) === searchers.length
		);
	};

	function fillTeamCounters(searchers: string[]) {
		for (const searchedItem of searchers) {
			Object.keys(list).map((item) =>
				items.set(
					item,
					items.get(item) +
						(list[item].includes(searchedItem) ? 1 : 0)
				)
			);
		}
	}
};
