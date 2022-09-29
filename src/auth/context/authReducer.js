import { types } from "../types/types";

export const authRequired = (state= {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                logged:true,
                name: action.payload
            };
        case types.logout:
            return {
               logged:false,  
            };
            
        default:
            return state;
    }
}