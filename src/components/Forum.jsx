import { useState } from "react";
import { MessageSquarePlus, ThumbsUp } from "lucide-react";
import { useLang } from "../i18n";

const starterThreads = [
  {
    id: 1,
    title: "Show your latest mega-base!",
    author: "PixelSmith",
    upvotes: 34,
    replies: 12,
    tag: "builds",
  },
  {
    id: 2,
    title: "Best 1.20.6 iron farm designs?",
    author: "IronChef",
    upvotes: 21,
    replies: 8,
    tag: "farms",
  },
  {
    id: 3,
    title: "Share scenic seeds for cozy worlds",
    author: "Seedling",
    upvotes: 18,
    replies: 5,
    tag: "seeds",
  },
];

export default function Forum() {
  const { t } = useLang();
  const [threads, setThreads] = useState(starterThreads);
  const [title, setTitle] = useState("");

  const addThread = () => {
    const tt = title.trim();
    if (!tt) return;
    setThreads([
      { id: Date.now(), title: tt, author: "You", upvotes: 0, replies: 0, tag: "general" },
      ...threads,
    ]);
    setTitle("");
  };

  return (
    <section id="forum" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-emerald-100">{t("communityForum")}</h3>
        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("newThreadPlaceholder")}
            className="px-3 py-2 w-64 rounded-md bg-emerald-900/60 border border-emerald-700 text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <button onClick={addThread} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-emerald-50 font-medium border border-emerald-300/20">
            <MessageSquarePlus size={18} /> {t("post")}
          </button>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {threads.map((tt) => (
          <li key={tt.id} className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-800 hover:border-emerald-600/60 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-emerald-300/80">{t(tt.tag)} • by {tt.author}</div>
                <h4 className="text-lg font-semibold text-emerald-100">{tt.title}</h4>
                <div className="text-sm text-emerald-300/70">{tt.replies} {t("replies")}</div>
              </div>
              <button className="flex items-center gap-1 text-emerald-200 hover:text-emerald-50">
                <ThumbsUp size={18} /> {tt.upvotes}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
