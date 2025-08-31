export default function RiskOverview() {
    return (
       <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div data-slot="card-content" className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-600">Active Policies</p>
                                <p className="text-2xl font-bold text-slate-900">2,847</p>
                                <p className="text-xs text-emerald-600">Total insured entities</p>
                            </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-8 w-8 text-blue-500">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
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
                                <p className="text-sm font-medium text-slate-600">Total Premium</p>
                                <p className="text-2xl font-bold text-amber-600">$42.8M</p>
                                <p className="text-xs text-slate-500">Annual premium collected</p>
                            </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-8 w-8 text-amber-500">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div data-slot="card-content" className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-600">High Risk Clients</p>
                                <p className="text-2xl font-bold text-red-600">127</p>
                                <p className="text-xs text-red-600">+3 this week</p>
                            </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-8 w-8 text-red-500">
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
                                <p className="text-sm font-medium text-slate-600">Portfolio Value</p>
                                <p className="text-2xl font-bold text-slate-900">$847M</p>
                                <p className="text-xs text-emerald-600">Protected coverage</p>
                            </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-8 w-8 text-emerald-500">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent("app:navigate", { detail: { page: "corporate-clients" } }))}
                    className="text-left rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Quick Action</div>
                            <div className="mt-1 text-base font-semibold text-slate-900">My Vulnerable Clients</div>
                            <div className="text-xs text-slate-500">Review clients with elevated risk</div>
                        </div>
                        <div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                                <path d="M12 9v4"/>
                                <path d="M12 17h.01"/>
                            </svg>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent("app:navigate", { detail: { page: "client-portfolio" } }))}
                    className="text-left rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Browse</div>
                            <div className="mt-1 text-base font-semibold text-slate-900">View All Clients</div>
                            <div className="text-xs text-slate-500">Search and explore full portfolio</div>
                        </div>
                        <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm lg:col-span-2">
                    <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                        <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Client Risk Distribution by Industry</div>
                    </div>
                    <div data-slot="card-content" className="px-6">
                        <div className="space-y-4">
                            <div className="flex justify-between text-xs font-medium text-slate-600 mb-4"><span>Very Low</span><span>Low</span><span>Medium</span><span>High</span><span>Critical</span></div>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-emerald-100 text-emerald-800 p-4 rounded text-center font-medium">234</div>
                                    <div className="flex-1 bg-emerald-200 text-emerald-800 p-4 rounded text-center font-medium">156</div>
                                    <div className="flex-1 bg-amber-200 text-amber-800 p-4 rounded text-center font-medium">89</div>
                                    <div className="flex-1 bg-red-200 text-red-800 p-4 rounded text-center font-medium">34</div>
                                    <div className="flex-1 bg-red-300 text-red-900 p-4 rounded text-center font-medium">12</div>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Healthcare (525 clients)</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-emerald-100 text-emerald-800 p-4 rounded text-center font-medium">189</div>
                                    <div className="flex-1 bg-emerald-200 text-emerald-800 p-4 rounded text-center font-medium">134</div>
                                    <div className="flex-1 bg-amber-200 text-amber-800 p-4 rounded text-center font-medium">67</div>
                                    <div className="flex-1 bg-red-200 text-red-800 p-4 rounded text-center font-medium">28</div>
                                    <div className="flex-1 bg-red-300 text-red-900 p-4 rounded text-center font-medium">8</div>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Financial Services (426 clients)</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-emerald-100 text-emerald-800 p-4 rounded text-center font-medium">298</div>
                                    <div className="flex-1 bg-emerald-200 text-emerald-800 p-4 rounded text-center font-medium">187</div>
                                    <div className="flex-1 bg-amber-200 text-amber-800 p-4 rounded text-center font-medium">94</div>
                                    <div className="flex-1 bg-red-200 text-red-800 p-4 rounded text-center font-medium">41</div>
                                    <div className="flex-1 bg-red-300 text-red-900 p-4 rounded text-center font-medium">15</div>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Manufacturing (635 clients)</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-emerald-100 text-emerald-800 p-4 rounded text-center font-medium">156</div>
                                    <div className="flex-1 bg-emerald-200 text-emerald-800 p-4 rounded text-center font-medium">98</div>
                                    <div className="flex-1 bg-amber-200 text-amber-800 p-4 rounded text-center font-medium">76</div>
                                    <div className="flex-1 bg-red-200 text-red-800 p-4 rounded text-center font-medium">45</div>
                                    <div className="flex-1 bg-red-300 text-red-900 p-4 rounded text-center font-medium">23</div>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Technology (398 clients)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                        <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Overall Risk Grade</div>
                    </div>
                    <div data-slot="card-content" className="px-6">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg"><span className="text-4xl font-bold text-white">B+</span></div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center"><span className="text-sm text-slate-600">Portfolio Health</span><span className="text-sm font-bold text-black">78%</span></div>
                            <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                                <div className="h-2 w-[78%] bg-neutral-900" />
                            </div>
                            <div className="space-y-3 pt-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div><span className="text-sm text-slate-600">Low Risk</span>
                                    </div><span className="text-sm font-bold text-black">67%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div><span className="text-sm text-slate-600">Medium Risk</span>
                                    </div><span className="text-sm font-bold text-black">24%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div><span className="text-sm text-slate-600">High Risk</span>
                                    </div><span className="text-sm font-bold text-black">9%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                    <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Risk Management Lifecycle</div>
                </div>
                <div data-slot="card-content" className="px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-8 w-8 text-blue-600">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg></div>
                            <h3 className="font-semibold text-slate-900 mb-1">Assess</h3>
                            <p className="text-3xl font-bold text-slate-900 mb-1">1,247</p>
                            <p className="text-sm text-slate-600">Active assessments</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-amber-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-8 w-8 text-amber-600">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                </svg></div>
                            <h3 className="font-semibold text-slate-900 mb-1">Review</h3>
                            <p className="text-3xl font-bold text-slate-900 mb-1">89</p>
                            <p className="text-sm text-slate-600">Pending reviews</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-8 w-8 text-red-600">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                    <path d="M12 9v4"></path>
                                    <path d="M12 17h.01"></path>
                                </svg></div>
                            <h3 className="font-semibold text-slate-900 mb-1">Respond</h3>
                            <p className="text-3xl font-bold text-slate-900 mb-1">43</p>
                            <p className="text-sm text-slate-600">Active responses</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-8 w-8 text-emerald-600">
                                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg></div>
                            <h3 className="font-semibold text-slate-900 mb-1">Monitor</h3>
                            <p className="text-3xl font-bold text-slate-900 mb-1">2,715</p>
                            <p className="text-sm text-slate-600">Under monitoring</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}