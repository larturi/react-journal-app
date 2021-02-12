import { types } from "../../types/types";

describe('Pruebas con tipos', () => {
    
    test('debe tener estos tipos', () => {
        
        expect(types).toEqual({

            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError:    '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading:  '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew:         '[Notes] New note',
            notesActive:         '[Notes] Set active note',
            notesLoad:           '[Notes] Load notes',
            notesUpdated:        '[Notes] Updated note saved',
            notesFileUrl:        '[Notes] Updated image url',
            notesDelete:         '[Notes] Deleted note',
            notesLogoutClening:  '[Notes] Logout Clening',
        
        });

    })
    

});
