export default function ActiveThreats(){
     return(
         <div className="space-y-6">
             <div className="flex items-center justify-between">
                 <h1 className="text-2xl font-bold text-slate-900">Active Threat Monitoring</h1>
                 <div className="flex gap-2">
                    <button className="btn btn-sm btn-secondary">Threat Intelligence</button>
                    <button className="btn btn-sm btn-primary">Create Alert</button>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                      <div data-slot="card-content" className="p-6">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-sm font-medium text-slate-600">Active Threats</p>
                                  <p className="text-2xl font-bold text-red-600">127</p>
                                  <p className="text-xs text-red-600">+8 in last 24h</p>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-8 w-8 text-red-500">
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
                                  <p className="text-sm font-medium text-slate-600">Critical Alerts</p>
                                  <p className="text-2xl font-bold text-red-600">23</p>
                                  <p className="text-xs text-red-600">Immediate attention</p>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flashlight h-8 w-8 text-red-500">
                                  <path d="M18 6c0-1.1-.9-2-2-2H8C6.9 4 6 4.9 6 6v2a2 2 0 0 0 1 1.73V20l2-2 2 2 2-2 2 2V9.73A2 2 0 0 0 18 8z"></path>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                      <div data-slot="card-content" className="p-6">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-sm font-medium text-slate-600">Blocked Attacks</p>
                                  <p className="text-2xl font-bold text-slate-900">1,847</p>
                                  <p className="text-xs text-slate-500">Last 7 days</p>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-8 w-8 text-emerald-500">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                      <div data-slot="card-content" className="p-6">
                          <div className="flex items-center justify-between">
                              <div>
                                  <p className="text-sm font-medium text-slate-600">Avg Response Time</p>
                                  <p className="text-2xl font-bold text-slate-900">2.3h</p>
                                  <p className="text-xs text-emerald-600">-15% vs last month</p>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-8 w-8 text-blue-500">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>

              <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                  <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                      <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Critical Threats Requiring Immediate Action</div>
                  </div>
                  <div data-slot="card-content" className="px-6">
                      <div className="space-y-4">
                          <div className="flex items-start justify-between p-4 rounded-xl border border-red-200 bg-red-50 shadow-sm">
                              <div className="flex items-start gap-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-red-600 mt-0.5">
                                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                      <path d="M12 9v4"></path>
                                      <path d="M12 17h.01"></path>
                                  </svg>
                                  <div>
                                      <p className="font-semibold text-slate-900">Ransomware Detection - TechCorp Inc.</p>
                                      <p className="text-sm text-slate-700">Suspicious file encryption activity detected on multiple endpoints</p>
                                      <p className="text-xs text-slate-500 mt-1">Detected: 23 minutes ago · Affected Systems: 15 · Client Risk: A → D</p>
                                  </div>
                              </div>
                              <div className="text-right space-y-2">
                                  <span className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 text-white bg-red-600">Critical</span>
                                  <div>
                                      <button className="btn btn-sm btn-destructive btn-pill">Respond</button>
                                  </div>
                              </div>
                          </div>

                          <div className="flex items-start justify-between p-4 rounded-xl border border-red-200 bg-red-50 shadow-sm">
                              <div className="flex items-start gap-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload-cloud h-5 w-5 text-red-600 mt-0.5">
                                      <path d="M12 12v9"></path>
                                      <path d="m16 16-4-4-4 4"></path>
                                      <path d="M20.39 18.39A5 5 0 1 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  </svg>
                                  <div>
                                      <p className="font-semibold text-slate-900">Data Exfiltration - MedHealth Systems</p>
                                      <p className="text-sm text-slate-700">Unusual outbound data transfer patterns detected</p>
                                      <p className="text-xs text-slate-500 mt-1">Detected: 1 hour ago · Data Volume: 2.3 GB · Client Risk: B → D</p>
                                  </div>
                              </div>
                              <div className="text-right space-y-2">
                                  <span className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 text-white bg-red-600">Critical</span>
                                  <div>
                                      <button className="btn btn-sm btn-destructive btn-pill">Respond</button>
                                  </div>
                              </div>
                          </div>

                          <div className="flex items-start justify-between p-4 rounded-xl border border-amber-200 bg-amber-50 shadow-sm">
                              <div className="flex items-start gap-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-alert h-5 w-5 text-amber-600 mt-0.5">
                                      <path d="M12 8v4"></path>
                                      <path d="M12 16h.01"></path>
                                      <path d="M8 21h8a2 2 0 0 0 2-2v-7l-5-5-5 5v7a2 2 0 0 0 2 2z"></path>
                                  </svg>
                                  <div>
                                      <p className="font-semibold text-slate-900">Credential Compromise - Financial Partners</p>
                                      <p className="text-sm text-slate-700">Multiple failed login attempts from suspicious IP addresses</p>
                                      <p className="text-xs text-slate-500 mt-1">Detected: 2 hours ago · Failed Attempts: 47 · Client Risk: B → C</p>
                                  </div>
                              </div>
                              <div className="text-right space-y-2">
                                  <span className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 text-amber-700 border border-amber-400 bg-amber-50">High</span>
                                  <div>
                                      <button className="btn btn-sm btn-outline btn-pill border-amber-400 text-amber-700 hover:bg-amber-50">Investigate</button>
                                  </div>
                              </div>
                          </div>
                       </div>
                   </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                   <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                       <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                           <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Threat Categories (Last 30 Days)</div>
                       </div>
                       <div data-slot="card-content" className="px-6">
                           <div className="space-y-4">
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                       <span className="w-3 h-3 rounded-full bg-red-600"></span>
                                       <span className="text-slate-900 font-medium">Malware/Ransomware</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">89</span>
                                       <p className="text-xs text-slate-500">35% of threats</p>
                                   </div>
                               </div>
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                       <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                                       <span className="text-slate-900 font-medium">Phishing/Social Engineering</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">63</span>
                                       <p className="text-xs text-slate-500">25% of threats</p>
                                   </div>
                               </div>
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                       <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                                       <span className="text-slate-900 font-medium">Network Intrusions</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">47</span>
                                       <p className="text-xs text-slate-500">18% of threats</p>
                                   </div>
                               </div>
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                       <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                                       <span className="text-slate-900 font-medium">Insider Threats</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">29</span>
                                       <p className="text-xs text-slate-500">11% of threats</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                       <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                           <div data-slot="card-title" className="leading-none font-semibold text-slate-900">Geographic Threat Distribution</div>
                       </div>
                       <div data-slot="card-content" className="px-6">
                           <div className="space-y-4">
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-2">
                                       <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                                       <span className="text-slate-900">North America</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">156</span>
                                       <p className="text-xs text-slate-500">61% of threats</p>
                                   </div>
                               </div>
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-2">
                                       <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                                       <span className="text-slate-900">Europe</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">57</span>
                                       <p className="text-xs text-slate-500">22% of threats</p>
                                   </div>
                               </div>
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-2">
                                       <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                                       <span className="text-slate-900">Asia-Pacific</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">32</span>
                                       <p className="text-xs text-slate-500">13% of threats</p>
                                   </div>
                               </div>
                               <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-2">
                                       <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                                       <span className="text-slate-900">Other</span>
                                   </div>
                                   <div className="text-right">
                                       <span className="text-lg font-bold text-slate-900">9</span>
                                       <p className="text-xs text-slate-500">4% of threats</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       );
}