/* 
  EVS Professional Analytics Engine
  main.js 
*/

document.addEventListener("DOMContentLoaded", () => {
    // ==== Cinematic Preloader ====
    const body = document.body;
    const typeText = document.getElementById("typewriter-text");
    const preloaderFill = document.querySelector(".preloader-fill");
    const preloaderLogs = document.getElementById("preloader-logs");
    
    const textToType = "TerraNexus OS .  .  . Initialize";
    const bootLogs = [
        "v2.1 kernel loading...",
        "Establishing satellite uplinks...",
        "Syncing remote sensory arrays...",
        "Decrypting anomaly parameters...",
        "System Online."
    ];
    let i = 0;
    let logIdx = 0;
    
    // Typewriter effect
    const typeWriter = () => {
        if (i < textToType.length) {
            typeText.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    };
    
    // Fake progress bar & logs
    const animateBoot = () => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if(progress > 100) progress = 100;
            preloaderFill.style.width = progress + "%";
            
            if(Math.random() > 0.6 && logIdx < bootLogs.length) {
                preloaderLogs.innerText = `> ${bootLogs[logIdx]}`;
                logIdx++;
            }
            
            if(progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    body.classList.add("loaded");
                    // Delay chart initialization slightly to run AFTER preloader clears
                    setTimeout(() => {
                        initCharts();
                        updateDashboard(true);
                    }, 500);
                }, 800);
            }
        }, 300);
    };

    setTimeout(() => {
        typeWriter();
        animateBoot();
    }, 400);

    // ==== Data State ====
    const envData = window.dashboardData;
    let currentYear = "2025";
    let currentRegion = "Global";
  
    // ==== Elements ====
    const yearSelect = document.getElementById("yearSelect");
    const regionSelect = document.getElementById("regionSelect");
    const themeToggle = document.getElementById("themeToggle");
    const htmlDoc = document.documentElement;
    
    // Stats Elements
    const statCards = {
        co2Value: document.getElementById("co2Value"), co2Trend: document.getElementById("co2Trend"),
        tempValue: document.getElementById("tempValue"), tempTrend: document.getElementById("tempTrend"),
        aqiValue: document.getElementById("aqiValue"), aqiTrend: document.getElementById("aqiTrend"),
        seaLevelValue: document.getElementById("seaLevelValue"), seaLevelTrend: document.getElementById("seaLevelTrend")
    };
  
    // ==== Theme Engine ====
    const updateThemeColorsForCharts = () => {
        const isDark = htmlDoc.getAttribute("data-theme") === "dark";
        Chart.defaults.color = isDark ? "#cbd5e1" : "#64748b";
        Chart.defaults.scale.grid.color = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
        
        if (charts.line) charts.line.update();
        if (charts.bar)  charts.bar.update();
        if (charts.pie)  charts.pie.update();
    };
  
    themeToggle.addEventListener("click", () => {
        const newTheme = htmlDoc.getAttribute("data-theme") === "dark" ? "light" : "dark";
        htmlDoc.setAttribute("data-theme", newTheme);
        updateThemeColorsForCharts();
    });
  
    // ==== Chart Engine ====
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.elements.bar.borderRadius = 4;
    
    const charts = { line: null, bar: null, pie: null };
  
    const initCharts = () => {
        const ctxLine = document.getElementById("lineChart").getContext("2d");
        const ctxBar = document.getElementById("barChart").getContext("2d");
        const ctxPie = document.getElementById("pieChart").getContext("2d");
  
        // Line Chart (Temp Trend) - Added gradient fill for premium EVS look
        const gradientLine = ctxLine.createLinearGradient(0, 0, 0, 300);
        gradientLine.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
        gradientLine.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
  
        charts.line = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Temp Anomaly (°C)', data: [],
                    borderColor: '#ef4444', backgroundColor: gradientLine,
                    borderWidth: 3, fill: true, tension: 0.4,
                    pointBackgroundColor: '#0f172a', pointBorderColor: '#ef4444', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
                scales: { x: { grid: { display: false } }, y: { beginAtZero: false, border: { dash: [4, 4] } } },
                interaction: { mode: 'nearest', axis: 'x', intersect: false }
            }
        });
  
        // Bar Chart (CO2 output)
        charts.bar = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'CO₂ (Gt)', data: [],
                    backgroundColor: '#3b82f6', hoverBackgroundColor: '#60a5fa', barThickness: 'flex', maxBarThickness: 32
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { grid: { display: false } }, y: { beginAtZero: true, border: { dash: [4, 4] } } }
            }
        });
  
        // Pie/Donut Chart
        charts.pie = new Chart(ctxPie, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [], backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
                    borderWidth: 2, borderColor: 'var(--glass-bg)', hoverOffset: 4
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false, cutout: '75%',
                plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10, font: {size: 11} } } }
            }
        });
        
        updateThemeColorsForCharts();
    };
  
    // ==== Dashboard Update Logic ====
    const updateDashboard = (animate = true) => {
        const targetData = envData[currentYear]?.[currentRegion];
        if (!targetData) return;
  
        // Stats
        statCards.co2Value.innerHTML = `${targetData.stats.co2} <span class="unit">ppm</span>`;
        if(animate) statCards.co2Value.classList.add('value-update');
        statCards.co2Trend.textContent = targetData.trends.co2;
        
        statCards.tempValue.innerHTML = `${targetData.stats.temp} <span class="unit">°C</span>`;
        if(animate) statCards.tempValue.classList.add('value-update');
        statCards.tempTrend.textContent = targetData.trends.temp;
        
        statCards.aqiValue.innerHTML = `${targetData.stats.aqi} <span class="unit">Idx</span>`;
        if(animate) statCards.aqiValue.classList.add('value-update');
        statCards.aqiTrend.textContent = targetData.trends.aqi;
        
        statCards.seaLevelValue.innerHTML = targetData.stats.seaLevel === "N/A" ? 
            "N/A <span class='unit'></span>" : 
            `${targetData.stats.seaLevel} <span class="unit">mm</span>`;
        statCards.seaLevelTrend.textContent = targetData.trends.seaLevel;
  
        setTimeout(() => {
            statCards.co2Value.classList.remove('value-update');
            statCards.tempValue.classList.remove('value-update');
            statCards.aqiValue.classList.remove('value-update');
        }, 800);
  
        // Charts Updates
        if (charts.line) {
            charts.line.data.labels = targetData.charts.lineLabels;
            charts.line.data.datasets[0].data = targetData.charts.lineSeries;
            charts.line.update();
        }
        if (charts.bar) {
            charts.bar.data.labels = targetData.charts.barLabels;
            charts.bar.data.datasets[0].data = targetData.charts.barSeries;
            charts.bar.update();
        }
        if (charts.pie) {
            charts.pie.data.labels = targetData.charts.pieLabels;
            charts.pie.data.datasets[0].data = targetData.charts.pieSeries;
            charts.pie.update();
        }
    };
  
    // Dropdown listeners
    yearSelect.addEventListener("change", (e) => { currentYear = e.target.value; updateDashboard(); });
    regionSelect.addEventListener("change", (e) => { currentRegion = e.target.value; updateDashboard(); });
  
  
    // ============================================
    // EVS PROFESSIONAL LIVE SIMULATION ENGINES
    // ============================================
  
    // 1. Live Feed Injector
    const feedContainer = document.getElementById("feedContainer");
    const msgs = window.dashboardData.liveLogMessages || [];
    
    const addFeedItem = (msgObj) => {
        if(feedContainer.children.length > 4) feedContainer.lastElementChild.remove();
        
        const div = document.createElement("div");
        div.className = `feed-item ${msgObj.type}`;
        
        const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" });
        div.innerHTML = `<span class="feed-time">${time} ZULU</span>${msgObj.msg}`;
        
        feedContainer.prepend(div);
    };
    
    // Initial feed seeds
    if(msgs.length > 0) {
        addFeedItem(msgs[0]);
        setTimeout(() => addFeedItem(msgs[1]), 800);
    }
  
    setInterval(() => {
        if(msgs.length === 0) return;
        const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
        addFeedItem(randomMsg);
    }, 6000); // New simulated log every 6 seconds
  
  
    // 2. Interesting Facts Rotator
    const factText = document.getElementById("factText");
    const factProgress = document.getElementById("factProgress");
    const facts = window.dashboardData.interestingFacts || [];
    let currentFactIdx = 0;
  
    const rotateFact = () => {
        if(facts.length === 0) return;
        factProgress.style.transition = 'none';
        factProgress.style.width = '0%';
        
        // fade out
        factText.style.opacity = 0;
        
        setTimeout(() => {
            factText.textContent = facts[currentFactIdx];
            factText.style.opacity = 1;
            
            currentFactIdx = (currentFactIdx + 1) % facts.length;
            
            // start progress bar
            setTimeout(() => {
                factProgress.style.transition = 'width 8s linear';
                factProgress.style.width = '100%';
            }, 50);
            
        }, 300);
    };
    
    rotateFact(); // Start
    setInterval(rotateFact, 8000); // 8 second rotation
  
  
    // 3. Live Data Fluctuation (Micro-changes to simulate sensory data stream)
    setInterval(() => {
        if(currentYear !== "2025") return; // Only fluctuate active present year
        
        const targetData = envData[currentYear]?.[currentRegion];
        if(!targetData) return;
        
        // Slightly tweak CO2 locally in the DOM for visual effect
        let co2Num = parseFloat(targetData.stats.co2);
        co2Num += (Math.random() * 0.2 - 0.1); 
        statCards.co2Value.innerHTML = `${co2Num.toFixed(1)} <span class="unit">ppm</span>`;
        
        // Slightly fluctuate the last data point in the Line Chart
        if (charts.line && charts.line.data.datasets[0].data.length > 0) {
            const dataArr = charts.line.data.datasets[0].data;
            const lastIdx = dataArr.length - 1;
            let lastVal = parseFloat(dataArr[lastIdx]);
            lastVal += (Math.random() * 0.02 - 0.01);
            dataArr[lastIdx] = lastVal.toFixed(2);
            charts.line.update('none'); // Update without full animation for performance
        }
    }, 2500); // Every 2.5 seconds, jitter values slightly
  
    // ============================================
    // DATA TABLE REGISTRY LOGIC
    // ============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tableRows = document.querySelectorAll('.table-row');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active state to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter the rows
            tableRows.forEach(row => {
                if (filter === 'all' || row.dataset.category === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

  
    // ==== Startup ====
    // Handled inside the Preloader logic above.
  });
