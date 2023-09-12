import { ViewCardsType } from "component/SwitchingTypeCards/SwitchingTypeCards";
import { StateSchema } from "providers/storeProvider/StateSchema";

export const getViewCards = (state: StateSchema) => state.viewCards?.view || ViewCardsType.GRID;
