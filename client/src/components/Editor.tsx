"use client";
import React, { useEffect } from "react";
import { useMonaco, Editor } from "@monaco-editor/react";

const MonacoEditor: React.FC<any> = ({
  value,
  language = "javascript",
  onChange,
}) => {
  const monaco = useMonaco();


  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("custom-dark", {
        base: "vs-dark", 
        inherit: true, 
        rules: [],
        colors: {
          "editor.background": "#1F1F1F", 
        },
      });
      monaco.editor.setTheme("custom-dark");
    }
  }, [monaco]);

  return (
    <Editor
      language={language}
      value={value}
      onChange={(newValue: any, event: any) => {
        if (onChange) {
          onChange(newValue);
        }
      }}
      theme="custom-dark" 
    />
  );
};

export default MonacoEditor;
