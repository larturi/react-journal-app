import React from 'react';
import { useDispatch }  from 'react-redux';

import moment from 'moment';

import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ note, id, date, title, body, url}) => {

    const noteDate = moment(date);
    const fixUrl = url ? url : 'http://www.micreate.eu/wp-content/img/researchers/default.png';

    const dispatch = useDispatch();

    const handleEnterClick = () => {
        dispatch(activeNote(id, note));
    }

    return (
        <div 
            className="journal__entry pointer"
            onClick={handleEnterClick}
        >

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${fixUrl})`
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>

        
    )
}
