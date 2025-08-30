"use client";

import { useState } from "react";
import { Brain, Send, Loader2, Sparkles } from "lucide-react";

export default function AIInterface() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I can summarize risks, draft reports, and answer security questions." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setLoading(true);
    // Mock AI reply for now
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: `Here is an insight based on \"${userText}\":\n- Top risk area: Third-Party Access\n- Suggested control: MFA enforcement for vendors\n- Impact: Medium\n- Confidence: 82%`,
        },
      ]);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
          <Brain className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 leading-tight">AI Assistant</h2>
          <p className="text-sm text-slate-900">Ask for summaries, what-if analysis, or draft client-ready notes.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 rounded-xl border border-slate-200 bg-white">
          <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2 text-sm text-slate-900">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Conversations are private to your session. Real model integration coming next.
          </div>

          <div className="h-[50vh] overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"}`}>
                <div
                  className={`rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-900 border border-slate-200"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="mr-auto max-w-[85%]">
                <div className="rounded-lg px-3 py-2 text-sm bg-slate-100 text-slate-800 border border-slate-200 inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about risks, policies, trends…"
                className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={send}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700 disabled:opacity-50"
                disabled={loading}
                aria-label="Send"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send
              </button>
            </div>
          </div>
        </section>

        <aside className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">Quick prompts</h3>
          <div className="grid grid-cols-1 gap-2">
            {[
              "Summarize this week's top 3 threats for ACME Corp.",
              "Draft a note explaining our patch priority for Windows servers.",
              "What if we reduce MFA coverage by 10%?",
            ].map((p) => (
              <button
                key={p}
                onClick={() => setInput(p)}
                className="text-left rounded-md border border-slate-200 hover:border-slate-300 px-3 py-2 text-sm text-slate-900"
              >
                {p}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
