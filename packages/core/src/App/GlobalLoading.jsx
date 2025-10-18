import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import './GlobalLoading.scss';
import LOGO from './Logo/NILOTE.png';

const DollarPrintersLoading = () => {
    const [progress, setProgress] = useState(0);
    const controls = useAnimation();
    const [showElements, setShowElements] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState('markets');
    const [marketData, setMarketData] = useState({
        eurusd: `1.08${Math.floor(Math.random() * 9)}`,
        btcusd: `6${Math.floor(Math.random() * 9000) + 1000}`,
        volatility: `75.${Math.floor(Math.random() * 9)}%`,
        gold: `1,9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
        sp500: `4,7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
    });

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        // Reduce animation intensity on mobile for better performance
        const dataPointCount = isMobile ? 8 : 25;
        const binaryRainCount = isMobile ? 10 : 30;

        // Update market data interval
        const marketInterval = setInterval(() => {
            setMarketData({
                eurusd: `1.08${Math.floor(Math.random() * 9)}`,
                btcusd: `6${Math.floor(Math.random() * 9000) + 1000}`,
                volatility: `75.${Math.floor(Math.random() * 9)}%`,
                gold: `1,9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
                sp500: `4,7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
            });
        }, 1500);

        // Progress timer
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + 1;
                if (newProgress >= 100) {
                    clearInterval(progressInterval);
                    clearInterval(marketInterval);
                }
                return newProgress;
            });
        }, 100);

        // Animated entrance
        setTimeout(() => {
            controls.start('visible');
            setShowElements(true);
        }, 500);

        return () => {
            clearInterval(progressInterval);
            clearInterval(marketInterval);
        };
    }, [isMobile]);

    const chartPath = `M 0,50 
                    C 50,30 100,70 150,40 
                    S 200,60 250,30 
                    S 300,70 350,50 
                    S 400,20 450,60 
                    S 500,40 550,70 
                    S 600,30 650,50 
                    S 700,80 750,40 
                    S 800,60 850,30 
                    S 900,70 950,50 
                    L 1000,50`;

    return (
        <div className='dollar-printers-loading'>
            {/* Modern gradient background */}
            <div className='modern-background'>
                <div className='gradient-orbs'>
                    <div className='orb orb-1'></div>
                    <div className='orb orb-2'></div>
                    <div className='orb orb-3'></div>
                </div>
                <div className='grid-pattern'></div>
            </div>

            {/* Currency particles */}
            <div className='currency-particles'>
                {Array.from({ length: isMobile ? 12 : 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className='currency-symbol'
                        initial={{
                            opacity: 0,
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.2, 0],
                            rotate: 360,
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: 8 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    >
                        {['$', '€', '£', '¥', '₿', '₽'][Math.floor(Math.random() * 6)]}
                    </motion.div>
                ))}
            </div>

            {/* Main container with glass morphism */}
            <div className='main-container'>
                {/* Header section */}
                <motion.div
                    className='brand-header'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='logo-section'>
                        <motion.div
                            className='logo-container'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <img src={LOGO} alt='DollarPrinters Logo' className='logo' />
                            <div className='logo-glow'></div>
                        </motion.div>
                        <div className='brand-text'>
                            <h1 className='brand-name'>DollarPrinters</h1>
                            <p className='brand-tagline'>Print Your Financial Future</p>
                        </div>
                    </div>
                    
                    <div className='connection-status'>
                        <div className='status-dot'></div>
                        <span>Connected to Deriv API</span>
                    </div>
                </motion.div>

                {/* Dashboard grid */}
                {showElements && (
                    <div className='dashboard-grid'>
                        {/* Left panel - Stats */}
                        <motion.div
                            className='stats-panel'
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className='panel-header'>
                                <h3>Performance Metrics</h3>
                                <div className='live-badge'>LIVE</div>
                            </div>
                            
                            <div className='stats-grid'>
                                <div className='stat-card'>
                                    <div className='stat-icon'>⚡</div>
                                    <div className='stat-info'>
                                        <span className='stat-value'>98.7%</span>
                                        <span className='stat-label'>Success Rate</span>
                                    </div>
                                    <div className='stat-trend up'>+2.3%</div>
                                </div>
                                
                                <div className='stat-card'>
                                    <div className='stat-icon'>🔄</div>
                                    <div className='stat-info'>
                                        <span className='stat-value'>1.2s</span>
                                        <span className='stat-label'>Avg Response</span>
                                    </div>
                                    <div className='stat-trend down'>-0.4s</div>
                                </div>
                                
                                <div className='stat-card'>
                                    <div className='stat-icon'>📊</div>
                                    <div className='stat-info'>
                                        <span className='stat-value'>256</span>
                                        <span className='stat-label'>Active Bots</span>
                                    </div>
                                    <div className='stat-trend up'>+12</div>
                                </div>
                                
                                <div className='stat-card'>
                                    <div className='stat-icon'>💰</div>
                                    <div className='stat-info'>
                                        <span className='stat-value'>$12.4K</span>
                                        <span className='stat-label'>24h Profit</span>
                                    </div>
                                    <div className='stat-trend up'>+$842</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Center panel - Main chart */}
                        <motion.div
                            className='chart-panel'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className='panel-tabs'>
                                <button 
                                    className={`tab ${activeTab === 'markets' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('markets')}
                                >
                                    Market Data
                                </button>
                                <button 
                                    className={`tab ${activeTab === 'analysis' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('analysis')}
                                >
                                    AI Analysis
                                </button>
                                <button 
                                    className={`tab ${activeTab === 'bots' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('bots')}
                                >
                                    Trading Bots
                                </button>
                            </div>

                            <div className='chart-container'>
                                <div className='chart-header'>
                                    <div className='chart-title'>Real-time Market Stream</div>
                                    <div className='time-frames'>
                                        {['1H', '4H', '1D', '1W'].map(timeframe => (
                                            <button key={timeframe} className='timeframe-btn'>{timeframe}</button>
                                        ))}
                                    </div>
                                </div>

                                <div className='chart-visualization'>
                                    <svg
                                        width='100%'
                                        height={isMobile ? '120' : '200'}
                                        viewBox='0 0 1000 100'
                                        className='chart-svg'
                                    >
                                        <defs>
                                            <linearGradient id="dollarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00D1B2" />
                                                <stop offset="50%" stopColor="#009E87" />
                                                <stop offset="100%" stopColor="#007A6B" />
                                            </linearGradient>
                                            <filter id="dollarGlow" x="-30%" y="-30%" width="160%" height="160%">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>
                                        <motion.path
                                            d={chartPath}
                                            stroke="url(#dollarGradient)"
                                            strokeWidth="3"
                                            fill="none"
                                            filter="url(#dollarGlow)"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2.5, ease: 'easeInOut' }}
                                        />
                                    </svg>

                                    {/* Animated price markers */}
                                    <div className='price-markers'>
                                        {[0, 25, 50, 75, 100].map((position) => (
                                            <motion.div
                                                key={position}
                                                className='price-marker'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1 + position * 0.02 }}
                                            >
                                                ${(65000 + Math.random() * 2000).toFixed(0)}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced market ticker */}
                                <div className='market-ticker'>
                                    <div className='ticker-header'>
                                        <span>Live Quotes</span>
                                        <div className='ticker-controls'>
                                            <button className='control-btn'>⏸️</button>
                                            <button className='control-btn'>⏭️</button>
                                        </div>
                                    </div>
                                    <div className='ticker-items'>
                                        {Object.entries(marketData).map(([key, value]) => (
                                            <motion.div
                                                key={key}
                                                className='ticker-item'
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <span className='asset-name'>{key.toUpperCase()}</span>
                                                <motion.span
                                                    className='asset-price'
                                                    key={`${key}-${value}`}
                                                    initial={{ scale: 0.8 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 500 }}
                                                >
                                                    {value}
                                                </motion.span>
                                                <motion.span
                                                    className='price-change'
                                                    animate={{ 
                                                        color: Math.random() > 0.5 ? '#00ff88' : '#ff4444',
                                                        backgroundColor: Math.random() > 0.5 ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 68, 68, 0.1)'
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {Math.random() > 0.5 ? '+' : ''}{(Math.random() * 2).toFixed(2)}%
                                                </motion.span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right panel - Bot activity */}
                        <motion.div
                            className='bots-panel'
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <div className='panel-header'>
                                <h3>Active Printers</h3>
                                <div className='bots-count'>12 Online</div>
                            </div>

                            <div className='bots-list'>
                                {['Scalper Pro', 'Trend Rider', 'Arbitrage Master', 'AI Predictor', 'Momentum Hunter'].map((bot, index) => (
                                    <motion.div
                                        key={bot}
                                        className='bot-item'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.1 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className='bot-avatar'>
                                            <div className='avatar-icon'>
                                                {['🤖', '⚡', '🔮', '🎯', '🚀'][index]}
                                            </div>
                                            <div className='status-indicator'></div>
                                        </div>
                                        <div className='bot-details'>
                                            <span className='bot-name'>{bot}</span>
                                            <span className='bot-performance'>+${(Math.random() * 500).toFixed(2)}</span>
                                        </div>
                                        <div className='bot-progress'>
                                            <div 
                                                className='progress-fill'
                                                style={{ width: `${70 + Math.random() * 30}%` }}
                                            ></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Progress section */}
                <motion.div
                    className='progress-section'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className='progress-header'>
                        <h3>System Initialization</h3>
                        <span className='progress-percent'>{progress}%</span>
                    </div>
                    
                    <div className='progress-container'>
                        <div className='progress-track'>
                            <motion.div
                                className='progress-fill'
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='progress-shine'></div>
                            </motion.div>
                        </div>
                        
                        <div className='progress-steps'>
                            {['API Connect', 'Data Stream', 'Bot Setup', 'Security Check', 'Ready'].map((step, index) => (
                                <div
                                    key={step}
                                    className={`progress-step ${progress >= (index + 1) * 20 ? 'completed' : ''}`}
                                >
                                    <div className='step-indicator'>
                                        {progress >= (index + 1) * 20 ? '✓' : index + 1}
                                    </div>
                                    <span className='step-label'>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='loading-message'>
                        <div className='typing-animation'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <motion.span
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        >
                            {progress < 30 && 'Connecting to Deriv trading servers...'}
                            {progress >= 30 && progress < 60 && 'Loading market data streams...'}
                            {progress >= 60 && progress < 90 && 'Initializing AI trading algorithms...'}
                            {progress >= 90 && 'Finalizing security protocols...'}
                        </motion.span>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    className='footer'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className='partnership'>
                        <span>Powered by</span>
                        <div className='partner-logo'>Deriv</div>
                        <span>Technology</span>
                    </div>
                    
                    <div className='security-badge'>
                        <div className='shield-icon'>🛡️</div>
                        <span>256-bit SSL Encrypted</span>
                    </div>
                </motion.div>
            </div>

            {/* Floating action buttons */}
            <div className='floating-actions'>
                <motion.button
                    className='fab'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    📊
                </motion.button>
                <motion.button
                    className='fab'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ⚙️
                </motion.button>
            </div>
        </div>
    );
};

export default DollarPrintersLoading;