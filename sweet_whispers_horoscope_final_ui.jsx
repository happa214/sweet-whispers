import { useState } from "react";

const horoscopeData = {
  today: {
    label: "本日の運勢",
    date: "2026.05.20",
    scoreLabel: "今日の運勢スコア",
    signs: [
      { sign: "おひつじ座", score: 78, whisper: `急がなくても大丈夫。
丁寧さが、今日のあなたを守ってくれるよ。`, insight: "今日は勢いよりも、ひと呼吸おくことが大切な日。すぐに答えを出そうとしなくても大丈夫。小さな確認を重ねるほど、心も流れも整っていくよ。", action: "温かい飲み物をゆっくり飲む", color: "ウォームベージュ", colorNote: "気持ちをやわらげる色。" },
      { sign: "おうし座", score: 84, whisper: `安心できる場所が、
今日のあなたの力になる。`, insight: "いつもの場所、好きな香り、慣れた手順が心を落ち着かせてくれる日。無理に新しいことを増やさず、心地よさを選ぶことで運気がゆっくり満ちていくよ。", action: "お気に入りの音楽を流す", color: "オリーブブラウン", colorNote: "穏やかさを育てる色。" },
      { sign: "ふたご座", score: 69, whisper: `言葉を急がず、
やさしく選んでみて。`, insight: "今日は少しだけ誤解が生まれやすいかもしれない。でも、あなたのやわらかい一言が空気を変えてくれる。全部を説明しようとせず、伝えたい気持ちだけを大切にして。", action: "短いメモを書いて心を整理する", color: "ミストグレー", colorNote: "考えを静める色。" },
      { sign: "かに座", score: 88, whisper: `やさしさは、
ちゃんと巡っていく。`, insight: "誰かのためにしたことが、思わぬ形であなたを温めてくれそうな日。感情を押し込めず、うれしい時は素直に受け取っていいよ。", action: "大切な人へ短い言葉を送る", color: "ミルクホワイト", colorNote: "安心を広げる色。" },
      { sign: "しし座", score: 81, whisper: `あなたらしい光は、
静かな場所でも輝いてる。`, insight: "今日は目立とうとしなくても、自然体のあなたが伝わる日。無理に強く見せなくていい。落ち着いた姿勢そのものが、まわりに安心感を与えてくれるよ。", action: "窓を開けて空気を入れ替える", color: "アンバーゴールド", colorNote: "自信を灯す色。" },
      { sign: "おとめ座", score: 73, whisper: `完璧じゃなくていい。
今日を終えられれば十分。`, insight: "細かいところが気になりやすい日。でも今日は、七割できたら合格にしてあげて。少しゆるめることで、むしろ大切なことが見えてくるよ。", action: "机の上を3分だけ整える", color: "ナチュラルリネン", colorNote: "心を軽くする色。" },
      { sign: "てんびん座", score: 86, whisper: `穏やかな会話が、
心を温めてくれる。`, insight: "今日は人との空気がやわらかくなりやすい日。頑張って盛り上げなくても大丈夫。一緒にいて安心できる、その雰囲気があなたの魅力になるよ。", action: "夜空を少し眺める", color: "ダスティピンク", colorNote: "優しさを引き出す色。" },
      { sign: "さそり座", score: 75, whisper: `静かな時間が、
あなたを回復させる。`, insight: "今日は無理に人に合わせなくていい日。少し距離を取ることで、本当に大切な気持ちが見えてきそう。静けさは逃げではなく、回復の時間だよ。", action: "ぬるめのお風呂に入る", color: "ディープネイビー", colorNote: "深く休ませる色。" },
      { sign: "いて座", score: 83, whisper: `小さなワクワクを、
ちゃんと拾ってあげて。`, insight: "今日は偶然の発見が心を軽くしてくれる日。いつもと違う道、見慣れない景色、小さな寄り道。大きく変えなくても、新しい風は入ってくるよ。", action: "いつもと違う音楽を聴く", color: "テラコッタ", colorNote: "ぬくもりを運ぶ色。" },
      { sign: "やぎ座", score: 80, whisper: `積み重ねてきたものは、
ちゃんと力になってる。`, insight: "今日は結果を急がず、続けてきたことを信じたい日。派手な変化がなくても、あなたの中には確かに育っているものがあるよ。", action: "小さな作業を10分だけ進める", color: "ウッドブラウン", colorNote: "土台を整える色。" },
      { sign: "みずがめ座", score: 72, whisper: `無理に変わろうとせず、
「いつもの自分」を大切に。`, insight: "今日は安定感がテーマの日。新しい挑戦よりも、慣れた行動やルーティンを丁寧にこなすことで運気が整っていくよ。考えすぎなくて大丈夫。", action: "朝5分の深呼吸", color: "スモーキーブルー", colorNote: "落ち着きと信頼を引き寄せる色。" },
      { sign: "うお座", score: 91, whisper: `今日は心のままに、
やさしく過ごして。`, insight: "感性がとてもやわらかく開く日。音楽や言葉、小さな景色に癒されそう。頑張るより、感じることを大切にすると心が満たされるよ。", action: "好きな香りを部屋に広げる", color: "ムーンシルバー", colorNote: "感性を澄ませる色。" },
    ],
  },
  tomorrow: {
    label: "明日の運勢",
    date: "2026.05.21",
    scoreLabel: "明日の運勢スコア",
    signs: [
      { sign: "おひつじ座", score: 82, whisper: `明日は、少しだけ前へ。
でも急がなくていいよ。`, insight: "新しい一歩を踏み出しやすい日。ただし大きく動くより、できることを一つ選ぶほうが心地よく進めそう。あなたのペースを守ってね。", action: "明日の最初の予定を一つ決める", color: "シナモン", colorNote: "勇気をやさしく灯す色。" },
      { sign: "おうし座", score: 76, whisper: `心地よさを選ぶことは、
わがままじゃない。`, insight: "明日は自分の感覚を大切にしたい日。周りに合わせすぎるより、落ち着ける選択をしていいよ。小さな安心が、明日の支えになる。", action: "寝る前に部屋を少し整える", color: "ハニーブラウン", colorNote: "安心を包む色。" },
      { sign: "ふたご座", score: 85, whisper: `軽やかな言葉が、
明日の扉を開いてくれる。`, insight: "明日は会話や連絡にやさしい追い風が吹きそう。深く考えすぎず、短い言葉で大丈夫。あなたの一言が誰かの心を軽くするよ。", action: "気になる人へ短い返信をする", color: "ペールブルー", colorNote: "言葉を澄ませる色。" },
      { sign: "かに座", score: 79, whisper: `明日は、自分にも
やさしくしてあげて。`, insight: "人の気持ちに寄り添える日だけど、全部を抱え込まなくて大丈夫。優しさを外へ向ける前に、まず自分の心も温めてね。", action: "温かいスープを飲む", color: "クリームベージュ", colorNote: "心をほぐす色。" },
      { sign: "しし座", score: 87, whisper: `あなたの明るさは、
誰かの安心になる。`, insight: "明日はあなたの存在感が自然に伝わる日。大きなことをしなくても、笑顔や穏やかな態度がまわりを明るくしてくれるよ。", action: "朝、鏡の前で軽く微笑む", color: "キャンドルオレンジ", colorNote: "温かさを広げる色。" },
      { sign: "おとめ座", score: 78, whisper: `整えるほど、
心も静かになっていく。`, insight: "明日は小さな整理が運気を整えてくれる日。予定、机、気持ち。どれか一つでいいから、余白を作ってあげよう。", action: "明日の持ち物を先に用意する", color: "セージグリーン", colorNote: "静けさを育てる色。" },
      { sign: "てんびん座", score: 74, whisper: `無理に合わせなくても、
優しさは伝わるよ。`, insight: "明日は人との距離感を丁寧に見たい日。気を使いすぎる前に、自分の心にも聞いてみて。ほどよい距離が、関係をやさしく守ってくれる。", action: "一人の時間を15分作る", color: "ローズベージュ", colorNote: "距離感を整える色。" },
      { sign: "さそり座", score: 89, whisper: `静かな集中が、
明日のあなたを助けてくれる。`, insight: "明日は深く向き合う力が高まりそう。焦って広げるより、一つのことに静かに集中すると満足感が生まれるよ。", action: "スマホを置いて10分集中する", color: "ワインブラウン", colorNote: "集中を深める色。" },
      { sign: "いて座", score: 77, whisper: `遠くへ行かなくても、
小さな冒険はできる。`, insight: "明日は気分転換が運気を軽くしてくれる日。大きな予定がなくても、違う道や新しい本、初めての味が心を広げてくれるよ。", action: "普段選ばないものを一つ選ぶ", color: "キャラメル", colorNote: "遊び心を呼ぶ色。" },
      { sign: "やぎ座", score: 84, whisper: `明日の一歩は、
静かでも確かな前進。`, insight: "明日は堅実な行動が力になる日。すぐに結果が見えなくても大丈夫。丁寧に積み上げたものは、ちゃんと未来へ残るよ。", action: "朝いちばんに小さな用事を済ませる", color: "カフェブラウン", colorNote: "安定を支える色。" },
      { sign: "みずがめ座", score: 88, whisper: `明日は、少し自由に。
心が向くほうへ歩いてみて。`, insight: "明日は発想がやわらかく広がる日。いつものやり方に少しだけ余白を作ると、新しい気づきが入ってきそう。無理せず、楽しいほうを選んで。", action: "思いついたことをメモする", color: "フォグブルー", colorNote: "自由な発想を運ぶ色。" },
      { sign: "うお座", score: 80, whisper: `明日は、心の声を
そっと信じてみて。`, insight: "明日は直感がやさしく働く日。理由はわからなくても、心が落ち着く選択には意味がありそう。静かな時間を大切にしてね。", action: "眠る前に深呼吸を3回する", color: "ラベンダーグレー", colorNote: "心を澄ませる色。" },
    ],
  },
};

