"use client";
import { useState } from "react";
import styles from "../page.module.css";

export default function Lobby({ onStartGame }: { onStartGame: (bet: number) => void }) {
  const [bet, setBet] = useState<number>(0.01);

  return (
    <section className={styles.lobby}>
      <div className={styles.card}>
        <h2>Welcome to Sudoku Duel</h2>
        <p>
          Two players will receive identical Sudoku puzzles. Both place the same
          ETH bid (kept secret until start). Winner receives 1.8x the bid.
        </p>

        <label className={styles.control}>
          <span>Bid amount (ETH)</span>
          <input
            type="number"
            step="0.01"
            min="0"
            value={bet}
            onChange={(e) => setBet(Number(e.target.value))}
          />
        </label>

        <div className={styles.actions}>
          <button className={styles.primary} onClick={() => onStartGame(bet)}>
            Create game
          </button>
          <button className={styles.secondary} onClick={() => onStartGame(bet)}>
            Join game
          </button>
        </div>

        <small className={styles.note}>
          Note: This is a UI prototype — on-chain flow and fairness will be
          implemented next.
        </small>
      </div>
    </section>
  );
}
