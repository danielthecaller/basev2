"use client";
import { useState } from "react";
import Header from "./components/Header";
import styles from "./page.module.css";

type LobbyProps = {
  onStartGame: (bet: number) => void;
};

function Lobby({ onStartGame }: LobbyProps) {
  const [betInput, setBetInput] = useState<number>(1);

  return (
    <div>
      <h2>Lobby</h2>
      <label>
        Bet (ETH):
        <input
          type="number"
          min="0"
          step="0.01"
          value={betInput}
          onChange={(e) => setBetInput(Number(e.target.value))}
        />
      </label>
      <button onClick={() => onStartGame(betInput)}>Start Game</button>
    </div>
  );
}

type GameViewProps = {
  bet: number;
  onExit: () => void;
};

function GameView({ bet, onExit }: GameViewProps) {
  return (
    <div>
      <h2>Game</h2>
      <p>Bet: {bet} ETH</p>
      <button onClick={onExit}>Exit to Lobby</button>
    </div>
  );
}

export default function Page() {
  const [screen, setScreen] = useState<"lobby" | "game">("lobby");
  const [betEth, setBetEth] = useState<number | null>(null);

  function startGame(bet: number) {
    setBetEth(bet);
    setScreen("game");
  }

  function goToLobby() {
    setScreen("lobby");
    setBetEth(null);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        {screen === "lobby" ? (
          <Lobby onStartGame={startGame} />
        ) : (
          <GameView bet={betEth || 0} onExit={goToLobby} />
        )}
      </main>

      <footer className={styles.footer}>
        <small>
          Two-player Sudoku betting (prototype) — winner receives 1.8x the bid.
        </small>
      </footer>
    </div>
  );
}

