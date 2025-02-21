import Editor  from '@monaco-editor/react';
import { useState } from 'react';

const CodeEditor = () => {
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('vs-dark');

    const languageOptions = ['javascript', 'python', 'java', 'cpp'];
    const themeOptions = ['light', 'vs-dark', 'hc-black'];

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="p-4 bg-gray-100 border-b border-gray-300">
                <label className="mr-4">
                    Language:
                    <select 
                        value={language}
                        onChange={handleLanguageChange}
                        className="ml-2 p-1 border border-gray-300 rounded">
                        {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="mr-4">
                    Theme:
                    <select 
                        value={theme}
                        onChange={handleThemeChange}
                        className="ml-2 p-1 border border-gray-300 rounded">
                        {themeOptions.map((thm) => (
                            <option key={thm} value={thm}>
                                {thm}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="flex-1">
                <Editor 
                    height="100%"
                    defaultLanguage="javascript"
                    defaultValue="// Start coding here..."
                    language={language}
                    theme={theme}
                />
            </div>
        </div>
    );
};

export default CodeEditor;
