import { RichTextEditor } from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import type { FC } from 'react';

import './styles.scss';
import '@mantine/tiptap/styles.css';

const NoteView: FC = () => {
    const defaultContent = '<p>This is the editor</p>';
    const editor = useEditor({
        content: defaultContent,
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            Subscript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] })
        ]
    });
    const baseClassName = 'note-view';
    return (
        <div className={`${baseClassName}`}>
            <div className={`${baseClassName}__container`}>
                <div className={`${baseClassName}__sidebar`} />
                <div className={`${baseClassName}__note-editor`}>
                    <RichTextEditor editor={editor}>
                        <RichTextEditor.Toolbar>
                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Bold />
                                <RichTextEditor.Italic />
                                <RichTextEditor.Underline />
                                <RichTextEditor.Strikethrough />
                                <RichTextEditor.ClearFormatting />
                                <RichTextEditor.Highlight />
                                <RichTextEditor.Code />
                            </RichTextEditor.ControlsGroup>
                        </RichTextEditor.Toolbar>
                        <RichTextEditor.Content />
                    </RichTextEditor>
                </div>
            </div>
        </div>
    );
};

export default NoteView;
