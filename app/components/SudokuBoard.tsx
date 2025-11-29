"use client";
import styles from "../page.module.css";

export default function SudokuBoard({ revealed }: { revealed: boolean }) {
  // Very small placeholder: if revealed, show a short sample puzzle; otherwise show masked cells
  const sample = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  return (
    <div className={styles.sudokuBoard}>
      {sample.map((row, rIdx) => (
        <div key={rIdx} className={styles.sudokuRow}>
          {row.map((cell, cIdx) => (
            <div key={cIdx} className={styles.sudokuCell}>
              {revealed ? (cell !== 0 ? cell : "·") : "•"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
