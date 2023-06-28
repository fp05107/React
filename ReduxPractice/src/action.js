import { INC, DEC } from "./actionTypes.js";

export const increament = (payload = 1) => ({ type: INC, payload });
export const decreament = (payload = 1) => ({ type: DEC, payload });
