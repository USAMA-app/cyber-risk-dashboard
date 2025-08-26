"use client";

import React from "react";
import { Card, CardContent } from "./components/Card";

export default function ThreatWarRoom() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Threat War Room</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500"></span>
            Threat Intel
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            Create Alert
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Threats</p>
                <p className="text-2xl font-bold text-slate-900">7</p>
                <p className="text-xs text-rose-600">High priority</p>
              </div>
              <span className="text-rose-500">⚠️</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">IOCs Detected</p>
                <p className="text-2xl font-bold text-slate-900">23</p>
                <p className="text-xs text-slate-500">Last 24 hours</p>
              </div>
              <span className="text-amber-500">⛔</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Blocked Attacks</p>
                <p className="text-2xl font-bold text-emerald-600">1,247</p>
                <p className="text-xs text-emerald-600">This week</p>
              </div>
              <span className="text-emerald-500">🛡️</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Threat Score</p>
                <p className="text-2xl font-bold text-slate-900">6.8</p>
                <p className="text-xs text-slate-500">Elevated</p>
              </div>
              <span className="text-violet-500">◉</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Threat Intelligence */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Active Threat Intelligence</h3>
          <div className="space-y-4">
            {/* Critical alert */}
            <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-rose-500">▲</span>
                    <p className="font-semibold text-slate-900">APT29 Campaign Targeting Financial Sector</p>
                  </div>
                  <p className="text-sm text-slate-600">Advanced persistent threat group using spear-phishing and zero-day exploits</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                    <span>Confidence: <span className="font-semibold text-rose-600">High</span></span>
                    <span>Relevance: <span className="font-semibold">95%</span></span>
                    <span>First Seen: <span className="font-semibold">2 days ago</span></span>
                  </div>
                </div>
                <span className="rounded-full bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white">Critical</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-700">Block IOCs</button>
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Hunt Threats</button>
              </div>
            </div>

            {/* High alert */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500">●</span>
                    <p className="font-semibold text-slate-900">Dark Web Credential Exposure</p>
                  </div>
                  <p className="text-sm text-slate-600">Employee credentials discovered on underground forums</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                    <span>Affected Users: <span className="font-semibold">12</span></span>
                    <span>Source: <span className="font-semibold">RaidForums</span></span>
                    <span>Discovered: <span className="font-semibold">6 hours ago</span></span>
                  </div>
                </div>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">High</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800">Force Password Reset</button>
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Notify Users</button>
              </div>
            </div>

            {/* Medium alert */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">☰</span>
                    <p className="font-semibold text-slate-900">Supply Chain Compromise Alert</p>
                  </div>
                  <p className="text-sm text-slate-600">Third-party software vendor security incident reported</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                    <span>Vendor: <span className="font-semibold">SoftwareCorp</span></span>
                    <span>Products: <span className="font-semibold">3</span></span>
                    <span>Risk Level: <span className="font-semibold">Medium</span></span>
                  </div>
                </div>
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">Medium</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Assess Impact</button>
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Contact Vendor</button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Actor Activity */}
        <Card>
          <CardContent>
            <h3 className="font-semibold text-slate-900 mb-4">Threat Actor Activity</h3>
            <div className="space-y-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rose-500 inline-block"></span>
                  <div>
                    <p className="font-medium text-slate-900">APT Groups</p>
                    <p className="text-xs text-rose-600">Active campaigns</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-slate-900">3</p>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-amber-500 inline-block"></span>
                  <div>
                    <p className="font-medium text-slate-900">Cybercriminals</p>
                    <p className="text-xs text-slate-500">Ransomware groups</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-slate-900">12</p>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-blue-500 inline-block"></span>
                  <div>
                    <p className="font-medium text-slate-900">Hacktivists</p>
                    <p className="text-xs text-slate-500">Monitoring</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-slate-900">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attack Vectors */}
        <Card>
          <CardContent>
            <h3 className="font-semibold text-slate-900 mb-4">Attack Vectors</h3>
            <div className="space-y-4">
              {[
                { label: "Email Phishing", value: 45, color: "bg-slate-900" },
                { label: "Web Application", value: 28, color: "bg-slate-700" },
                { label: "Network Intrusion", value: 18, color: "bg-slate-500" },
                { label: "Social Engineering", value: 9, color: "bg-slate-400" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">{item.label}</span>
                    <span className="font-semibold text-slate-900">{item.value}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
