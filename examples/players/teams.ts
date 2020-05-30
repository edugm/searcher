import list from "./teamsAndPlayers";
import { SearcherFunctor } from "../../searcher.functor";
import Searcher from "../../searcher.class";

const searcher = new Searcher(list, ["canizares", "soldado"]);
console.log(searcher.result());

console.log(SearcherFunctor(list, ["canizares", "soldado"]));
