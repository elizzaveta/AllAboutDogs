import {GET} from "./rest/GET";

export default async function GetBreedInfo(id) {
    return GET("breeds/info/"+id);
}