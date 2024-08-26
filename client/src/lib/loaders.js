import apiRequest from "./apiRequest"
import { defer } from "react-router-dom";
export const singlePageLoader = async ({request,params})=>{

     const res = await apiRequest(`/posts/${params.id}`);
     console.log(res.data);
     return res.data;
}

export const ListPageLoader = async({request,params})=>{
     const query = request.url.split("?")[1];
     
     const postPromise  =  apiRequest("/posts?"+query);
     return defer({
          postResponse:postPromise,
     }) 
}
export const profilePageLoader = async()=>{
     const postPromise = apiRequest("/users/profilePosts");
     return defer({
          postResponse:postPromise,
     })
}