export default function SweetWhispersHoroscope() {
  const [tab, setTab] = useState("today");
  const [signIndex, setSignIndex] = useState(10);
  const currentDay = horoscopeData[tab];
  const current = currentDay.signs[signIndex];

  const prevSign = () => setSignIndex((signIndex - 1 + currentDay.signs.length) % currentDay.signs.length);
  const nextSign = () => setSignIndex((signIndex + 1) % currentDay.signs.length);

  const changeTab = (nextTab) => {
    setTab(nextTab);
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center bg-[#120d0b] p-2"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="relative w-full max-w-[430px] overflow-hidden rounded-[32px] bg-[#211812] text-[#f8efe7] shadow-2xl border border-amber-100/10">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-100 scale-[1.0]"
          style={{
            backgroundImage:
              "url('/sweet-whispers-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d0b]/10 via-[#1b1411]/10 to-[#ead8ca]/62" />
        <div className="absolute inset-0 bg-[#2b1d16]/5" />

        <div className="relative z-10 px-4 pt-3 pb-3">
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 max-h-[58px] overflow-hidden">
              <div className="text-[28px] leading-none text-amber-100">☾</div>
              <div>
                <h1 className="text-[22px] leading-[0.82] text-amber-100 tracking-[0.08em]" style={{fontFamily:'Cormorant Garamond, Georgia, serif'}}>
                  Sweet Whispers
                </h1>
                <p className="text-[11px] italic text-amber-200/90 mt-0.5 tracking-[0.16em] flex items-center gap-1" style={{fontFamily:'Cormorant Garamond, Georgia, serif'}}>
                  <span className="text-amber-200/70">──⌘</span>
                  <span>Horoscope</span>
                  <span className="text-amber-200/70">⌘──</span>
                </p>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#2d211c]/85 border border-amber-100/15 px-3 py-2 text-right backdrop-blur-md shadow-lg min-h-[58px] flex flex-col justify-center">
              <p className="text-[12px] leading-tight text-amber-50 whitespace-nowrap">
                毎日0時に更新されます
              </p>
              <p className="text-[11px] leading-tight text-amber-100/70 mt-1 whitespace-nowrap">
                Updated daily at midnight
              </p>
            </div>
          </header>

          <div className="mt-3 mx-5 rounded-full bg-[#352720]/75 border border-amber-100/10 p-[3px] flex backdrop-blur-md shadow-lg">
            <button
              onClick={() => changeTab("today")}
              className={`flex-1 rounded-full py-1.5 leading-none flex flex-col items-center justify-center transition ${tab === "today" ? "bg-[#f6e4ce] text-[#3a261b] shadow-md" : "text-amber-50/90"}`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[13px]">☀</span>
                <span className="text-[16px] leading-[1.05]">今日の運勢</span>
              </div>
              <div className="text-[10px] italic mt-0.5">Today</div>
            </button>
            <button
              onClick={() => changeTab("tomorrow")}
              className={`flex-1 rounded-full py-1.5 leading-none flex flex-col items-center justify-center transition ${tab === "tomorrow" ? "bg-[#f6e4ce] text-[#3a261b] shadow-md" : "text-amber-50/90"}`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[13px]">☾</span>
                <span className="text-[16px] leading-[1.05]">明日の運勢</span>
              </div>
              <div className="text-[10px] italic mt-0.5">Tomorrow</div>
            </button>
          </div>

          <section className="relative text-center mt-2 pb-1">
            <p className="text-[14px] leading-tight text-amber-100/95">{currentDay.label}</p>
            <p className="text-[13px] leading-tight text-amber-100/85 mt-0.5">{currentDay.date}</p>

            <div className="flex items-center justify-center gap-3 mt-2">
              <button onClick={prevSign} className="w-7 h-7 rounded-full bg-[#352720]/80 text-amber-100 text-[16px] leading-none">‹</button>
              <h2 className="text-[38px] leading-none font-light text-amber-50 tracking-wide min-w-[180px]">
                {current.sign}
              </h2>
              <button onClick={nextSign} className="w-7 h-7 rounded-full bg-[#352720]/80 text-amber-100 text-[16px] leading-none">›</button>
            </div>

            <p className="italic text-[15px] leading-tight text-amber-100 mt-1">
              Gentle words for your heart
            </p>
            <p className="text-[10px] leading-tight text-stone-100/90 mt-0.5">
              AIがあなたの運勢を優しく読み解きました
            </p>
          </section>

          <main className="mt-1.5 space-y-2">
            <section className="rounded-[22px] bg-[#fbf0e7] text-[#3c2a20] p-1 shadow-xl">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="min-w-0">
                  <p className="text-[17px] leading-tight">✿ {currentDay.scoreLabel}</p>
                  <div className="flex items-end justify-center gap-1 mt-1">
                    <span className="text-[40px] leading-none text-[#a54d34]">{current.score}</span>
                    <span className="text-[24px] mb-1 text-[#8a5b47]">/100</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 mx-3 h-2 rounded-full bg-[#eadbd0] overflow-hidden">
                <div className="h-full rounded-full bg-[#ec6d63]" style={{ width: `${current.score}%` }} />
              </div>
            </section>

            <section className="rounded-[22px] bg-[#d7b49e] text-[#2d1d16] p-2 shadow-xl text-center">
              <div className="w-full">
                <p className="italic text-[17px] leading-tight text-[#2d1d16]">Whisper Message</p>
                <p className="text-[20px] leading-[1.2] mt-1 text-[#2d1d16] whitespace-pre-line">
                  {current.whisper}
                </p>
              </div>
            </section>

            <section className="rounded-[22px] bg-[#fbf0e7] text-[#221713] p-2 flex justify-between gap-2 shadow-xl text-center">
              <div className="flex-1">
                <p className="italic text-[21px] leading-tight font-semibold">Gentle Insight</p>
                <p className="text-[16.5px] leading-[1.58] mt-1">
                  {current.insight}
                </p>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-2">
              <section className="rounded-[20px] bg-[#d7b49e] text-[#2d1d16] p-1 shadow-xl min-h-[40px] text-center">
                <p className="italic text-[13px] leading-tight">Gentle Action</p>
                <p className="text-[14px] leading-tight mt-1">{current.action}</p>
                <p className="text-[12px] leading-[1.2] mt-1 text-[#4b3429]">
                  今日の心を整える小さな行動。
                </p>
              </section>

              <section className="rounded-[20px] bg-[#d7b49e] text-[#2d1d16] p-1 shadow-xl min-h-[40px] text-center">
                <p className="italic text-[13px] leading-tight">Lucky Color</p>
                <p className="text-[14px] leading-tight mt-1">{current.color}</p>
                <p className="text-[12px] leading-[1.2] mt-1 text-[#4b3429]">
                  {current.colorNote}
                </p>
              </section>
            </div>

            <section className="rounded-[20px] bg-[#fbf0e7] text-[#221713] p-2 flex items-center justify-between gap-2 shadow-xl">
              <div className="w-full text-center">
                <p className="text-[14px] text-center leading-[1.25]">
                  ほっとひと息つきたい夜に。癒しの英語フレーズをバラードと一緒にお届けしています。
                </p>
                <a
                  href="https://www.youtube.com/@SweetWhispersLearning"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-[16px] text-center underline text-[#9f4e37] mt-1"
                >
                  YouTubeチャンネルを見る →
                </a>
              </div>
            </section>
          </main>

          <footer className="text-center mt-2 text-amber-50/70 text-[9px] leading-[1.5] px-4">
            <p>
              本日の運勢は、複数の占星術・運勢情報を参考に、
              <br />
              AIがSweet Whispers風にやさしく再構成しています。
            </p>
            <p className="mt-1 italic text-amber-100/45">
              Today's horoscope is gently reimagined by AI based on multiple astrology inspirations.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
