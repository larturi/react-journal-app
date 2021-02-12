import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer.js', () => {
   
    test('debe realizar el login', () => {
        
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Pedro',
            }
        };

        const state = authReducer(initState, action);

        expect(state).toEqual( {
            uid: 'abc',
            name: 'Pedro',
        });

    });


    test('debe realizar el logout', () => {
        
        const initState = {
            uid: 'abc',
            name: 'Pedro',
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);

        expect(state).toEqual( {});

    });

    test('no debe hacer cambios en el state', () => {
        
        const initState = {
            uid: 'abcsdsdsdsdsdsds',
            name: 'Pedro',
        };

        const action = {
            type: 'asasasasas',
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);

    });
    
});
