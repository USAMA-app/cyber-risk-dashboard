"use client";

import { useState } from "react";
import { Shield, Search, Users, AlertTriangle, Activity, ShieldCheck, LineChart, FileText, Eye, BarChart3, Briefcase, Bug, CheckCircle2, ShieldAlert, Link2, Boxes, Network } from "lucide-react";
import RiskOverview from "./RiskOverview";
import RiskTrends from "./RiskTrends";
import ClientPortfolio from "./ClientPortfolio";
import ActiveThreats from "./ActiveThreats";
import PolicyManagement from "./PolicyManagement";
import IncidentResponse from "./IncidentResponse";
import ComplianceMonitoring from "./ComplianceMonitoring";
import ExecutiveRiskHub from "./ExecutiveRiskHub";
import VulnerabilityOps from "./VulnerabilityOps";
import ComplianceCenter from "./ComplianceCenter";
import ThreatWarRoom from "./ThreatWarRoom";
import ThirdPartyRadar from "./ThirdPartyRadar";
import AssetManagement from "./AssetManagement";
import NetworkSecurity from "./NetworkSecurity";

// Simple icon placeholders using Tailwind (no external deps)
function DotIcon({ className = "h-4 w-4", color = "bg-blue-500" }) {
  return <span className={`inline-block rounded-full ${color} ${className}`} />;
}

export default function Home() {
  const [mode, setMode] = useState<"insurance" | "corporate">("insurance");
  const [page, setPage] = useState<string>("risk-overview");

  const insuranceNav = [
    { id: "risk-overview", label: "Risk Overview", icon: BarChart3, iconClass: "lucide lucide-bar-chart-3 h-4 w-4" },
    { id: "risk-trends", label: "Risk Trends", icon: LineChart, iconClass: "lucide lucide-line-chart h-4 w-4" },
    { id: "client-portfolio", label: "Client Portfolio", icon: Users, iconClass: "lucide lucide-users h-4 w-4" },
    { id: "active-threats", label: "Active Threats", icon: AlertTriangle, iconClass: "lucide lucide-alert-triangle h-4 w-4" },
    { id: "policy-management", label: "Policy Management", icon: FileText, iconClass: "lucide lucide-file-text h-4 w-4" },
    { id: "incident-response", label: "Incident Response", icon: Activity, iconClass: "lucide lucide-activity h-4 w-4" },
    { id: "compliance-monitoring", label: "Compliance Monitoring", icon: Eye, iconClass: "lucide lucide-eye h-4 w-4" },
  ];

  const corporateNav = [
    { id: "executive-risk-hub", label: "Executive Risk Hub", icon: Briefcase, iconClass: "lucide lucide-briefcase h-4 w-4 text-slate-400" },
    { id: "vulnerability-ops", label: "Vulnerability Ops", icon: Bug, iconClass: "lucide lucide-bug h-4 w-4 text-slate-400" },
    { id: "compliance-center", label: "Compliance Center", icon: CheckCircle2, iconClass: "lucide lucide-check-circle-2 h-4 w-4 text-slate-400" },
    { id: "threat-war-room", label: "Threat War Room", icon: ShieldAlert, iconClass: "lucide lucide-shield-alert h-4 w-4 text-slate-400" },
    { id: "third-party-radar", label: "Third-Party Radar", icon: Link2, iconClass: "lucide lucide-link-2 h-4 w-4 text-slate-400" },
    { id: "asset-management", label: "Asset Management", icon: Boxes, iconClass: "lucide lucide-boxes h-4 w-4 text-slate-400" },
    { id: "network-security", label: "Network Security", icon: Network, iconClass: "lucide lucide-network h-4 w-4 text-slate-400" },
  ];

  const nav = mode === "insurance" ? insuranceNav : corporateNav;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="lucide lucide-shield h-6 w-6 text-blue-400" />
            <h1 className="text-lg font-semibold">CyberGuard Platform</h1>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                placeholder="Search clients, policies, risk assessments..."
                className="w-full pl-9 pr-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <span className="px-2.5 py-1 text-xs rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              Active Monitoring
            </span>
            <span className="px-2.5 py-1 text-xs rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-300">
              Real-time Updates
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <div className="bg-slate-800 p-1 rounded-lg w-fit flex gap-1">
            <button
              onClick={() => {
                setMode("insurance");
                setPage("risk-overview");
              }}
              className={`px-3 py-1.5 rounded-md text-sm ${
                mode === "insurance"
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Insurance-Focused Features
            </button>
            <button
              onClick={() => {
                setMode("corporate");
                setPage(mode === "corporate" ? page : "executive-risk-hub");
              }}
              className={`px-3 py-1.5 rounded-md text-sm ${
                mode === "corporate"
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              Corporate-Focused Features
            </button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-112px)] p-4">
          <nav className="space-y-1">
            {nav.map((item) => {
              const active = page === item.id;
              const activeClasses =
                mode === "insurance"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-purple-50 text-purple-700";
              return (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-3 ${
                    active
                      ? activeClasses
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {"icon" in item && item.icon ? (
                    (() => {
                      const Icon = item.icon as React.ElementType;
                      const color = active
                        ? mode === "insurance"
                          ? "text-blue-600"
                          : "text-purple-600"
                        : "text-slate-400";
                      return <Icon className={`${(item.iconClass as string)} ${color}`} />;
                    })()
                  ) : (
                    <DotIcon className="h-3 w-3" color="bg-slate-400" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          {mode === "insurance" ? (
            page === "risk-overview" ? (
              <RiskOverview />
            ) : page === "risk-trends" ? (
              <RiskTrends />
            ) : page === "client-portfolio" ? (
              <ClientPortfolio />
            ) : page === "active-threats" ? (
              <ActiveThreats />
            ) : page === "policy-management" ? (
              <PolicyManagement />
            ) : page === "incident-response" ? (
              <IncidentResponse />
            ) : page === "compliance-monitoring" ? (
              <ComplianceMonitoring />
            ) : (
              <Placeholder title={`Insurance · ${nav.find(n => n.id === page)?.label ?? "Page"}`} />
            )
          ) : (
            page === "executive-risk-hub" ? (
              <ExecutiveRiskHub />
            ) : page === "vulnerability-ops" ? (
              <VulnerabilityOps />
            ) : page === "compliance-center" ? (
              <ComplianceCenter />
            ) : page === "threat-war-room" ? (
              <ThreatWarRoom />
            ) : page === "third-party-radar" ? (
              <ThirdPartyRadar />
            ) : page === "asset-management" ? (
              <AssetManagement />
            ) : page === "network-security" ? (
              <NetworkSecurity />
            ) : (
              <Placeholder title={`Corporate · ${nav.find(n => n.id === page)?.label ?? "Page"}`} />
            )
          )}
        </main>
      </div>
    </div>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold text-slate-800 mb-2">{title}</p>
        <p className="text-slate-500">This section will be implemented next.</p>
      </div>
    </div>
  );
}

