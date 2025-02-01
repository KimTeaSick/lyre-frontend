import ky from "ky"

export const get = async(url:string) => {
    const result = await ky.get(url).text()
    return JSON.parse(result)
}