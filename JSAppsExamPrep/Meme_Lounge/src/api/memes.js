import { get, post } from "./api.js";

export async function getAllMemems(){
    return get('/data/memes?sortBy=_createdOn%20desc')
}

export async function createMeme(meme){
    return post('/data/memes', meme);
}

export async function getMemeById(id){
    return get('/data/memes/' + id);
}