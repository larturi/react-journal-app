import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                    <input 
                       type="text"
                       placeholder="Titulo"
                       className="notes__title-input"
                       autoComplete="off"
                    />

                    <textarea
                        placeholder="Que paso hoy?"
                        className="notes__textarea"
                    >
                    </textarea>

                    <div className="notes__image">
                        <img
                            src="http://www.imageonemri.ca/image/w2000-c5:2/files/58532088_l.jpg"
                            alt="Imagen"
                        />
                    </div>

            </div>
            
        </div>
    )
}
