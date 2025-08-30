"use client";

import { useMemo, useState } from "react";
import { Users, Eye } from "lucide-react";

type Client = {
  id: string;
  name: string;
  industry: string;
  employees: number;
  revenue: string; // keep as string for formatting simplicity (e.g., "$50M")
  lastAssessed: string; // ISO or display date
  score: number; // 0-100
};

const riskLabel = (score: number) => {
  if (score >= 85) return { text: "Minimal", cls: "bg-emerald-100 text-emerald-700 border-emerald-200" };
  if (score >= 70) return { text: "Low", cls: "bg-blue-100 text-blue-700 border-blue-200" };
  if (score >= 55) return { text: "Medium", cls: "bg-amber-100 text-amber-700 border-amber-200" };
  return { text: "High", cls: "bg-rose-100 text-rose-700 border-rose-200" };
};

export default function CorporateClients() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Client | null>(null);

  const clients = useMemo<Client[]>(
    () => [
      { id: "c1", name: "TechCorp Solutions", industry: "Technology", employees: 1200, revenue: "$50M", lastAssessed: "2024-01-15", score: 82 },
      { id: "c2", name: "Global Manufacturing Inc", industry: "Manufacturing", employees: 2800, revenue: "$120M", lastAssessed: "2024-01-12", score: 68 },
      { id: "c3", name: "FinanceFirst Bank", industry: "Financial Services", employees: 850, revenue: "$75M", lastAssessed: "2024-01-18", score: 91 },
      { id: "c4", name: "HealthCare Systems Ltd", industry: "Healthcare", employees: 1500, revenue: "$85M", lastAssessed: "2024-01-10", score: 58 },
      { id: "c5", name: "SecureLogistics Co", industry: "Logistics", employees: 950, revenue: "$42M", lastAssessed: "2024-01-08", score: 75 },
    ],
    []
  );

  const filtered = useMemo(
    () =>
      clients.filter((c) =>
        (c.name + " " + c.industry).toLowerCase().includes(query.trim().toLowerCase())
      ),
    [clients, query]
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-slate-500" />
          <h1 className="text-2xl font-bold text-slate-900">Client Security Management</h1>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat title="Total Clients" value={clients.length.toString()} subtext="Portfolio size" />
        <Stat title="Average Security Score" value={Math.round(clients.reduce((a,c)=>a+c.score,0)/clients.length).toString()} subtext="Weighted average" />
        <Stat title="High Risk Clients" value={clients.filter(c=>c.score<55).length.toString()} subtext="Score < 55" />
        <Stat title="Assessments this Month" value="18" subtext="Auto + manual" />
      </div>

      {/* List header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Client Portfolio</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clients..."
              className="w-64 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Client list */}
      <div className="space-y-3">
        {filtered.map((c) => {
          const badge = riskLabel(c.score);
          return (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900 truncate">{c.name}</p>
                    <p className="text-sm text-slate-600 truncate">{c.industry} • {c.employees.toLocaleString()} employees • {c.revenue} revenue</p>
                    <p className="text-xs text-slate-500">Last assessed: {c.lastAssessed}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-slate-900 leading-none">{c.score}</div>
                    <div className="text-xs text-slate-500">Security Score</div>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${badge.cls}`}>{badge.text} Risk</span>
                  <button
                    className="inline-flex items-center gap-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    onClick={() => setActive(c)}
                    title="View Details"
                  >
                    <Eye className="h-4 w-4" /> View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {active && (
        <ClientModal client={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}

function Stat({ title, value, subtext }: { title: string; value: string; subtext?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
      {subtext && <div className="text-xs text-slate-500 mt-0.5">{subtext}</div>}
    </div>
  );
}

function ClientModal({ client, onClose }: { client: Client; onClose: () => void }) {
  const sections = [
    { name: "Infrastructure Security", weight: 25, score: 85 },
    { name: "Vulnerability Management", weight: 20, score: 78 },
    { name: "Access Control", weight: 15, score: 88 },
    { name: "Data Protection", weight: 15, score: 80 },
    { name: "Incident Response", weight: 10, score: 85 },
    { name: "Third-Party Risk", weight: 5, score: 82 },
  ];

  const label = riskLabel(client.score);

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
        <div className="mt-8 w-full max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-slate-500" />
                <h3 className="text-lg font-semibold text-slate-900">{client.name} — Security Posture</h3>
              </div>
              <div className="mt-1 text-sm text-slate-600">Industry: {client.industry} • Employees: {client.employees.toLocaleString()} • Revenue: {client.revenue}</div>
            </div>
            <div className="text-right">
              <div className="rounded-xl border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Overall Score</div>
                <div className="flex items-end gap-2">
                  <div className="text-2xl font-bold text-slate-900 leading-none">{client.score}</div>
                  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${label.cls}`}>{label.text}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
            <h4 className="text-sm font-semibold text-slate-900">Security Assessment Breakdown</h4>
            {sections.map((s) => (
              <div key={s.name} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-900">{s.name}</div>
                    <div className="text-xs text-slate-500">Weight: {s.weight}%</div>
                  </div>
                  <div className="text-lg font-semibold text-slate-900">{s.score}</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-2 bg-blue-600" style={{ width: `${s.score}%` }} />
                </div>
                <div className="mt-1 text-xs text-slate-600">Status: {s.score >= 85 ? "Excellent" : s.score >= 70 ? "Good" : s.score >= 55 ? "Fair" : "Poor"}</div>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">Schedule Assessment</button>
              <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Generate Report</button>
              <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Contact Client</button>
            </div>
          </div>

          <div className="border-t border-slate-200 px-6 py-3 flex justify-end">
            <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
