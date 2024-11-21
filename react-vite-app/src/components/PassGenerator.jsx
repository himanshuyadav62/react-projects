import { useEffect, useState, useCallback, useRef } from "react";

export default function PassGenerator() {
  const [password, setPassword] = useState(() => Math.random().toString(36).slice(-8));
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        passwordRef.current?.select();
        setCopyButtonText("✔️");
        setTimeout(() => {
          setCopyButtonText("Copy");
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, [password]);

  const generatePassword = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
  }, [passwordLength, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeNumbers, includeSymbols, generatePassword]);

  return (
    <div>
      <h1>Password Generator</h1>
      <div className="pass-container">
        <div className="m-5 w-full flex items-center">
          <input
            type="text"
            className="bg-grey-500 border-2 border-black rounded-lg m-2 p-2 flex-grow"
            ref={passwordRef}
            value={password}
            readOnly
          />
          <button
            className="bg-blue-500 text-white m-3 p-3 hover:bg-blue-700 rounded-xl mt-2 ml-2"
            id="copy-btn"
            onClick={copyToClipboard}
          >
            {copyButtonText}
          </button>
        </div>
        <div className="m-5">
          <input
            type="range"
            min="6"
            max="32"
            value={passwordLength}
            className="m-2"
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <span>{`Length(${passwordLength})`}</span>
          <input
            type="checkbox"
            id="numbers"
            className="m-2"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <label htmlFor="numbers">Include Numbers</label>
          <input
            type="checkbox"
            id="symbols"
            className="m-2"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
    </div>
  );
}