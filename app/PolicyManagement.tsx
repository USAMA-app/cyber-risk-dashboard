export default function PolicyManagement() {
  return (
    <div className="space-y-6">
      {/* Header actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-900">Policy Management</h1>
        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-secondary">Generate Report</button>
          <button className="btn btn-sm btn-primary">New Policy</button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div data-slot="card-content" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Policies</p>
                <p className="text-2xl font-bold text-slate-900">2,847</p>
                <p className="text-xs text-emerald-600">+47 this month</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check h-8 w-8 text-blue-500">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path>
                <path d="m9 15 2 2 4-4"></path>
              </svg>
            </div>
          </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div data-slot="card-content" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Expiring Soon</p>
                <p className="text-2xl font-bold text-amber-600">89</p>
                <p className="text-xs text-slate-500">Next 30 days</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-clock h-8 w-8 text-amber-500">
                <path d="M21 7.5V6a2 2 0 0 0-2-2h-1"></path>
                <path d="M16 2v4"></path>
                <path d="M3 7.5V6a2 2 0 0 1 2-2h1"></path>
                <path d="M8 2v4"></path>
                <rect width="18" height="16" x="3" y="4" rx="2"></rect>
                <path d="M21 16a4 4 0 1 1-4-4"></path>
                <path d="M22 22l-1.5-1.5"></path>
              </svg>
            </div>
          </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div data-slot="card-content" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Premium</p>
                <p className="text-2xl font-bold text-slate-900">$847M</p>
                <p className="text-xs text-emerald-600">Annual value</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-8 w-8 text-emerald-500">
                <path d="M12 1v22"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div data-slot="card-content" className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Claims Ratio</p>
                <p className="text-2xl font-bold text-slate-900">12.3%</p>
                <p className="text-xs text-emerald-600">Below industry avg</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 h-8 w-8 text-blue-500">
                <path d="M3 3v18h18"></path>
                <rect width="3" height="8" x="7" y="7" rx="1"></rect>
                <rect width="3" height="12" x="12" y="3" rx="1"></rect>
                <rect width="3" height="5" x="17" y="10" rx="1"></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Policy Renewals */}
      <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
          <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Upcoming Policy Renewals</div>
        </div>
        <div data-slot="card-content" className="px-6">
          <div className="space-y-3">
            {/* Row 1 Urgent */}
            <div className="flex items-center justify-between rounded-xl border bg-red-50/70 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">TechCorp Solutions</p>
                  <p className="text-sm text-slate-600">$2.4M Premium • Expires in 5 days</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium rounded-lg bg-red-600 text-white px-2 py-1">Urgent</span>
                <button className="btn btn-sm btn-destructive">Renew</button>
              </div>
            </div>

            {/* Row 2 Due soon */}
            <div className="flex items-center justify-between rounded-xl border bg-amber-50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days">
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">MedHealth Systems</p>
                  <p className="text-sm text-slate-600">$1.8M Premium • Expires in 12 days</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium rounded-lg border border-amber-300 text-amber-700 px-2 py-1 bg-white">Due Soon</span>
                <button className="btn btn-sm btn-outline border-amber-600 text-amber-700 hover:bg-amber-50">Review</button>
              </div>
            </div>

            {/* Row 3 Upcoming */}
            <div className="flex items-center justify-between rounded-xl border bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus">
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                    <path d="M12 14v6"></path>
                    <path d="M9 17h6"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Financial Partners LLC</p>
                  <p className="text-sm text-slate-600">$3.2M Premium • Expires in 18 days</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium rounded-lg border border-blue-300 text-blue-700 px-2 py-1 bg-white">Upcoming</span>
                <button className="btn btn-sm btn-outline border-blue-600 text-blue-700 hover:bg-blue-50">Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance by Coverage */}
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm lg:col-span-2">
          <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Policy Performance by Coverage Type</div>
          </div>
          <div data-slot="card-content" className="px-6">
            <ul className="space-y-5">
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Cyber Liability</span>
                  <span className="text-sm font-semibold text-slate-900">1,847</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-2 w-[78%] bg-neutral-900" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Data Breach Response</span>
                  <span className="text-sm font-semibold text-slate-900">1,234</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-2 w-[52%] bg-neutral-900" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Business Interruption</span>
                  <span className="text-sm font-semibold text-slate-900">892</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-2 w-[38%] bg-neutral-900" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Regulatory Defense</span>
                  <span className="text-sm font-semibold text-slate-900">634</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-2 w-[28%] bg-neutral-900" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Policy Changes */}
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Recent Policy Changes</div>
          </div>
          <div data-slot="card-content" className="px-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
                    <path d="M22 7l-8.5 8.5-5-5L2 17"></path>
                    <path d="M16 7h6v6"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Manufacturing Co. – Coverage Increased</p>
                  <p className="text-xs text-slate-600">Premium: $1.2M → $1.8M • 2 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw">
                    <path d="M3 2v6h6"></path>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L3 8"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">RetailChain Inc. – Policy Renewed</p>
                  <p className="text-xs text-slate-600">12-month term • $950K premium • 4 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">StartupTech – Risk Assessment Update</p>
                  <p className="text-xs text-slate-600">Risk grade: B → C • Premium adjustment pending • 6 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check">
                    <path d="M7.5 4.21 12 2l4.5 2.21L19.79 7.5 22 12l-2.21 4.5-3.29 3.29L12 22l-4.5-2.21L4.21 16.5 2 12l2.21-4.5Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">GlobalCorp – New Policy Issued</p>
                  <p className="text-xs text-slate-600">$5.2M premium • Multi-year agreement • 8 hours ago</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}