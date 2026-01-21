import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  showCursor?: boolean;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
  style = {},
  showCursor = true
}) => {
  const { displayText, isComplete } = useTypewriter({ text, speed, delay });

  return (
    <span className={className} style={style}>
      {displayText}
      {showCursor && !isComplete && (
        <span 
          style={{ 
            animation: 'blink 1s infinite',
            marginLeft: '2px'
          }}
        >
          |
        </span>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypewriterEffect;
