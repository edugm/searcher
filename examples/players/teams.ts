import list from "./teamsAndPlayers";
import { buildSearcherFunctor } from "../../buildSearcherFunctor";
import Searcher from "../../searcher.class";

const searcher = new Searcher(list, ["canizares", "soldado"]);
console.log(searcher.result());

const handlerSearcher = buildSearcherFunctor(list);
console.log(handlerSearcher(["canizares", "soldado"]));
