export default function IncidentResponse(){
     return (
         <div className="space-y-6">
             <div className="flex items-center justify-between">
                 <h1 className="text-2xl font-bold text-slate-900">Incident Response Center</h1>
                 <div className="flex gap-2">
                    <button data-slot="button" className="btn btn-sm btn-outline">Response Playbook</button>
                    <button data-slot="button" className="btn btn-sm btn-primary">Create Incident</button>
                  </div>
              </div>
 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                     <div data-slot="card-content" className="p-6">
                         <div className="flex items-center justify-between">
                             <div>
                                 <p className="text-sm font-medium text-slate-600">Active Incidents</p>
                                 <p className="text-2xl font-bold text-red-600">43</p>
                                 <p className="text-xs text-red-600">+5 in last 24h</p>
                             </div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-8 w-8 text-red-500"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
                         </div>
                     </div>
                 </div>
                 <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                     <div data-slot="card-content" className="p-6">
                         <div className="flex items-center justify-between">
                             <div>
                                 <p className="text-sm font-medium text-slate-600">Avg Response Time</p>
                                 <p className="text-2xl font-bold text-slate-900">2.3h</p>
                                 <p className="text-xs text-emerald-600">-15% vs target</p>
                             </div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-8 w-8 text-blue-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                         </div>
                     </div>
                 </div>
                 <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                     <div data-slot="card-content" className="p-6">
                         <div className="flex items-center justify-between">
                             <div>
                                 <p className="text-sm font-medium text-slate-600">Resolved This Month</p>
                                 <p className="text-2xl font-bold text-slate-900">234</p>
                                 <p className="text-xs text-emerald-600">94% success rate</p>
                             </div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle h-8 w-8 text-emerald-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                         </div>
                     </div>
                 </div>
                 <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                     <div data-slot="card-content" className="p-6">
                         <div className="flex items-center justify-between">
                             <div>
                                 <p className="text-sm font-medium text-slate-600">Claims Filed</p>
                                 <p className="text-2xl font-bold text-slate-900">18</p>
                                 <p className="text-xs text-slate-500">This month</p>
                             </div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-8 w-8 text-slate-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                         </div>
                     </div>
                 </div>
             </div>
 
             <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                 <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                     <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Critical Incidents Requiring Immediate Attention</div>
                 </div>
                 <div data-slot="card-content" className="px-6">
                     <div className="space-y-4">
                        <div className="relative rounded-2xl border border-red-100 bg-red-50/70 p-5 shadow-sm ring-1 ring-red-100/60">
                            <span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full border border-transparent bg-red-600 px-2.5 py-0.5 text-xs font-semibold text-white">Critical</span>
                            <div className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-red-600 mt-0.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                                <div>
                                    <p className="font-semibold text-slate-900">INC-2024-0847: Ransomware Attack</p>
                                    <p className="text-sm text-slate-700">TechCorp Solutions - Multiple systems encrypted, backup systems compromised</p>
                                    <p className="text-xs text-slate-500 mt-1">Started: 2 hours ago · Affected Users: 450 · Estimated Loss: $2.3M</p>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <button className="btn btn-sm btn-destructive">Escalate</button>
                                <button className="btn btn-sm btn-outline">Update Status</button>
                                <button className="btn btn-sm btn-outline">Contact Client</button>
                            </div>
                        </div>

                        <div className="relative rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100/70">
                            <span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full border border-amber-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-amber-700">High</span>
                            <div className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-5 w-5 text-amber-600 mt-0.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                <div>
                                    <p className="font-semibold text-slate-900">INC-2024-0846: Data Breach Investigation</p>
                                    <p className="text-sm text-slate-700">MedHealth Systems - Potential PHI exposure, forensic investigation ongoing</p>
                                    <p className="text-xs text-slate-500 mt-1">Started: 6 hours ago · Records at Risk: 12,000 · Compliance: HIPAA</p>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <button className="btn btn-sm btn-primary">Update Investigation</button>
                                <button className="btn btn-sm btn-primary">Legal Review</button>
                                <button className="btn btn-sm btn-primary">Notify Authorities</button>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
 
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                     <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                         <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Recent Incident Activity</div>
                     </div>
                     <div data-slot="card-content" className="px-6">
                         <div className="space-y-4">
                             <div className="flex items-start gap-3">
                                 <span className="w-2.5 h-2.5 rounded-full bg-red-600 mt-1"></span>
                                 <div>
                                     <p className="text-slate-900 font-medium">INC-2024-0847 escalated to Tier 3</p>
                                     <p className="text-xs text-slate-600">TechCorp Solutions · 15 minutes ago</p>
                                 </div>
                             </div>
                             <div className="flex items-start gap-3">
                                 <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1"></span>
                                 <div>
                                     <p className="text-slate-900 font-medium">Forensic team deployed to MedHealth</p>
                                     <p className="text-xs text-slate-600">INC-2024-0846 · 1 hour ago</p>
                                 </div>
                             </div>
                             <div className="flex items-start gap-3">
                                 <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-1"></span>
                                 <div>
                                     <p className="text-slate-900 font-medium">INC-2024-0845 resolved successfully</p>
                                     <p className="text-xs text-slate-600">Financial Partners LLC · 2 hours ago</p>
                                 </div>
                             </div>
                             <div className="flex items-start gap-3">
                                 <span className="w-2.5 h-2.5 rounded-full bg-amber-600 mt-1"></span>
                                 <div>
                                     <p className="text-slate-900 font-medium">Legal notification sent to authorities</p>
                                     <p className="text-xs text-slate-600">INC-2024-0846 · 3 hours ago</p>
                                 </div>
                             </div>
                             <div className="flex items-start gap-3">
                                 <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-1"></span>
                                 <div>
                                     <p className="text-slate-900 font-medium">New incident created</p>
                                     <p className="text-xs text-slate-600">Manufacturing Co. · 4 hours ago</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
 
                 <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                     <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                         <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Incident Categories (Last 30 Days)</div>
                     </div>
                     <div data-slot="card-content" className="px-6">
                         <div className="space-y-4">
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-red-600"></span><span className="text-slate-900 font-medium">Ransomware</span></div>
                                 <div className="text-right"><span className="text-lg font-bold text-slate-900">23</span><p className="text-xs text-slate-500">32% of incidents</p></div>
                             </div>
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-amber-500"></span><span className="text-slate-900 font-medium">Data Breach</span></div>
                                 <div className="text-right"><span className="text-lg font-bold text-slate-900">18</span><p className="text-xs text-slate-500">25% of incidents</p></div>
                             </div>
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-blue-600"></span><span className="text-slate-900 font-medium">Phishing</span></div>
                                 <div className="text-right"><span className="text-lg font-bold text-slate-900">15</span><p className="text-xs text-slate-500">21% of incidents</p></div>
                             </div>
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-emerald-600"></span><span className="text-slate-900 font-medium">System Compromise</span></div>
                                 <div className="text-right"><span className="text-lg font-bold text-slate-900">12</span><p className="text-xs text-slate-500">17% of incidents</p></div>
                             </div>
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-slate-400"></span><span className="text-slate-900 font-medium">Other</span></div>
                                 <div className="text-right"><span className="text-lg font-bold text-slate-900">4</span><p className="text-xs text-slate-500">5% of incidents</p></div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     );
 }