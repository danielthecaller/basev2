"use client";
import { useState } from "react";
import SudokuBoard from "./SudokuBoard";
import styles from "../page.module.css";

export default function GameView({
  bet,
  onExit,
}: {
  bet: number;
  onExit: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [winner, setWinner] = useState<"A" | "B" | null>(null);

  function start() {
    setStarted(true);
    setRevealed(false);
    setWinner(null);
  }

  function reveal() {
    setRevealed(true);
  }

  function decideWinner() {
    const pick = Math.random() < 0.5 ? "A" : "B";
    setWinner(pick);
  }

  return (
    <section className={styles.gameView}>
      <div className={styles.topBar}>
        <div>Bet: <strong>{bet} ETH</strong></div>
        <div>Prize (winner): <strong>{(bet * 1.8).toFixed(4)} ETH</strong></div>
      </div>

      <div className={styles.boardsRow}>
        <div className={styles.playerBox}>
          <div className={styles.playerHeader}>Player A</div>
          <SudokuBoard revealed={revealed} />
        </div>

        <div className={styles.playerBox}>
          <div className={styles.playerHeader}>Player B</div>
          <SudokuBoard revealed={revealed} />
        </div>
      </div>

      <div className={styles.controls}>
        {!started ? (
          <button className={styles.primary} onClick={start}>
            Start game
          </button>
        ) : (
          <>
            <button className={styles.primary} onClick={reveal} disabled={revealed}>
              Reveal puzzles
            </button>
            <button className={styles.secondary} onClick={decideWinner}>
              Decide winner
            </button>
            <button className={styles.ghost} onClick={() => onExit()}>
              Exit to lobby
            </button>
          </>
        )}
      </div>

      {winner && (
        <div className={styles.result}>
          <strong>Winner: Player {winner}</strong>
          <div>Prize paid: {((bet || 0) * 1.8).toFixed(4)} ETH</div>
        </div>
      )}
    </section>
  );
}
