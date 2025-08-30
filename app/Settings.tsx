"use client";

import { useState } from "react";
import { Settings as SettingsIcon, Bell, ShieldCheck, Building2, User } from "lucide-react";

export default function Settings() {
  const [orgName, setOrgName] = useState("Cyber Guard Inc.");
  const [timezone, setTimezone] = useState("UTC");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [mfaRequired, setMfaRequired] = useState(true);

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
          <SettingsIcon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 leading-tight">Settings</h2>
          <p className="text-sm text-slate-700">Organization, notifications, and security controls.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section className="rounded-xl border border-slate-200 bg-white">
          <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2 text-sm font-medium text-slate-900">
            <Building2 className="h-4 w-4" /> Organization
          </div>
          <div className="p-4 space-y-3">
            <label className="block text-sm">
              <span className="text-slate-900">Organization name</span>
              <input value={orgName} onChange={(e) => setOrgName(e.target.value)} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm">
              <span className="text-slate-900">Timezone</span>
              <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm">
                {[
                  "UTC",
                  "America/Los_Angeles",
                  "America/New_York",
                  "Europe/London",
                  "Asia/Karachi",
                ].map((z) => (
                  <option key={z}>{z}</option>
                ))}
              </select>
            </label>
            <div className="pt-2">
              <button className="rounded-md bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black">Save Organization</button>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white">
          <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Bell className="h-4 w-4" /> Notifications
          </div>
          <div className="p-4 space-y-3 text-slate-900">
            <label className="flex items-center gap-2 text-sm text-slate-900">
              <input type="checkbox" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} />
              Email me weekly risk summaries
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-900">
              <input type="checkbox" defaultChecked /> Critical alerts (immediate)
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-900">
              <input type="checkbox" /> Product updates
            </label>
            <div className="pt-2">
              <button className="rounded-md bg-slate-900 text-white px-3 py-2 text-sm hover:bg-black">Save Preferences</button>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white lg:col-span-2">
          <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2 text-sm font-medium text-slate-900">
            <ShieldCheck className="h-4 w-4" /> Security
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="space-y-3">
              <div className="text-sm text-slate-900">Multi-Factor Authentication</div>
              <label className="flex items-center gap-2 text-sm text-slate-900">
                <input type="checkbox" checked={mfaRequired} onChange={(e) => setMfaRequired(e.target.checked)} />
                Require MFA for all users
              </label>
              <div className="text-xs text-slate-800">Strongly recommended to reduce account takeover risk.</div>
              <button className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Update Security</button>
            </div>
            <div className="md:col-span-2 rounded-lg border border-slate-200 p-3 bg-slate-50">
              <div className="text-sm font-medium text-slate-900 flex items-center gap-2"><User className="h-4 w-4" /> Sessions</div>
              <div className="mt-2 text-xs text-slate-800">Active: Karachi, Windows 11, last activity 2m ago. You can revoke sessions from your account page.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
