import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlmixed/htmlmixed'; // Import HTML mode
import 'codemirror/theme/monokai.css'; // Import a theme, e.g., monokai

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
    // Define the handler for editor changes
    const handleEditorChange = (editor: any, data: any, value: string) => {
        onChange(value);
    };

    // Render the CodeMirror component directly without additional div
    return (
        <CodeMirror
        className='border-r-8 h-[140%]'
            value={value}
            cursor={{
                line: 5,
                ch: 10
            }}
            options={{
                mode: 'htmlmixed', // Set mode to HTML
                theme: 'monokai', // Set theme to monokai
                lineNumbers: true,
            }}
            onBeforeChange={handleEditorChange}
        />
    );
};

export default CodeEditor;
