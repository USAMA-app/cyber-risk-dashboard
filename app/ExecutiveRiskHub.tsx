"use client";

import React from "react";
import { Card, CardContent } from "./components/Card";

export default function ExecutiveRiskHub() {
  return (
    <div className="space-y-6">

       
       
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Risk Score"
            value="7.2"
            accent="purple"
            sub={<span className="text-emerald-600">↓ 0.3 vs industry avg</span>}
          />
          <StatCard
            title="Critical Vulnerabilities"
            value="23"
            accent="rose"
            sub={<span className="text-rose-600">Require immediate action</span>}
          />
          <StatCard
            title="Compliance Score"
            value="94%"
            accent="emerald"
            sub={<span className="text-slate-600">NIST Framework</span>}
          />
          <StatCard
            title="Active Threats"
            value="7"
            accent="amber"
            sub={<span className="text-slate-600">Being monitored</span>}
          />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="xl:col-span-2">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 mb-6">
                Risk Score vs Industry Benchmarks
              </h3>
              <div className="space-y-5">
                <BenchmarkRow label="Your Organization" value={7.2} color="purple" />
                <BenchmarkRow label="Industry Average" value={7.5} color="slate" />
                <BenchmarkRow label="Top Quartile" value={8.5} color="emerald" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-900">ROI Calculator</h3>
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-600">Security Investment ROI</p>
                <div className="text-5xl font-semibold text-emerald-600 mt-2">312%</div>
              </div>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-600">Investment</dt>
                  <dd className="font-medium text-slate-900">$2.4M</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-600">Risk Reduction</dt>
                  <dd className="font-medium text-slate-900">$7.5M</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Net Benefit</dt>
                  <dd className="font-semibold text-emerald-600">$5.1M</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="xl:col-span-2">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 mb-6">Risk Categories</h3>
              <div className="space-y-4">
                <RiskCategory name="Infrastructure" color="red" score={8.1} note="High Risk" />
                <RiskCategory name="Applications" color="amber" score={6.8} note="Medium Risk" />
                <RiskCategory name="Data Protection" color="emerald" score={5.2} note="Low Risk" />
                <RiskCategory name="Identity & Access" color="indigo" score={6.1} note="Medium Risk" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Executive Summary</h3>
              <div className="space-y-4 text-sm">
                <Banner type="success" title="Strong data protection posture" subtitle="Encryption and backup systems performing well" />
                <Banner type="error" title="Infrastructure vulnerabilities" subtitle="23 critical patches pending deployment" />
                <Banner type="info" title="Recommended actions" subtitle="Focus on infrastructure hardening and patch management" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance: Upcoming + Metrics */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Upcoming Compliance Activities */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Upcoming Compliance Activities</h3>
              <div className="space-y-4">
                <ActivityRow
                  color="rose"
                  icon="calendar"
                  title="SOC 2 Type II Audit"
                  subtitle="External auditor assessment - Due in 23 days"
                />
                <ActivityRow
                  color="amber"
                  icon="doc"
                  title="ISO 27001 Surveillance Audit"
                  subtitle="Annual certification review - Due in 6 weeks"
                />
                <ActivityRow
                  color="indigo"
                  icon="eye"
                  title="PCI DSS Self-Assessment"
                  subtitle="Quarterly compliance validation - Due in 2 months"
                />
                <ActivityRow
                  color="emerald"
                  icon="check"
                  title="NIST Framework Assessment"
                  subtitle="Internal maturity evaluation - Due in 3 months"
                />
              </div>
            </CardContent>
          </Card>

          {/* Compliance Metrics */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Compliance Metrics</h3>
              <div className="space-y-3">
                <MetricRow
                  color="emerald"
                  icon="trend"
                  label="Overall Improvement"
                  value={
                    <span className="text-emerald-700 font-semibold">+5.2%</span>
                  }
                />
                <MetricRow
                  color="indigo"
                  icon="clock"
                  label="Avg Remediation Time"
                  value={<span className="text-indigo-700 font-semibold">12.3d</span>}
                />
                <MetricRow
                  color="amber"
                  icon="warn"
                  label="Open Findings"
                  value={<span className="text-amber-700 font-semibold">47</span>}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        


    </div>
  );
}

/* ---------- Subcomponents ---------- */

function StatCard({
  title,
  value,
  sub,
  accent,
}: {
  title: string;
  value: string;
  sub?: React.ReactNode;
  accent?: "purple" | "rose" | "emerald" | "amber";
}) {
  const iconColor =
    accent === "rose"
      ? "text-rose-500"
      : accent === "emerald"
      ? "text-emerald-500"
      : accent === "amber"
      ? "text-amber-500"
      : "text-purple-500";
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <div className="text-3xl font-semibold text-slate-900">{value}</div>
            </div>
            {sub ? <div className="mt-1 text-xs">{sub}</div> : null}
          </div>
          <div className={`h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center ${iconColor}`}>
            {/* simple target-like glyph */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function BenchmarkRow({ label, value, color }: { label: string; value: number; color: "purple" | "slate" | "emerald" }) {
  const barColor =
    color === "emerald"
      ? "bg-emerald-500"
      : color === "slate"
      ? "bg-slate-300"
      : "bg-purple-500";
  return (
    <div className="grid grid-cols-12 items-center gap-4">
      <div className="col-span-6 sm:col-span-5 text-sm text-slate-700">{label}</div>
      <div className="col-span-5 sm:col-span-6">
        <div className="h-2.5 w-full rounded-full bg-slate-100">
          <div
            className={`h-2.5 rounded-full ${barColor}`}
            style={{ width: `${(value / 10) * 100}%` }}
          />
        </div>
      </div>
      <div className="col-span-1 text-right text-sm font-medium text-slate-900">{value.toFixed(1)}</div>
    </div>
  );
}

function RiskCategory({
  name,
  color,
  score,
  note,
}: {
  name: string;
  color: "red" | "amber" | "emerald" | "indigo";
  score: number;
  note: string;
}) {
  const dot =
    color === "red"
      ? "bg-red-500"
      : color === "amber"
      ? "bg-amber-500"
      : color === "emerald"
      ? "bg-emerald-500"
      : "bg-indigo-500";
  const tone =
    color === "red"
      ? "text-red-600"
      : color === "amber"
      ? "text-amber-600"
      : color === "emerald"
      ? "text-emerald-600"
      : "text-indigo-600";
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className="text-slate-800">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-slate-500 text-sm">{score.toFixed(1)}</span>
        <span className={`text-xs font-medium ${tone}`}>{note}</span>
      </div>
    </div>
  );
}

function Banner({
  type,
  title,
  subtitle,
}: {
  type: "success" | "error" | "info";
  title: string;
  subtitle: string;
}) {
  const styles =
    type === "success"
      ? { wrap: "bg-emerald-50 border border-emerald-100", dot: "bg-emerald-500", title: "text-emerald-700" }
      : type === "error"
      ? { wrap: "bg-rose-50 border border-rose-100", dot: "bg-rose-500", title: "text-rose-700" }
      : { wrap: "bg-indigo-50 border border-indigo-100", dot: "bg-indigo-500", title: "text-indigo-700" };
  return (
    <div className={`rounded-xl p-4 ${styles.wrap}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-1 h-2.5 w-2.5 rounded-full ${styles.dot}`} />
        <div>
          <div className={`font-medium ${styles.title}`}>{title}</div>
          <div className="text-slate-600 text-xs mt-0.5">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({
  color,
  icon,
  title,
  subtitle,
}: {
  color: "rose" | "amber" | "indigo" | "emerald";
  icon: "calendar" | "doc" | "eye" | "check";
  title: string;
  subtitle: string;
}) {
  const palette = {
    rose: { dot: "bg-rose-500", text: "text-rose-600" },
    amber: { dot: "bg-amber-500", text: "text-amber-600" },
    indigo: { dot: "bg-indigo-500", text: "text-indigo-600" },
    emerald: { dot: "bg-emerald-500", text: "text-emerald-600" },
  } as const;
  const Icon = () => {
    switch (icon) {
      case "calendar":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M8 3v4M16 3v4M3 9h18" />
          </svg>
        );
      case "doc":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
            <path d="M14 3v6h6" />
          </svg>
        );
      case "eye":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "check":
      default:
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };
  const scheme = palette[color];
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center ${scheme.text}`}>
        <Icon />
      </span>
      <div>
        <div className="text-slate-900 text-sm font-medium">{title}</div>
        <div className="text-slate-600 text-xs">{subtitle}</div>
      </div>
    </div>
  );
}

function MetricRow({
  color,
  icon,
  label,
  value,
}: {
  color: "emerald" | "indigo" | "amber";
  icon: "trend" | "clock" | "warn";
  label: string;
  value: React.ReactNode;
}) {
  const styles = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-700" },
    amber: { bg: "bg-amber-50", text: "text-amber-700" },
  } as const;
  const Icon = () => {
    switch (icon) {
      case "clock":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        );
      case "warn":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l10 18H2L12 2z" />
            <path d="M12 9v4M12 17h.01" />
          </svg>
        );
      case "trend":
      default:
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 17l6-6 4 4 7-7" />
          </svg>
        );
    }
  };
  const s = styles[color];
  return (
    <div className={`flex items-center justify-between rounded-lg px-3 py-2 ${s.bg}`}>
      <div className="flex items-center gap-2">
        <span className={`${s.text}`}>
          <Icon />
        </span>
        <span className="text-sm text-slate-800">{label}</span>
      </div>
      <div className="text-sm">{value}</div>
    </div>
  );
}
