"use client";

import React from "react";
import { Card, CardContent } from "./components/Card";

export default function NetworkSecurity() {
  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-900">Network Security</h1>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm hover:bg-slate-50">Network Map</button>
          <button className="px-3.5 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800">Security Scan</button>
        </div>
      </div>

      {/* Top KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Network Segments */}
        <Card>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm">Network Segments</p>
                <div className="mt-1 text-2xl font-semibold text-slate-900">12</div>
                <p className="text-xs text-slate-500 mt-1">Monitored zones</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v2H7V3zm-2 6h14v2H5V9zm3 6h8v2H8v-2z"/></svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Connections */}
        <Card>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm">Active Connections</p>
                <div className="mt-1 text-2xl font-semibold text-slate-900">8,247</div>
                <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                  Real-time
                </p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h3l3-8 4 14 3-8h5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blocked Threats */}
        <Card>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm">Blocked Threats</p>
                <div className="mt-1 text-2xl font-semibold text-rose-600">156</div>
                <p className="text-xs text-slate-500 mt-1">Last 24 hours</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4zm0 6a2 2 0 100 4 2 2 0 000-4z"/></svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Health */}
        <Card>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm">Network Health</p>
                <div className="mt-1 text-2xl font-semibold text-slate-900">94%</div>
                <p className="text-xs text-emerald-600 mt-1">Optimal</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z"/></svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Middle section: Controls + Traffic */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Security Controls Status */}
        <Card>
          <CardContent>
            <h3 className="font-semibold text-slate-900 mb-4">Security Controls Status</h3>
            <ul className="space-y-4">
              {[
                { name: "Firewall", status: "Active", color: "emerald", value: "99.9%", icon: (
                  <path d="M4 4h16v6H4V4zm0 10h16v6H4v-6z" />
                ) },
                { name: "IDS/IPS", status: "Active", color: "emerald", value: "98.7%", icon: (
                  <path d="M12 2l7 7-7 7-7-7 7-7z" />
                ) },
                { name: "VPN Gateway", status: "Active", color: "emerald", value: "97.2%", icon: (
                  <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
                ) },
                { name: "Network Segmentation", status: "Partial", color: "amber", value: "85.3%", icon: (
                  <path d="M3 7h18M3 17h18" />
                ) },
                { name: "Network Monitoring", status: "Active", color: "emerald", value: "96.8%", icon: (
                  <path d="M3 12h6l2 3 4-6 2 3h4" />
                ) },
              ].map((item) => (
                <li key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                    </div>
                    <div className="text-slate-800">{item.name}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs rounded-full px-2 py-1 border ${item.color === "emerald" ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-amber-700 bg-amber-50 border-amber-200"}`}>
                      {item.status}
                    </span>
                    <span className="text-slate-800 font-medium">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Traffic Analysis */}
        <Card>
          <CardContent>
            <h3 className="font-semibold text-slate-900 mb-4">Traffic Analysis</h3>
            <div className="space-y-5">
              {[
                { label: "Inbound Traffic", value: 75, text: "2.3 GB/s", color: "bg-slate-800" },
                { label: "Outbound Traffic", value: 60, text: "1.8 GB/s", color: "bg-slate-600" },
                { label: "Internal Traffic", value: 90, text: "4.1 GB/s", color: "bg-slate-700" },
                { label: "Blocked Traffic", value: 35, text: "156 MB/s", color: "bg-rose-600", textClass: "text-rose-600" },
              ].map((t) => (
                <div key={t.label} className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-4 md:col-span-4 text-slate-600 text-sm">{t.label}</div>
                  <div className="col-span-6 md:col-span-6">
                    <div className="h-2.5 w-full rounded-full bg-slate-100">
                      <div className={`h-2.5 rounded-full ${t.color}`} style={{ width: `${t.value}%` }} />
                    </div>
                  </div>
                  <div className={`col-span-2 md:col-span-2 text-right text-sm font-medium ${t.textClass ?? "text-slate-800"}`}>{t.text}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Network Threats */}
      <Card className="">
        <CardContent>
          <h3 className="font-semibold text-slate-900 mb-4">Active Network Threats</h3>

          <div className="space-y-4">
            {/* DDoS Attack */}
            <div className="border border-rose-200 bg-rose-50 rounded-xl p-5 relative">
              <span className="absolute right-4 top-4 text-xs bg-rose-600 text-white rounded-full px-2 py-0.5">Critical</span>
              <div className="flex items-start gap-3">
                <div className="text-rose-600 mt-0.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l10 18H2L12 2zm0 4v6"/><circle cx="12" cy="17" r="1"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-slate-900 font-medium">DDoS Attack Detected</div>
                  <p className="text-sm text-slate-600 mt-1">Large-scale distributed denial of service attack targeting web servers</p>
                  <div className="text-xs text-slate-500 mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    <span>Source IPs: <span className="text-slate-800">2,847</span></span>
                    <span>Target: <span className="text-slate-800">Web DMZ</span></span>
                    <span>Duration: <span className="text-slate-800">23 minutes</span></span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button className="px-3 py-1.5 rounded-full bg-rose-600 text-white text-sm hover:bg-rose-700">Block Sources</button>
                    <button className="px-3 py-1.5 rounded-full border border-rose-200 text-rose-700 bg-white text-sm hover:bg-rose-50">Enable DDoS Protection</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Suspicious Scanning */}
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-5 relative">
              <span className="absolute right-4 top-4 text-xs bg-amber-500 text-white rounded-full px-2 py-0.5">High</span>
              <div className="flex items-start gap-3">
                <div className="text-amber-600 mt-0.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2h4v4h-4zM4 10h4v4H4zm12 0h4v4h-4zM10 18h4v4h-4z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-slate-900 font-medium">Suspicious Network Scanning</div>
                  <p className="text-sm text-slate-600 mt-1">Port scanning activity detected from internal network segment</p>
                  <div className="text-xs text-slate-500 mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    <span>Source: <span className="text-slate-800">192.168.10.45</span></span>
                    <span>Ports Scanned: <span className="text-slate-800">1,024</span></span>
                    <span>Started: <span className="text-slate-800">1 hour ago</span></span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800">Investigate Host</button>
                    <button className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 bg-white text-sm hover:bg-slate-50">Isolate System</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Exfiltration */}
            <div className="border border-indigo-200 bg-indigo-50 rounded-xl p-5 relative">
              <span className="absolute right-4 top-4 text-xs bg-indigo-600 text-white rounded-full px-2 py-0.5">Medium</span>
              <div className="flex items-start gap-3">
                <div className="text-indigo-600 mt-0.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v10l4-4m-4 4l-4-4M4 19h16"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-slate-900 font-medium">Unusual Data Exfiltration</div>
                  <p className="text-sm text-slate-600 mt-1">Large outbound data transfer detected outside business hours</p>
                  <div className="text-xs text-slate-500 mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    <span>Data Volume: <span className="text-slate-800">2.3 GB</span></span>
                    <span>Destination: <span className="text-slate-800">External</span></span>
                    <span>Time: <span className="text-slate-800">02:30 AM</span></span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 bg-white text-sm hover:bg-slate-50">Analyze Traffic</button>
                    <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800">Check User Activity</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
