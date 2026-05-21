import { useState } from "react";

const horoscopeData = {
  today: {
    label: "本日の運勢",
    date: "2026.05.20",
    scoreLabel: "今日の運勢スコア",
    signs: [
      {
        sign: "みずがめ座",
        score: 72,
        whisper: `無理に変わろうとせず、
「いつもの自分」を大切に。`,
        insight:
          "今日は安定感がテーマの日。新しい挑戦よりも、慣れた行動やルーティンを丁寧にこなすことで運気が整っていくよ。考えすぎなくて大丈夫。",
        action: "朝5分の深呼吸",
        color: "スモーキーブルー",
        colorNote: "落ち着きと信頼を引き寄せる色。",
      },
    ],
  },
  tomorrow: {
    label: "明日の運勢",
    date: "2026.05.21",
    scoreLabel: "明日の運勢スコア",
    signs: [
      {
        sign: "みずがめ座",
        score: 88,
        whisper: `明日は、少し自由に。
心が向くほうへ歩いてみて。`,
        insight:
          "明日は発想がやわらかく広がる日。いつものやり方に少しだけ余白を作ると、新しい気づきが入ってきそう。無理せず、楽しいほうを選んで。",
        action: "思いついたことをメモする",
        color: "フォグブルー",
        colorNote: "自由な発想を運ぶ色。",
      },
    ],
  },
};

export default function App() {
  const [tab, setTab] = useState("today");
  const currentDay = horoscopeData[tab];
  const current = currentDay.signs[0];

  return (
    <div
      className="min-h-screen w-full flex justify-center bg-[#120d0b] p-2"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="relative w-full max-w-[430px] overflow-hidden rounded-[32px] bg-[#211812] text-[#f8efe7] shadow-2xl border border-amber-100/10">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-100"
          style={{
            backgroundImage: "url('/sweet-whispers-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d0b]/10 via-[#1b1411]/10 to-[#ead8ca]/62" />

        <div className="relative z-10 px-4 pt-3 pb-3">
          <header className="flex items-center justify-between gap-2">
            <div>
              <h1 className="text-[22px] text-amber-100">
                Sweet Whispers
              </h1>
              <p className="text-[11px] italic text-amber-200/90">
                Horoscope
              </p>
            </div>

            <div className="rounded-[20px] bg-[#2d211c]/85 px-3 py-2 text-right">
              <p className="text-[12px] text-amber-50">
                毎日0時に更新されます
              </p>
            </div>
          </header>

          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setTab("today")}
              className={`flex-1 rounded-full py-2 ${
                tab === "today"
                  ? "bg-[#f6e4ce] text-[#3a261b]"
                  : "bg-[#352720] text-white"
              }`}
            >
              今日の運勢
            </button>

            <button
              onClick={() => setTab("tomorrow")}
              className={`flex-1 rounded-full py-2 ${
                tab === "tomorrow"
                  ? "bg-[#f6e4ce] text-[#3a261b]"
                  : "bg-[#352720] text-white"
              }`}
            >
              明日の運勢
            </button>
          </div>

          <section className="text-center mt-3">
            <p className="text-[13px] text-amber-100">
              {currentDay.date}
            </p>

            <h2 className="text-[38px] text-amber-50 mt-1">
              {current.sign}
            </h2>
          </section>

          <main className="mt-2 space-y-2">
            <section className="rounded-[22px] bg-[#fbf0e7] text-[#3c2a20] p-2 text-center">
              <p className="text-[17px]">
                ✿ {currentDay.scoreLabel}
              </p>

              <div className="flex items-end justify-center gap-1 mt-1">
                <span className="text-[40px] text-[#a54d34]">
                  {current.score}
                </span>
                <span className="text-[24px] text-[#8a5b47]">
                  /100
                </span>
              </div>
            </section>

            <section className="rounded-[22px] bg-[#d7b49e] text-[#2d1d16] p-3 text-center">
              <p className="italic text-[17px]">
                Whisper Message
              </p>

              <p className="text-[20px] whitespace-pre-line mt-1">
                {current.whisper}
              </p>
            </section>

            <section className="rounded-[22px] bg-[#fbf0e7] text-[#221713] p-3">
              <p className="italic text-[20px] text-center">
                Gentle Insight
              </p>

              <p className="text-[16px] mt-1 leading-[1.6]">
                {current.insight}
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
