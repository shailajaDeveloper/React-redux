const URL_ROOT = 'http://localhost:6788';

export function getCars(keywords){
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`,
    {method:'GET'})
    return{
        type:'SEARCH_CARS',
        payload:request
    }
    console.log(`search value is ${keywords}`)
}