import List from "./list.interface";

export default class Searcher {
	private items = new Map();

	constructor(private list: List, private searchers: string[]) {
		this.initTeamCounters();
		this.fillTeamCounters();
	}

	private initTeamCounters() {
		for (const item of Object.keys(this.list)) {
			this.items.set(item, 0);
		}
	}

	private fillTeamCounters() {
		for (const searchedItem of this.searchers) {
			Object.keys(this.list).map((item) =>
				this.items.set(
					item,
					this.items.get(item) +
						(this.list[item].includes(searchedItem) ? 1 : 0)
				)
			);
		}
	}

	public result() {
		return Object.keys(Object.fromEntries(this.items)).filter(
			(item) => this.items.get(item) === this.searchers.length
		);
	}
}
