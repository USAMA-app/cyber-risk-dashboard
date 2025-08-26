export default function RiskTrends() {
    return (
        <div className="space-y-6">
    <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Risk Trends Analysis</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-primary">Last 30 Days</button>
          <button className="btn btn-sm btn-primary">Last Quarter</button>
          <button className="btn btn-sm btn-primary">Last Year</button>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Risk Score Trend</p>
                        <p className="text-2xl font-bold text-emerald-600">↓ 2.3%</p>
                        <p className="text-xs text-emerald-600">Improving over 30 days</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-8 w-8 text-emerald-500">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">New Threats</p>
                        <p className="text-2xl font-bold text-red-600">+18%</p>
                        <p className="text-xs text-red-600">vs last month</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-8 w-8 text-red-500">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Incident Volume</p>
                        <p className="text-2xl font-bold text-amber-600">+7%</p>
                        <p className="text-xs text-amber-600">Weekly average</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-8 w-8 text-amber-500">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Client Growth</p>
                        <p className="text-2xl font-bold text-blue-600">+12%</p>
                        <p className="text-xs text-blue-600">New acquisitions</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-8 w-8 text-blue-500">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Industry Risk Trends (30 Days)</div>
        </div>
        <div data-slot="card-content" className="px-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div><span className="font-medium text-slate-900">Healthcare</span>
                    </div>
                    <div className="flex items-center gap-4"><span className="text-sm text-red-600">+15% risk increase</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-destructive text-white [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">Critical</span></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div><span className="font-medium text-slate-900">Financial Services</span>
                    </div>
                    <div className="flex items-center gap-4"><span className="text-sm text-amber-600">+8% risk increase</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Elevated</span></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div><span className="font-medium text-slate-900">Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-4"><span className="text-sm text-emerald-600">-3% risk decrease</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-emerald-600 border-emerald-600">Stable</span></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="font-medium text-slate-900">Technology</span>
                    </div>
                    <div className="flex items-center gap-4"><span className="text-sm text-blue-600">+5% risk increase</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-blue-600 border-blue-600">Moderate</span></div>
                </div>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Emerging Threat Patterns</div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-red-600 mt-0.5 flex-shrink-0">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                        </svg>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-red-900">Ransomware Evolution</p>
                            <p className="text-xs text-red-700 mt-1">New variants targeting backup systems</p>
                            <p className="text-xs text-slate-500 mt-1">Affecting 23% of clients</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-amber-900">Supply Chain Attacks</p>
                            <p className="text-xs text-amber-700 mt-1">Third-party software compromises</p>
                            <p className="text-xs text-slate-500 mt-1">Affecting 18% of clients</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-blue-900">AI-Powered Phishing</p>
                            <p className="text-xs text-blue-700 mt-1">Sophisticated social engineering</p>
                            <p className="text-xs text-slate-500 mt-1">Affecting 31% of clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Risk Mitigation Effectiveness</div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Multi-Factor Authentication</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-11%)' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">89%</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Security Awareness Training</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-24%)' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">76%</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Endpoint Protection</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-6%)' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">94%</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Backup &amp; Recovery</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-primary/20 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max="100" data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-18%)' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">82%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}