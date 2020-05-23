import Searcher from "../../searcher.class";
import list from "./teamsAndPlayers";

const searcher = new Searcher(list, ['canizares', 'soldado']);
console.log(searcher.result())