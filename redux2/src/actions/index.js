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