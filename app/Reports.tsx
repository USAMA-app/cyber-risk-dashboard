"use client";

import { useMemo, useState } from "react";
import { FileText, Download, Filter, CalendarDays } from "lucide-react";

type Report = {
  id: string;
  title: string;
  type: "Executive" | "Technical" | "Compliance";
  client: string;
  date: string; // ISO
  status: "Draft" | "Ready" | "Archived";
};

const MOCK: Report[] = [
  { id: "r1", title: "Q3 Executive Risk Summary", type: "Executive", client: "ACME Corp", date: "2025-07-15", status: "Ready" },
  { id: "r2", title: "Patch Compliance Snapshot", type: "Compliance", client: "ACME Corp", date: "2025-08-05", status: "Draft" },
  { id: "r3", title: "Network Exposure Analysis", type: "Technical", client: "Globex", date: "2025-08-22", status: "Ready" },
  { id: "r4", title: "Third-Party Risk Overview", type: "Executive", client: "Umbrella", date: "2025-06-09", status: "Archived" },
];

export default function Reports() {
  const [type, setType] = useState<string>("All");
  const [status, setStatus] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return MOCK.filter((r) =>
      (type === "All" || r.type === type) &&
      (status === "All" || r.status === status) &&
      (q === "" || r.title.toLowerCase().includes(q.toLowerCase()))
    );
  }, [type, status, q]);

  const exportCsv = () => {
    const header = ["id", "title", "type", "client", "date", "status"].join(",");
    const rows = filtered
      .map((r) => [r.id, r.title, r.type, r.client, r.date, r.status].join(","))
      .join("\n");
    const csv = header + "\n" + rows;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reports.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-purple-600/10 text-purple-600 flex items-center justify-center">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 leading-tight">Reports</h2>
          <p className="text-sm text-slate-500">Filter and export client-ready reports.</p>
        </div>
      </header>

      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="px-4 py-3 border-b border-slate-200 grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-500" />
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm">
              {"All Executive Technical Compliance".split(" ").map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm">
              {"All Draft Ready Archived".split(" ").map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-slate-500" />
            <input type="month" className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search titles…"
              className="flex-1 border border-slate-300 rounded-md px-2 py-1.5 text-sm"
            />
            <button onClick={exportCsv} className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-black">
              <Download className="h-4 w-4" /> Export
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {filtered.map((r) => (
            <div key={r.id} className="px-4 py-3 grid grid-cols-1 md:grid-cols-6 gap-2 items-center">
              <div className="md:col-span-2 font-medium text-slate-900">{r.title}</div>
              <div className="text-sm text-slate-600">{r.client}</div>
              <div className="text-sm"><span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">{r.type}</span></div>
              <div className="text-sm text-slate-600">{new Date(r.date).toLocaleDateString()}</div>
              <div className="text-sm">
                <span className={`px-2 py-0.5 rounded-full border ${
                  r.status === "Ready"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : r.status === "Draft"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-slate-50 text-slate-700 border-slate-200"
                }`}>{r.status}</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="px-4 py-10 text-center text-slate-500 text-sm">No reports match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
}
