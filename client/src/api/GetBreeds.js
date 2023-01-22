import {GET} from "./rest/GET";

export default async function GetBreeds() {
    return GET("breeds");
}