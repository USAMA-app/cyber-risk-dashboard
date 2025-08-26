"use client";

import React from "react";
import { Card, CardContent } from "./components/Card";

type Stat = {
  label: string;
  value: string | number;
  sub?: string;
  tone?: "success" | "warning" | "default";
};

type Framework = {
  name: string;
  score: number;
};

const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-slate-900 rounded-full transition-all"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

export default function ComplianceCenter() {
  const stats: Stat[] = [
    { label: "Overall Score", value: "94%", sub: "Above target", tone: "success" },
    { label: "Active Frameworks", value: 8, sub: "Monitored" },
    { label: "Open Findings", value: 47, sub: "Require attention", tone: "warning" },
    { label: "Next Audit", value: "23d", sub: "SOC 2 Type II" },
  ];

  const frameworks: Framework[] = [
    { name: "NIST Cybersecurity Framework", score: 94 },
    { name: "ISO 27001", score: 87 },
    { name: "CIS Controls", score: 91 },
    { name: "SOC 2 Type II", score: 96 },
    { name: "PCI DSS", score: 89 },
    { name: "HIPAA", score: 92 },
    { name: "GDPR", score: 88 },
    { name: "SOX", score: 85 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Compliance Center</h1>
          <p className="text-sm text-slate-600 mt-1">
            Audits, evidence collection, and framework status.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 rounded-md bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 text-sm font-medium hover:bg-slate-50">
            Audit Report
          </button>
          <button className="px-3.5 py-2 rounded-md bg-slate-900 text-white text-sm font-medium shadow-sm hover:bg-slate-800">
            New Assessment
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-600">{s.label}</p>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-2xl font-semibold text-slate-900">{s.value}</span>
                  </div>
                  {s.sub && (
                    <p
                      className={
                        "mt-1 text-xs " +
                        (s.tone === "success"
                          ? "text-emerald-600"
                          : s.tone === "warning"
                          ? "text-amber-600"
                          : "text-slate-500")
                      }
                    >
                      {s.sub}
                    </p>
                  )}
                </div>
                {/* simple glyphs */}
                <div className="text-slate-300">●</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Framework Compliance Status */}
      <Card>
        <CardContent>
          <h3 className="font-semibold text-slate-900 mb-4">Framework Compliance Status</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
            {frameworks.map((fw, idx) => (
              <div key={fw.name} className="flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 truncate">{fw.name}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="w-full max-w-[220px]">
                      <ProgressBar value={fw.score} />
                    </div>
                    <span className="text-sm font-medium text-slate-900">{fw.score}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Critical Compliance Findings */}
      <Card>
        <CardContent>
          <h3 className="font-semibold text-slate-900 mb-4">Critical Compliance Findings</h3>

          <div className="space-y-4">
            {/* Finding 1 */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="text-red-500">⚠️</div>
                  <div>
                    <p className="font-medium text-slate-900">
                      SOC 2 - Access Control Deficiency
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Privileged access reviews not conducted within required timeframe
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Control: CC6.1 &nbsp; • &nbsp; Due: 15 days &nbsp; • &nbsp; Impact: High
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-medium">
                  Critical
                </span>
              </div>
              <div className="mt-3">
                <button className="px-3 py-1.5 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700">
                  Remediate
                </button>
              </div>
            </div>

            {/* Finding 2 */}
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="text-amber-500">📄</div>
                  <div>
                    <p className="font-medium text-slate-900">
                      ISO 27001 - Documentation Gap
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Information security policies require annual review and approval
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Control: A.5.11 &nbsp; • &nbsp; Due: 30 days &nbsp; • &nbsp; Impact: Medium
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/90 text-white text-xs font-medium">
                  High
                </span>
              </div>
              <div className="mt-3">
                <button className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
                  Schedule Review
                </button>
              </div>
            </div>

            {/* Finding 3 */}
            <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="text-indigo-500">👁️</div>
                  <div>
                    <p className="font-medium text-slate-900">
                      PCI DSS - Vulnerability Scanning
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Quarterly external vulnerability scans pending completion
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Requirement: 11.2.2 &nbsp; • &nbsp; Due: 45 days &nbsp; • &nbsp; Impact: Low
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500 text-white text-xs font-medium">
                  Medium
                </span>
              </div>
              <div className="mt-3">
                <button className="px-3 py-1.5 rounded-md bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 text-sm font-medium hover:bg-slate-50">
                  Schedule Scan
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


              {/* Recent Threat Intelligence */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Recent Threat Intelligence</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                        <div>
                          <div className="font-medium text-slate-900">New ransomware variant "DarkCrypt" detected</div>
                          <div className="text-xs text-slate-600">Targeting healthcare organizations · 2 hours ago</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                        <div>
                          <div className="font-medium text-slate-900">Zero-day exploit in popular VPN software</div>
                          <div className="text-xs text-slate-600">CVE-2024-XXXX assigned · 4 hours ago</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                        <div>
                          <div className="font-medium text-slate-900">Phishing campaign impersonating major bank</div>
                          <div className="text-xs text-slate-600">High-quality templates detected · 6 hours ago</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        <div>
                          <div className="font-medium text-slate-900">Botnet C&C infrastructure disrupted</div>
                          <div className="text-xs text-slate-600">Law enforcement operation successful · 8 hours ago</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500"></span>
                        <div>
                          <div className="font-medium text-slate-900">Nation-state actor TTPs updated</div>
                          <div className="text-xs text-slate-600">New MITRE ATT&CK techniques mapped · 12 hours ago</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
    </div>
  );
}
