"use client";
import { Wallet } from "@coinbase/onchainkit/wallet";
import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>Sudoku Duel</div>
      <div className={styles.walletWrapper}> <Wallet /> </div>
    </header>
  );
}
