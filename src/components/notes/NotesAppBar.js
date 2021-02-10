import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/es';

import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    moment.locale('es');

    const today = moment(Date.now());

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch(startSaveNote(active));
    };

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            dispatch(startUploading(file));
            document.querySelector('#fileSelector').value = '';
        }
    };

    return (
        <div className="notes__appbar">

            <span>{ today.format('D') + ' de ' + today.format('MMMM') + ' de ' + today.format('YYYY')}</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>

                <button 
                    className="btn"
                    onClick={handlePictureClick}
                >
                    Imagen
                </button>

                <button 
                   className="btn"
                   onClick={ handleSave }
                >
                    Guardar
                </button>

            </div>
            
        </div>
    )
}
