import * as readlineSync from 'readline-sync';
import { randomInteger } from "remeda";

type Hand = "グー" | "チョキ" | "パー";

// ユーザーの手を取得する関数
const getUserChoice = (): Hand => {
  const choices = ["グー", "チョキ", "パー"];
  const userChoice: string = readlineSync.question("何を出しますか？(グー、チョキ、パー)：");

  if (userChoice && choices.includes(userChoice)) {
    return userChoice as Hand;
  } else {
    console.log("無効な選択です。");
    return getUserChoice();
  }
}

// コンピュータの手を取得する関数
const getComputerChoice = (): Hand => {
  const choices: Hand[] = ["グー", "チョキ", "パー"];
  const randomIndex = randomInteger(0, choices.length - 1);
  return choices[randomIndex];
}

// 勝敗を判定する関数
const determineWinner = (userChoice: Hand, computerChoice: Hand): string => {
  if (userChoice === computerChoice) {
    return "あいこ！";
  } else if (
    (userChoice === "グー" && computerChoice === "チョキ") ||
    (userChoice === "チョキ" && computerChoice === "パー") ||
    (userChoice === "パー" && computerChoice === "グー")
  ) {
    return "あなたの勝ち！";
  } else {
    return "あなたの負け。。";
  }
}

// ゲームを実行する関数
const playGame = (): void => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`あなたの選択：${userChoice}`);
  console.log(`コンピュータの選択：${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

// ゲームを開始
playGame();
