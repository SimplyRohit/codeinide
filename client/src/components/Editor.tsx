// components/MonacoEditor.tsx
"use client";
import React from "react";
import { useMonaco, Editor } from "@monaco-editor/react";

const MonacoEditor: React.FC<any> = ({
  value,
  language = "javascript",
  onChange,
}) => {
  const monaco = useMonaco();

  return (
    <Editor
      // height="100vh"
      defaultLanguage={language}
      defaultValue={value || "// Your code here..."}
      onChange={(newValue: any, event: any) => {
        if (onChange) {
          onChange(newValue);
        }
      }}
      theme="vs-dark"
    />
  );
};

export default MonacoEditor;
