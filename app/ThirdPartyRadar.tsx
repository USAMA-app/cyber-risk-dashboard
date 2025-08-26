"use client";

import React from "react";
import { Card, CardContent } from "./components/Card";

export default function ThirdPartyRadar() {
  return (
    <div className="space-y-6">
      {/* Header + actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Third-Party Risk Radar</h1>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary rounded-full">Risk Report</button>
          <button className="btn btn-sm btn-primary rounded-full">Add Vendor</button>
        </div>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Vendors</p>
                <p className="text-2xl font-bold text-slate-900">169</p>
                <p className="text-xs text-blue-600">Active relationships</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2 h-8 w-8 text-blue-500">
                <path d="M6 22V2h6v20" />
                <path d="M12 22V7h6v15" />
                <path d="M6 13h6" />
                <path d="M6 17h6" />
                <path d="M12 9h6" />
                <path d="M12 13h6" />
                <path d="M12 17h6" />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">High Risk</p>
                <p className="text-2xl font-bold text-red-600">8</p>
                <p className="text-xs text-red-600">Immediate attention</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-8 w-8 text-red-500">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Assessments Due</p>
                <p className="text-2xl font-bold text-amber-600">23</p>
                <p className="text-xs text-amber-600">Next 30 days</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-8 w-8 text-amber-500">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Risk Score</p>
                <p className="text-2xl font-bold text-slate-900">6.2</p>
                <p className="text-xs text-emerald-600">Improving</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radar h-8 w-8 text-emerald-500">
                <path d="M12 12V2a10 10 0 1 1-7.07 2.93" />
                <path d="M12 12 20 4" />
                <path d="M12 12h8" />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scorecard */}
      <Card className="">
        <CardContent>
          <h3 className="font-semibold text-slate-900 mb-6">Third-Party Risk Scorecard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check text-emerald-600">
                  <path d="M7 11l2 2 4-4" />
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-600">Low Risk Vendors</p>
                <p className="text-3xl font-bold text-slate-900 leading-tight">127</p>
                <p className="text-sm text-slate-500">Compliant & monitored</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-4 text-amber-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l2 2" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-600">Medium Risk Vendors</p>
                <p className="text-3xl font-bold text-slate-900 leading-tight">34</p>
                <p className="text-sm text-slate-500">Require attention</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert text-red-600">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-600">High Risk Vendors</p>
                <p className="text-3xl font-bold text-slate-900 leading-tight">8</p>
                <p className="text-sm text-slate-500">Immediate action needed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* High risk vendors list */}
      <Card>
        <CardContent className="space-y-4">
          <h3 className="font-semibold text-slate-900">High Risk Vendors Requiring Attention</h3>

          {/* Vendor 1 */}
          <div className="relative rounded-xl border border-red-200 bg-red-50/60 p-5">
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">Critical</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-red-100 p-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server">
                  <rect width="16" height="6" x="4" y="2" rx="2" />
                  <rect width="16" height="6" x="4" y="16" rx="2" />
                  <path d="M18 6h.01" />
                  <path d="M18 18h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-red-700">CloudStorage Inc.</p>
                <p className="text-sm text-red-700/90">Data breach incident reported, customer data potentially exposed</p>
                <p className="mt-2 text-xs text-red-700/80">Risk Score: 9.2 • Data Access: High • Last Assessment: 6 months ago</p>
                <div className="mt-3 flex gap-2">
                  <button className="btn btn-sm btn-destructive rounded-full">Emergency Review</button>
                  <button className="btn btn-sm btn-outline rounded-full">Suspend Access</button>
                </div>
              </div>
            </div>
          </div>

          {/* Vendor 2 */}
          <div className="relative rounded-xl border border-red-200 bg-red-50/60 p-5">
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">Critical</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-red-100 p-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network">
                  <path d="M12 9V5" />
                  <path d="M12 19v-4" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a8 8 0 0 0 0-6" />
                  <path d="M4.6 9a8 8 0 0 0 0 6" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-red-700">NetworkSolutions Corp</p>
                <p className="text-sm text-red-700/90">Multiple critical vulnerabilities in managed infrastructure</p>
                <p className="mt-2 text-xs text-red-700/80">Risk Score: 8.7 • Network Access: Critical • Vulnerabilities: 15</p>
                <div className="mt-3 flex gap-2">
                  <button className="btn btn-sm btn-destructive rounded-full">Immediate Patch</button>
                  <button className="btn btn-sm btn-outline rounded-full">Isolate Systems</button>
                </div>
              </div>
            </div>
          </div>

          {/* Vendor 3 */}
          <div className="relative rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">High</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-amber-100 p-2 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-info">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-amber-900">DataCenter Partners</p>
                <p className="text-sm text-amber-900/90">Compliance certifications expired, renewal process delayed</p>
                <p className="mt-2 text-xs text-amber-900/80">Risk Score: 7.8 • Compliance: Expired • Contract: Up for renewal</p>
                <div className="mt-3 flex gap-2">
                  <button className="btn btn-sm btn-outline rounded-full">Request Certification</button>
                  <button className="btn btn-sm btn-outline rounded-full">Contract Review</button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendor Categories */}
        <Card>
          <CardContent>
            <h3 className="font-semibold text-slate-900 mb-4">Vendor Categories</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-slate-800">
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span><span>Cloud Services</span></div>
                <div className="text-right"><div className="font-semibold">45</div><div className="text-xs text-slate-500">27% of vendors</div></div>
              </li>
              <li className="flex items-center justify-between text-slate-800">
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span><span>Software Providers</span></div>
                <div className="text-right"><div className="font-semibold">38</div><div className="text-xs text-slate-500">22% of vendors</div></div>
              </li>
              <li className="flex items-center justify-between text-slate-800">
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-green-500"></span><span>Professional Services</span></div>
                <div className="text-right"><div className="font-semibold">32</div><div className="text-xs text-slate-500">19% of vendors</div></div>
              </li>
              <li className="flex items-center justify-between text-slate-800">
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-orange-500"></span><span>Infrastructure</span></div>
                <div className="text-right"><div className="font-semibold">28</div><div className="text-xs text-slate-500">17% of vendors</div></div>
              </li>
              <li className="flex items-center justify-between text-slate-800">
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span><span>Other</span></div>
                <div className="text-right"><div className="font-semibold">26</div><div className="text-xs text-slate-500">15% of vendors</div></div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardContent>
            <h3 className="font-semibold text-slate-900 mb-4">Recent Vendor Activity</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                <div>
                  <p className="text-slate-900">CloudStorage Inc. – <span className="font-medium">Security incident reported</span></p>
                  <p className="text-xs text-slate-500">Risk score increased to 9.2 • 2 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <div>
                  <p className="text-slate-900">SecureSoft Ltd. – <span className="font-medium">Assessment completed</span></p>
                  <p className="text-xs text-slate-500">Risk score improved to 4.2 • 4 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                <div>
                  <p className="text-slate-900">TechPartners Inc. – <span className="font-medium">Contract renewed</span></p>
                  <p className="text-xs text-slate-500">3-year agreement with enhanced SLAs • 6 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <div>
                  <p className="text-slate-900">DataCenter Partners – <span className="font-medium">Certification expired</span></p>
                  <p className="text-xs text-slate-500">SOC 2 Type II needs renewal • 8 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                <div>
                  <p className="text-slate-900">New vendor onboarding initiated</p>
                  <p className="text-xs text-slate-500">CyberDefense Corp – Initial assessment • 12 hours ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
