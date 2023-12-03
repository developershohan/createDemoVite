export const checkPath = (path,route)=>{
const pathArr = path.split("/")
return pathArr.includes(route)
}