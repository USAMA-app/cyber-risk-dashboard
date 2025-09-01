"use client";

import { useEffect, useState } from "react";
import { Shield, Search, Users, AlertTriangle, Activity, ShieldCheck, LineChart, FileText, Eye, BarChart3, Briefcase, Bug, CheckCircle2, ShieldAlert, Link2, Boxes, Network, Menu, Brain, Settings as SettingsIcon } from "lucide-react";
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
import CorporateClients from "./CorporateClients";
import AIInterface from "./AIInterface";
import Reports from "./Reports";
import Settings from "./Settings";

// Simple icon placeholders using Tailwind (no external deps)
function DotIcon({ className = "h-4 w-4", color = "bg-blue-500" }) {
  return <span className={`inline-block rounded-full ${color} ${className}`} />;
}

export default function Home() {
  const [mode, setMode] = useState<"insurance" | "corporate">("insurance");
  const [page, setPage] = useState<string>("risk-overview");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Lock body scroll when the mobile sidebar is open and close on Escape
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Allow child components to request navigation without props via a custom event.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ page?: string; mode?: "insurance" | "corporate" }>).detail || {};
      if (detail.mode) setMode(detail.mode);
      if (detail.page) setPage(detail.page);
      setMobileOpen(false);
    };
    window.addEventListener("app:navigate", handler as EventListener);
    return () => window.removeEventListener("app:navigate", handler as EventListener);
  }, []);

  const insuranceNav = [
    { id: "risk-overview", label: "Risk Overview", icon: BarChart3, iconClass: "lucide lucide-bar-chart-3 h-4 w-4" },
    { id: "corporate-clients", label: "Clients", icon: Users, iconClass: "lucide lucide-users h-4 w-4 text-slate-400" },    
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

  // Shared Tools & Settings section
  const toolsNav = [
    { id: "ai-interface", label: "AI Assistant", icon: Brain, iconClass: "lucide lucide-brain h-4 w-4" },
    { id: "reports", label: "Reports", icon: FileText, iconClass: "lucide lucide-file-text h-4 w-4" },
    { id: "settings", label: "Settings", icon: SettingsIcon, iconClass: "lucide lucide-settings h-4 w-4" },
  ];

  const nav = mode === "insurance" ? insuranceNav : corporateNav;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              aria-label="Open navigation"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/80 hover:bg-slate-700 text-white ring-1 ring-slate-700/60"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <Shield className="lucide lucide-shield h-6 w-6 text-blue-400" />
            <h1 className="text-lg font-semibold">Cyber Score Pro</h1>
          </div>

          <div className="w-full sm:flex-1 sm:max-w-md sm:mx-8">
            <div className="relative">
              <Search className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                placeholder="Search clients, policies, risk assessments..."
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
            {/* Centered mode buttons aligned exactly under the search input */}
            <div className="mt-2 bg-slate-800 p-1 rounded-lg inline-flex gap-1 justify-center w-full">
              <button
                onClick={() => {
                  setMode("insurance");
                  setPage("risk-overview");
                }}
                className={`px-4 py-1.5 rounded-md text-sm text-center ${
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
                className={`px-4 py-1.5 rounded-md text-sm text-center ${
                  mode === "corporate"
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                Corporate-Focused Features
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-end w-full sm:w-auto">
            <span className="px-3 py-1 text-[11px] rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-medium">
              Active Monitoring
            </span>
            <span className="px-3 py-1 text-[11px] rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 font-medium">
              Real-time Updates
            </span>
          </div>
        </div>

        {/* Removed separate buttons row; now they sit under the search */}
      </header>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        {/* Mobile overlay sidebar */}
        {/* Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
        {/* Panel (always rendered for smooth slide animation) */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl md:hidden transform transition-transform duration-200 ease-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!mobileOpen}
        >
          <div className="p-4 flex items-center justify-between border-b border-slate-200">
            <span className="font-semibold text-slate-900">Navigation</span>
            <button
              className="inline-flex h-8 px-2 items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {nav.map((item) => {
              const active = page === item.id;
              const activeClasses =
                mode === "insurance"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-purple-50 text-purple-700";
              return (
                <button
                  key={item.id}
                  onClick={() => { setPage(item.id); setMobileOpen(false); }}
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
            <div className="pt-3 mt-3 border-t border-slate-200">
              <div className="px-2 pb-1 text-[11px] uppercase tracking-wide text-slate-500">Tools & Settings</div>
              {toolsNav.map((item) => {
                const active = page === item.id;
                const activeClasses =
                  mode === "insurance"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-purple-50 text-purple-700";
                return (
                  <button
                    key={item.id}
                    onClick={() => { setPage(item.id); setMobileOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-3 ${
                      active
                        ? activeClasses
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {(() => {
                      const Icon = item.icon as React.ElementType;
                      const color = active
                        ? mode === "insurance"
                          ? "text-blue-600"
                          : "text-purple-600"
                        : "text-slate-400";
                      return <Icon className={`${(item.iconClass as string)} ${color}`} />;
                    })()}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-112px)] p-4">
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
            <div className="pt-3 mt-3 border-t border-slate-200">
              <div className="px-2 pb-1 text-[11px] uppercase tracking-wide text-slate-500">Tools & Settings</div>
              {toolsNav.map((item) => {
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
                    {(() => {
                      const Icon = item.icon as React.ElementType;
                      const color = active
                        ? mode === "insurance"
                          ? "text-blue-600"
                          : "text-purple-600"
                        : "text-slate-400";
                      return <Icon className={`${(item.iconClass as string)} ${color}`} />;
                    })()}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-6">
          {mode === "insurance" ? (
            page === "risk-overview" ? (
              <RiskOverview />
            ) : page === "risk-trends" ? (
              <RiskTrends />
            ) : page === "corporate-clients" ? (
              <CorporateClients />
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
            ) : page === "ai-interface" ? (
              <AIInterface />
            ) : page === "reports" ? (
              <Reports />
            ) : page === "settings" ? (
              <Settings />
            ) : (
              <Placeholder title={`Insurance · ${nav.find(n => n.id === page)?.label ?? "Page"}`} />
            )
          ) : (
            page === "executive-risk-hub" ? (
              <ExecutiveRiskHub />
            )  : page === "vulnerability-ops" ? (
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
            ) : page === "ai-interface" ? (
              <AIInterface />
            ) : page === "reports" ? (
              <Reports />
            ) : page === "settings" ? (
              <Settings />
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

