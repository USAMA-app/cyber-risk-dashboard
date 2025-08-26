"use client";

import React from "react";
import { Card, CardContent } from "./components/Card";
import {
  Database,
  ShieldAlert,
  AlertTriangle,
  Eye,
  Server,
  MonitorSmartphone,
  Router,
  Cloud,
  Smartphone,
  ChevronRight,
} from "lucide-react";

export default function AssetManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Asset Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">Asset Report</button>
          <button className="rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Add Asset</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total Assets"
          value="3,247"
          sub="Managed devices"
          icon={<Server className="h-6 w-6 text-slate-500" />}
        />
        <KpiCard
          title="Critical Assets"
          value="89"
          sub="High value targets"
          valueClass="text-rose-600"
          icon={<ShieldAlert className="h-6 w-6 text-rose-500" />}
        />
        <KpiCard
          title="Unpatched Assets"
          value="156"
          sub="Require updates"
          valueClass="text-amber-600"
          icon={<AlertTriangle className="h-6 w-6 text-amber-500" />}
        />
        <KpiCard
          title="Asset Coverage"
          value="94.2%"
          sub="Monitored"
          valueClass="text-emerald-600"
          icon={<Eye className="h-6 w-6 text-emerald-500" />}
        />
      </div>

      {/* Middle grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Asset Categories */}
        <Card>
          <CardContent>
            <h3 className="text-base font-semibold text-slate-900">Asset Categories</h3>
            <div className="mt-4 divide-y divide-slate-200">
              <CategoryRow icon={<Server className="h-5 w-5 text-slate-600" />} label="Servers" value="234" hint="Physical & Virtual" />
              <CategoryRow icon={<MonitorSmartphone className="h-5 w-5 text-slate-600" />} label="Workstations" value="1,847" hint="Employee devices" />
              <CategoryRow icon={<Router className="h-5 w-5 text-slate-600" />} label="Network Devices" value="156" hint="Routers, Switches, APs" />
              <CategoryRow icon={<Cloud className="h-5 w-5 text-slate-600" />} label="Cloud Assets" value="892" hint="Cloud resources" />
              <CategoryRow icon={<Smartphone className="h-5 w-5 text-slate-600" />} label="Mobile Devices" value="118" hint="Phones & Tablets" />
            </div>
          </CardContent>
        </Card>

        {/* Asset Risk Distribution */}
        <Card>
          <CardContent>
            <h3 className="text-base font-semibold text-slate-900">Asset Risk Distribution</h3>
            <div className="mt-4 grid grid-cols-3 items-start gap-2 sm:gap-4">
              <div className="col-span-1 flex flex-col gap-4">
                <LegendDot color="bg-emerald-500" label="Low Risk" />
                <LegendDot color="bg-amber-500" label="Medium Risk" />
                <LegendDot color="bg-rose-500" label="High Risk" />
              </div>
              <div className="col-span-2 grid gap-4">
                <DistributionRow color="text-emerald-600" value="2,156" percent="66% of assets" />
                <DistributionRow color="text-amber-600" value="846" percent="26% of assets" />
                <DistributionRow color="text-rose-600" value="245" percent="8% of assets" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Assets */}
      <Card className="border-2 border-slate-200">
        <CardContent>
          <h3 className="text-base font-semibold text-slate-900">Critical Assets Requiring Attention</h3>
          <div className="mt-4 space-y-4">
            <CriticalAsset
              title="DB-PROD-01 (Database Server)"
              icon={<Database className="h-5 w-5 text-rose-600" />}
              description="Multiple critical vulnerabilities detected, patches available"
              meta={["Risk Score: 9.1", "Vulnerabilities: 8", "Last Patched: 45 days ago"]}
              actions={[
                { label: "Emergency Patch", variant: "primary" },
                { label: "Schedule Maintenance", variant: "secondary" },
              ]}
              severity="critical"
            />

            <CriticalAsset
              title="FW-CORE-01 (Core Firewall)"
              icon={<ShieldAlert className="h-5 w-5 text-rose-600" />}
              description="Firmware version contains known security flaws"
              meta={["Risk Score: 8.7", "Firmware: Outdated", "CVEs: 3"]}
              actions={[
                { label: "Update Firmware", variant: "primary" },
                { label: "Backup Config", variant: "secondary" },
              ]}
              severity="critical"
            />

            <CriticalAsset
              title="WS-EXEC-15 (Executive Workstation)"
              icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
              description="Antivirus definitions outdated, potential malware exposure"
              meta={["Risk Score: 7.3", "AV Status: Outdated", "User: C-Level Executive"]}
              actions={[
                { label: "Update AV", variant: "primary" },
                { label: "Full Scan", variant: "secondary" },
              ]}
              severity="high"
            />
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardContent>
          <h3 className="text-base font-semibold text-slate-900">Recent Asset Activity</h3>
          <div className="mt-4 space-y-3">
            <ActivityItem color="bg-emerald-500" title="45 workstations patched successfully" subtitle="Windows security updates deployed • 2 hours ago" />
            <ActivityItem color="bg-blue-500" title="New cloud assets discovered" subtitle="12 EC2 instances added to inventory • 4 hours ago" />
            <ActivityItem color="bg-rose-500" title="Critical server vulnerability detected" subtitle="DB-PROD-01 requires immediate patching • 6 hours ago" />
            <ActivityItem color="bg-amber-500" title="Network device firmware update available" subtitle="Core firewall update pending approval • 8 hours ago" />
            <ActivityItem color="bg-violet-500" title="Asset inventory scan completed" subtitle="3,247 assets scanned, 23 new devices found • 12 hours ago" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- Small UI helpers ---------- */
