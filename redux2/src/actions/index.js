const URL = 'http://localhost:8900'

export function latestNews(){
    const output = fetch(`${URL}/articles?_end=3`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${URL}/articles?_start=3&_end=10`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_ARTICLES',
        payload:output
    }
}

export function GalleryData(){
    const output = fetch(`${URL}/galleries?_limit=2`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}

export function selectedNews(id){
    const output = fetch(`${URL}/articles?id=${id}`,{
        method:'GET'
    })
    .then(response => response.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}

export function clearSelecetdNews(){
    return{
        type:'CLEAR_NEWS',
        payload:[]
    }
}

export function handleLikes(array,id){
    const output = fetch(`${URL}/articles/${id}`,{
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({likes:array})
    })
    .then(response => response.json())
    .catch(console.log('gggg'))
    
    return{
        type:'HANDLE_LIKES',
        payload:output
    }
}


export function postData(){

}