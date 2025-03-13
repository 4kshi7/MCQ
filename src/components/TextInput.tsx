interface TextInputProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  function TextInput({ value, onChange }: TextInputProps) {
    return (
      <textarea
        rows={10}
        className="w-full max-w-2xl p-2 border border-gray-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  
  export default TextInput;
  