import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    const dispatch = useDispatch();

    const activeId = useRef(note.id);

    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
        
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                    <input 
                       type="text"
                       placeholder="Titulo"
                       className="notes__title-input"
                       autoComplete="off"
                       value={title}
                       name="title"
                       onChange={handleInputChange}
                    />

                    <textarea
                        placeholder="Que paso hoy?"
                        className="notes__textarea"
                        value={body}
                        name="body"
                        onChange={handleInputChange}
                    >
                    </textarea>

                    {

                        (note.url) && 
                        <div className="notes__image">
                            <img
                                src="http://www.imageonemri.ca/image/w2000-c5:2/files/58532088_l.jpg"
                                alt="Imagen"
                            />
                        </div>

                    }


            </div>
            
        </div>
    )
}
