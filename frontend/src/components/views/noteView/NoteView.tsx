import type { FC } from 'react';

import './styles.scss';

const NoteView: FC = () => {
    const baseClassName = 'note-view';
    return (
        <div className={`${baseClassName}`}>
            <div className={`${baseClassName}__container`}>
                <div className={`${baseClassName}__sidebar`} />
                <div className={`${baseClassName}__note-editor`} />
            </div>
        </div>
    );
};

export default NoteView;
