import { get } from "."
import { ContentType } from "../types/main";

export const getTest = async(): Promise<ContentType> => {
    const result = await get('../../public/test.json')
    return result
}