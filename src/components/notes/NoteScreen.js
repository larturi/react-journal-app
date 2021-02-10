import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title, id } = formValues;

    const dispatch = useDispatch();

    const activeId = useRef(note.id);
    const activeUrl = useRef(note.url);

    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

        if (note.url !== activeUrl.current) {
            reset(note);
            activeUrl.current = note.url;
        }
        
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting( id ));
    }

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
                                src={note.url}
                                alt="Imagen"
                            />
                        </div>

                    }


            </div>

            <button 
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Borrar
            </button>
            
        </div>
    )
}
