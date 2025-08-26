export default function ComplianceMonitoring() {
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex items-center justify-between">
         <h1 className="text-2xl font-semibold text-slate-900">Compliance Monitoring</h1>
         <div className="flex gap-3">
           <button className="px-4 py-2 rounded-lg border bg-white text-slate-900 shadow-sm hover:bg-slate-50">Compliance Report</button>
           <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white shadow-sm hover:bg-neutral-800">Schedule Audit</button>
         </div>
       </div>

       {/* KPI Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
           <div data-slot="card-content" className="p-6">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-slate-600">Overall Compliance</p>
                 <p className="text-3xl font-bold text-emerald-600">94.2%</p>
                 <p className="text-xs text-emerald-600">Above target</p>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check h-8 w-8 text-emerald-500">
                 <path d="M7 11l2 2 4-4" />
                 <path d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
               </svg>
             </div>
           </div>
         </div>
         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
           <div data-slot="card-content" className="p-6">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-slate-600">Non-Compliant Clients</p>
                 <p className="text-3xl font-bold text-red-600">47</p>
                 <p className="text-xs text-red-600">Require attention</p>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-8 w-8 text-red-500">
                 <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                 <path d="M12 9v4" />
                 <path d="M12 17h.01" />
               </svg>
             </div>
           </div>
         </div>
         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
           <div data-slot="card-content" className="p-6">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-slate-600">Pending Audits</p>
                 <p className="text-3xl font-bold text-amber-600">23</p>
                 <p className="text-xs text-amber-600">This quarter</p>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-8 w-8 text-amber-500">
                 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                 <circle cx="12" cy="12" r="3" />
               </svg>
             </div>
           </div>
         </div>
         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
           <div data-slot="card-content" className="p-6">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-slate-600">Certifications</p>
                 <p className="text-3xl font-bold text-slate-900">1,847</p>
                 <p className="text-xs text-slate-500">Active certificates</p>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge h-8 w-8 text-blue-600">
                 <path d="M12 17l-5 3 1.9-5.6L4 9h6L12 3l2 6h6l-4.9 5.4L17 20z" />
               </svg>
             </div>
           </div>
         </div>
       </div>

       {/* Compliance Framework Status */}
       <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
         <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
           <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Compliance Framework Status</div>
         </div>
         <div data-slot="card-content" className="px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Left column */}
             <div className="space-y-5">
               {[
                 { name: 'SOC 2 Type II', pct: 96 },
                 { name: 'ISO 27001', pct: 89 },
                 { name: 'NIST Framework', pct: 92 },
                 { name: 'PCI DSS', pct: 87 },
               ].map((item) => (
                 <div key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-4">
                   <span className="text-slate-700 text-sm font-medium">{item.name}</span>
                   <div className="flex items-center gap-3">
                     <div className="h-2 w-32 bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-neutral-900" style={{ width: `${item.pct}%` }} />
                     </div>
                     <span className="text-sm font-semibold text-slate-900">{item.pct}%</span>
                   </div>
                 </div>
               ))}
             </div>
             {/* Right column */}
             <div className="space-y-5">
               {[
                 { name: 'HIPAA', pct: 94 },
                 { name: 'GDPR', pct: 91 },
                 { name: 'CCPA', pct: 88 },
                 { name: 'SOX', pct: 85 },
               ].map((item) => (
                 <div key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-4">
                   <span className="text-slate-700 text-sm font-medium">{item.name}</span>
                   <div className="flex items-center gap-3">
                     <div className="h-2 w-32 bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-neutral-900" style={{ width: `${item.pct}%` }} />
                     </div>
                     <span className="text-sm font-semibold text-slate-900">{item.pct}%</span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

       {/* Critical Compliance Issues */}
       <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
         <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
           <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Critical Compliance Issues</div>
         </div>
         <div data-slot="card-content" className="px-6 space-y-4">
           {/* Issue 1 - Critical */}
           <div className="rounded-xl border bg-red-50/60 p-5 shadow-sm">
             <div className="flex items-start justify-between">
               <div className="flex items-start gap-3">
                 <div className="mt-0.5 rounded-full bg-red-100 p-2 text-red-600">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
                     <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                     <path d="M12 9v4" />
                     <path d="M12 17h.01" />
                   </svg>
                 </div>
                 <div>
                   <p className="font-semibold text-slate-900">TechCorp Solutions - SOC 2 Deficiency</p>
                   <p className="text-sm text-slate-600">Access control procedures not properly documented</p>
                   <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
                     <span>Framework: <span className="font-medium">SOC 2 Type II</span></span>
                     <span>Due: <span className="font-medium">15 days</span></span>
                     <span>Risk: <span className="font-medium text-red-600">High</span></span>
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <span className="rounded-full bg-red-100 text-red-700 text-xs font-semibold px-3 py-1">Critical</span>
               </div>
             </div>
             <div className="mt-4">
               <button className="px-4 py-2 rounded-lg bg-red-600 text-white shadow-sm hover:bg-red-700">Remediate</button>
             </div>
           </div>

           {/* Issue 2 - High */}
           <div className="rounded-xl border bg-amber-50 p-5 shadow-sm">
             <div className="flex items-start justify-between">
               <div className="flex items-start gap-3">
                 <div className="mt-0.5 rounded-full bg-amber-100 p-2 text-amber-600">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                     <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                     <circle cx="12" cy="12" r="3" />
                   </svg>
                 </div>
                 <div>
                   <p className="font-semibold text-slate-900">MedHealth Systems - HIPAA Gap</p>
                   <p className="text-sm text-slate-600">Business Associate Agreements require updates</p>
                   <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
                     <span>Framework: <span className="font-medium">HIPAA</span></span>
                     <span>Due: <span className="font-medium">30 days</span></span>
                     <span>Risk: <span className="font-medium text-amber-600">Medium</span></span>
                   </div>
                 </div>
               </div>
               <span className="rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1">High</span>
             </div>
             <div className="mt-4">
               <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white shadow-sm hover:bg-neutral-800">Schedule Review</button>
             </div>
           </div>

           {/* Issue 3 - Medium */}
           <div className="rounded-xl border bg-blue-50 p-5 shadow-sm">
             <div className="flex items-start justify-between">
               <div className="flex items-start gap-3">
                 <div className="mt-0.5 rounded-full bg-blue-100 p-2 text-blue-600">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check">
                     <path d="M7 11l2 2 4-4" />
                     <path d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
                   </svg>
                 </div>
                 <div>
                   <p className="font-semibold text-slate-900">Financial Partners - PCI DSS Update</p>
                   <p className="text-sm text-slate-600">Quarterly vulnerability scans pending</p>
                   <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
                     <span>Framework: <span className="font-medium">PCI DSS</span></span>
                     <span>Due: <span className="font-medium">45 days</span></span>
                     <span>Risk: <span className="font-medium text-slate-600">Low</span></span>
                   </div>
                 </div>
               </div>
               <span className="rounded-full bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1">Medium</span>
             </div>
             <div className="mt-4">
               <button className="px-4 py-2 rounded-lg border bg-white text-slate-900 shadow-sm hover:bg-slate-50">Schedule Scan</button>
             </div>
           </div>
         </div>
       </div>

       {/* Trends and Activities */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Trends */}
         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
           <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
             <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Compliance Trends (6 Months)</div>
           </div>
           <div data-slot="card-content" className="px-6 space-y-4">
             <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
               <div className="flex items-center gap-3">
                 <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">↑</span>
                 <span className="text-slate-800 font-medium">Overall Improvement</span>
               </div>
               <span className="text-emerald-700 font-semibold">+7.2%</span>
             </div>
             <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3">
               <div className="flex items-center gap-3">
                 <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 grid place-items-center">★</span>
                 <span className="text-slate-800 font-medium">New Certifications</span>
               </div>
               <span className="text-blue-700 font-semibold">+234</span>
             </div>
             <div className="flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3">
               <div className="flex items-center gap-3">
                 <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 grid place-items-center">⏱</span>
                 <span className="text-slate-800 font-medium">Avg Remediation Time</span>
               </div>
               <span className="text-amber-700 font-semibold">-18%</span>
             </div>
           </div>
         </div>

         {/* Upcoming Activities */}
         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
           <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
             <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Upcoming Compliance Activities</div>
           </div>
           <div data-slot="card-content" className="px-6">
             <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <span className="mt-0.5 w-6 h-6 grid place-items-center rounded-full bg-blue-100 text-blue-700">📅</span>
                 <div>
                   <p className="font-medium text-slate-900">SOC 2 Type II Audit - GlobalCorp</p>
                   <p className="text-sm text-slate-600">Scheduled for next week</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <span className="mt-0.5 w-6 h-6 grid place-items-center rounded-full bg-blue-100 text-blue-700">📜</span>
                 <div>
                   <p className="font-medium text-slate-900">ISO 27001 Recertification</p>
                   <p className="text-sm text-slate-600">Due in 2 weeks</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <span className="mt-0.5 w-6 h-6 grid place-items-center rounded-full bg-amber-100 text-amber-700">🧪</span>
                 <div>
                   <p className="font-medium text-slate-900">HIPAA Risk Assessment</p>
                   <p className="text-sm text-slate-600">Healthcare clients - Due in 3 weeks</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <span className="mt-0.5 w-6 h-6 grid place-items-center rounded-full bg-red-100 text-red-700">⚠️</span>
                 <div>
                   <p className="font-medium text-slate-900">PCI DSS Quarterly Scan</p>
                   <p className="text-sm text-slate-600">Financial sector - Due in 1 month</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }