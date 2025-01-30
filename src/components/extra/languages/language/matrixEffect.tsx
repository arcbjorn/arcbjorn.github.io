import * as React from "react";

type MatrixColumn = {
  chars: string[];
  x: number;
  speed: number;
  head: number;
  length: number;
};

interface MatrixEffectProps {
  isHovered: boolean;
  level: number;
  languageToken: string;
}

const MatrixEffect: React.FC<MatrixEffectProps> = ({
  isHovered,
  level,
  languageToken,
}) => {
  const [matrixColumns, setMatrixColumns] = React.useState<MatrixColumn[]>([]);

  const getLanguageChars = (langToken: string): string => {
    switch (langToken) {
      case "extra.languages.russian":
        return "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
      case "extra.languages.english":
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      case "extra.languages.german":
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß";
      case "extra.languages.spanish":
        return "ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúü¡¿";
      case "extra.languages.portuguese":
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZÃÕÇáàâãçéêíóôõú";
      case "extra.languages.japanese":
        return "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
      case "extra.languages.swedish":
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖåäö";
      default:
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  };

  const getRandomChar = React.useCallback((langToken: string) => {
    const chars = getLanguageChars(langToken);
    return chars[Math.floor(Math.random() * chars.length)];
  }, []);

  const generateColumns = React.useCallback(() => {
    const columnWidth = 1.5;
    const availableWidth = Math.min(85, level);
    const maxColumns = Math.floor(85 / columnWidth);
    const activeColumns = Math.floor(availableWidth / columnWidth);
    const columnsToShow = Math.max(5, Math.min(maxColumns, activeColumns));

    return Array(columnsToShow)
      .fill(0)
      .map((_, index) => {
        const spacing = availableWidth / columnsToShow;
        return {
          chars: Array(6)
            .fill("")
            .map(() => getRandomChar(languageToken)),
          x: index * spacing,
          speed: 0.3 + Math.random() * 0.4,
          head: Math.random() * 50,
          length: 3 + Math.floor(Math.random() * 2),
        };
      });
  }, [languageToken, level, getRandomChar]);

  const updateColumns = React.useCallback(
    (prevColumns: MatrixColumn[]) => {
      return prevColumns.map((column) => {
        const newHead = (column.head + column.speed) % 50;

        const newChars = [...column.chars];
        if (Math.random() < 0.1) {
          const changeIndex = Math.floor(Math.random() * column.chars.length);
          newChars[changeIndex] = getRandomChar(languageToken);
        }

        return {
          ...column,
          head: newHead,
          chars: newChars,
        };
      });
    },
    [languageToken, getRandomChar]
  );

  React.useEffect(() => {
    if (isHovered) {
      setMatrixColumns(generateColumns());
      const interval = setInterval(() => {
        setMatrixColumns((prev) => updateColumns(prev));
      }, 80);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isHovered, generateColumns, updateColumns]);

  if (!isHovered) return null;

  return (
    <div
      className="matrixEffect"
      style={{
        width: "100%",
        height: "120%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {matrixColumns.map((column, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${column.x}%`,
            top: 0,
            height: "100%",
            fontSize: "14px",
            lineHeight: "14px",
            width: "1.5%",
            textAlign: "center",
          }}
        >
          {column.chars.map((char, j) => {
            const charPosition = (j + column.head) % 50;
            const isHead = j === Math.floor(column.head) % column.chars.length;
            const isTail =
              j ===
              (Math.floor(column.head) + column.length) % column.chars.length;
            return (
              <div
                key={j}
                style={{
                  position: "absolute",
                  top: `${charPosition * 10}%`,
                  left: 0,
                  right: 0,
                  color: "var(--bg)",
                  opacity: isHead ? 1 : isTail ? 0.1 : 0.5,
                  transform: isHead ? "scale(1.2)" : "scale(1)",
                  fontWeight: isHead ? "bold" : "normal",
                  textShadow: isHead ? "0 0 8px var(--bg)" : "none",
                }}
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MatrixEffect;
