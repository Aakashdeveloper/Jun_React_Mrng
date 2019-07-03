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