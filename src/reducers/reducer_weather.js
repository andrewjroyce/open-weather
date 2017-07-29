import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action){
    switch (action.type){
    case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; // ... this might be an array, take all of them and put it into new array [city,city,city] not city, [city,city]    
    }
    return state;
}
