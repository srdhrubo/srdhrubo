import React, { useState, useEffect, useCallback } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeText = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting text
      setCurrentText((prev) => prev.slice(0, -1));
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // Typing text
      setCurrentText(currentWord.slice(0, currentText.length + 1));
      if (currentText === currentWord) {
        // Finished typing, wait before deleting
        setIsDeleting(true);
      }
    }
  }, [currentWordIndex, words, isDeleting, currentText]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        typeText();
      },
      isDeleting
        ? deletingSpeed
        : currentText === words[currentWordIndex]
        ? delayBetweenWords
        : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    typeText,
    words,
    currentWordIndex,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span>
      <span className="mr-1">{currentText}</span>
      <span className="animate-blink">|</span>
    </span>
  );
}