function KpiCard({
  title,
  value,
  sub,
  icon,
  valueClass,
}: {
  title: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  valueClass?: string;
}) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-500">{title}</p>
            <div className={`mt-1 text-2xl font-semibold ${valueClass ?? "text-slate-900"}`}>{value}</div>
            <p className="mt-1 text-xs text-slate-500">{sub}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-inset ring-slate-200">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function CategoryRow({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-inset ring-slate-200">{icon}</div>
        <div>
          <div className="text-slate-900">{label}</div>
          <div className="text-xs text-slate-500">{hint}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-right text-base font-semibold text-slate-900">{value}</span>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

function DistributionRow({
  color,
  value,
  percent,
}: {
  color: string;
  value: string;
  percent: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className={`text-lg font-semibold ${color}`}>{value}</div>
      <div className="text-sm text-slate-500">{percent}</div>
    </div>
  );
}

type ActionBtn = { label: string; variant: "primary" | "secondary" };

function CriticalAsset({
  title,
  description,
  meta,
  actions,
  icon,
  severity = "critical",
}: {
  title: string;
  description: string;
  meta: string[];
  actions: ActionBtn[];
  icon: React.ReactNode;
  severity?: "critical" | "high";
}) {
  const tone =
    severity === "high"
      ? {
          badge: { text: "High", cls: "bg-amber-500" },
          border: "border-amber-200/60",
          bg: "bg-amber-50/40",
        }
      : {
          badge: { text: "Critical", cls: "bg-rose-600" },
          border: "border-rose-200/60",
          bg: "bg-rose-50/40",
        };
  return (
    <div className={`rounded-xl border ${tone.border} ${tone.bg} p-4`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-white p-2 ring-1 ring-inset ring-slate-200">{icon}</div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-slate-900">{title}</h4>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium text-white ${tone.badge.cls}`}>{tone.badge.text}</span>
            </div>
            <p className="mt-1 text-sm text-slate-700">{description}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
              {meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {actions.map((a) => (
                <button
                  key={a.label}
                  className={
                    a.variant === "primary"
                      ? `rounded-lg ${severity === "high" ? "bg-amber-500 hover:bg-amber-600" : "bg-rose-600 hover:bg-rose-700"} px-3 py-1.5 text-sm font-medium text-white`
                      : "rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  }
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({
  color,
  title,
  subtitle,
}: {
  color: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${color}`} />
      <div>
        <div className="text-sm font-medium text-slate-900">{title}</div>
        <div className="text-xs text-slate-600">{subtitle}</div>
      </div>
    </div>
  );
}
