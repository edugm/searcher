export interface List {
    [key: string]: string[];
}

export default class Searcher {
    private teams = new Map();

    constructor(
        private list: List,
        private searchers: string[],
    ) {
        this.initTeamCounters();
        this.fillTeamCounters();
    }

    private initTeamCounters () {
        for(const team of Object.keys(this.list)) {
            this.teams.set(team, 0);
        }
    }

    private fillTeamCounters() {
        for (const player of this.searchers) {
            Object.keys(this.list).map((teamName) => (
                this.teams.set(teamName, (this.teams.get(teamName) + (
                    this.list[teamName].includes(player) ? 1 : 0
                )))
            ));
        }
    }

    public result()  {
        return Object.keys(Object.fromEntries(this.teams))
            .filter((team) => this.teams.get(team) === this.searchers.length)
    }
}
