export default function ClientPortfolio() {
    return (
        <div className="space-y-6">
    <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Client Portfolio Management</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-secondary">Export Report</button>
          <button className="btn btn-sm btn-primary">Add New Client</button>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Total Clients</p>
                        <p className="text-2xl font-bold text-slate-900">2,847</p>
                        <p className="text-xs text-emerald-600">+47 this month</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-8 w-8 text-blue-500">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx={9} cy={7} r={4}></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Premium Volume</p>
                        <p className="text-2xl font-bold text-slate-900">$847M</p>
                        <p className="text-xs text-emerald-600">+12% YoY growth</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-8 w-8 text-emerald-500">
                        <line x1={12} x2={12} y1={2} y2={22}></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Avg Policy Value</p>
                        <p className="text-2xl font-bold text-slate-900">$297K</p>
                        <p className="text-xs text-blue-600">Per client</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-8 w-8 text-blue-500">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-content" className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-600">Retention Rate</p>
                        <p className="text-2xl font-bold text-slate-900">94.2%</p>
                        <p className="text-xs text-emerald-600">Above industry avg</p>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-8 w-8 text-emerald-500">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Client Risk Distribution</div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full"></div><span className="font-medium text-slate-900">Low Risk (A-B)</span>
                        </div>
                        <div className="text-right"><span className="text-lg font-bold text-slate-900">1,908</span>
                            <p className="text-xs text-slate-500">67% of portfolio</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-amber-500 rounded-full"></div><span className="font-medium text-slate-900">Medium Risk (C)</span>
                        </div>
                        <div className="text-right"><span className="text-lg font-bold text-slate-900">683</span>
                            <p className="text-xs text-slate-500">24% of portfolio</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div><span className="font-medium text-slate-900">High Risk (D-F)</span>
                        </div>
                        <div className="text-right"><span className="text-lg font-bold text-slate-900">256</span>
                            <p className="text-xs text-slate-500">9% of portfolio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Top Industries</div>
            </div>
            <div data-slot="card-content" className="px-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Manufacturing</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-slate-200 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max={100} data-slot="progress-indicator" className="bg-black h-full rounded-full transition-all" style={{ width: '22%' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">635</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Healthcare</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-slate-200 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max={100} data-slot="progress-indicator" className="bg-black h-full rounded-full transition-all" style={{ width: '18%' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">525</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Financial Services</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-slate-200 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max={100} data-slot="progress-indicator" className="bg-black h-full rounded-full transition-all" style={{ width: '15%' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">426</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-600">Technology</span>
                        <div className="flex items-center gap-3">
                            <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" data-slot="progress" className="bg-slate-200 relative overflow-hidden rounded-full w-24 h-2">
                                <div data-state="indeterminate" data-max={100} data-slot="progress-indicator" className="bg-black h-full rounded-full transition-all" style={{ width: '14%' }}></div>
                            </div><span className="text-sm font-bold text-slate-900">398</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Recent Client Activity</div>
        </div>
        <div data-slot="card-content" className="px-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-emerald-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                    </svg>
                        <div>
                            <p className="font-medium text-slate-900">TechCorp Solutions</p>
                            <p className="text-sm text-slate-600">Policy renewed - $2.4M coverage</p>
                        </div>
                    </div>
                    <div className="text-right"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-emerald-600 border-emerald-600">Renewed</span>
                        <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 text-blue-600">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx={9} cy={7} r={4}></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                        <div>
                            <p className="font-medium text-slate-900">MedHealth Systems</p>
                            <p className="text-sm text-slate-600">New client onboarding completed</p>
                        </div>
                    </div>
                    <div className="text-right"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-blue-600 border-blue-600">New Client</span>
                        <p className="text-xs text-slate-500 mt-1">4 hours ago</p>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-amber-600">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                    </svg>
                        <div>
                            <p className="font-medium text-slate-900">Financial Partners LLC</p>
                            <p className="text-sm text-slate-600">Risk score increased - requires review</p>
                        </div>
                    </div>
                    <div className="text-right"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">Risk Change</span>
                        <p className="text-xs text-slate-500 mt-1">6 hours ago</p>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-5 w-5 text-red-600">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                        <div>
                            <p className="font-medium text-slate-900">Manufacturing Co.</p>
                            <p className="text-sm text-slate-600">Security incident reported</p>
                        </div>
                    </div>
                    <div className="text-right"><span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-destructive text-white [a&amp;]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">Incident</span>
                        <p className="text-xs text-slate-500 mt-1">8 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> )
}