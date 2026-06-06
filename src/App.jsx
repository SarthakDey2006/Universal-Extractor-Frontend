import { useState, useEffect } from 'react';

const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const SparkleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const CopyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>;
const ArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const ShieldAlertIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>;

const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');

        body { 
            color: #f8fafc; 
            font-family: 'Space Grotesk', sans-serif; 
            background-color: #000000; 
            min-height: 100vh;
            overflow-x: hidden;
            margin: 0;
        }

        .bg-color-aurora {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: -3;
            background: 
                radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 1) 0%, transparent 50%),
                radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 1) 0%, transparent 60%);
            background-size: 200% 200%;
            animation: auroraShift 8s ease-in-out infinite alternate;
        }

        .bg-dot-mask {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: -2;
            background-color: #050505; 
            -webkit-mask-image: radial-gradient(circle, transparent 1.5px, black 2px);
            -webkit-mask-size: 24px 24px;
            mask-image: radial-gradient(circle, transparent 1.5px, black 2px);
            mask-size: 24px 24px;
            animation: floatDots 20s linear infinite;
        }

        .bg-fade-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;
            background: linear-gradient(to bottom, #000000 10%, rgba(0,0,0,0.8) 35%, transparent 100%);
            pointer-events: none;
        }

        @keyframes auroraShift {
            0% { background-position: 0% 100%; filter: hue-rotate(0deg); }
            100% { background-position: 100% 100%; filter: hue-rotate(45deg); }
        }

        @keyframes floatDots {
            0% { background-position: 0px 0px; }
            100% { background-position: 240px 240px; }
        }

        .font-code { font-family: 'JetBrains Mono', monospace; }

        .bento-card { 
            background: rgba(10, 10, 10, 0.75); 
            backdrop-filter: blur(16px); 
            border: 1px solid rgba(249, 115, 22, 0.25);
            box-shadow: 0 8px 32px 0 rgba(249, 115, 22, 0.1);
            border-radius: 1.2rem;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ea580c; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #f97316; }
        
        .text-gradient { 
            background: linear-gradient(135deg, #f97316 0%, #eab308 100%); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
        }

        .search-pill { transition: all 0.3s ease; }
        .search-pill:focus-within {
            box-shadow: 0 0 0 1px rgba(249, 115, 22, 0.5), 0 0 30px rgba(249, 115, 22, 0.2);
            border-color: rgba(249, 115, 22, 0.8);
            background: rgba(10, 10, 10, 0.9);
        }

        /* UPGRADE: Custom Bot Error Animation */
        @keyframes pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .bot-error-card {
            animation: pulse-red 2s infinite;
        }
    `}</style>
);

export default function App() {
    const [url, setUrl] = useState('');
    const [quality, setQuality] = useState('best');
    const [loadingInfo, setLoadingInfo] = useState(false);
    const [videoInfo, setVideoInfo] = useState(null);
    const [error, setError] = useState('');
    const [isBotError, setIsBotError] = useState(false); // UPGRADE: Bot error state
    
    // Download State
    const [downloading, setDownloading] = useState(false);
    const [taskId, setTaskId] = useState(null);
    const [progress, setProgress] = useState(0);
    const [speed, setSpeed] = useState('');
    const [downloadStatus, setDownloadStatus] = useState('');
    const [finalFileReady, setFinalFileReady] = useState(false);
    
    // AI State
    const [aiGenerating, setAiGenerating] = useState(false);
    const [aiResults, setAiResults] = useState(null);
    const [aiError, setAiError] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    // DYNAMIC DOMAIN DETECTION
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_BASE = isLocalhost ? 'http://127.0.0.1:8000/api' : 'https://universal-extractor-backend.onrender.com/api'; // UPDATE YOUR RENDER URL

    // Polling logic for download progress
    useEffect(() => {
        let interval;
        if (taskId && !finalFileReady && downloadStatus !== 'error') {
            interval = setInterval(async () => {
                try {
                    const res = await fetch(`${API_BASE}/progress/${taskId}`);
                    const data = await res.json();
                    
                    if (data.status === 'downloading' || data.status === 'processing') {
                        setProgress(data.progress || 0);
                        setSpeed(data.speed || '');
                        setDownloadStatus(data.status);
                    } else if (data.status === 'finished') {
                        setProgress(100);
                        setDownloadStatus('finished');
                        setFinalFileReady(true);
                        clearInterval(interval);
                    } else if (data.status === 'error') {
                        throw new Error("Backend processing error");
                    }
                } catch (err) {
                    clearInterval(interval);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [taskId, finalFileReady, downloadStatus, API_BASE]);

    // UPGRADE: Better Error Interception
    const handleError = (dataDetail) => {
        if (dataDetail === "BOT_BLOCKED") {
            setIsBotError(true);
            setError("YouTube's anti-bot system blocked the extraction. The server's datacenter IP is flagged.");
        } else {
            setIsBotError(false);
            setError(`Extraction Error: ${dataDetail}`);
        }
    }

    const fetchInfo = async (e) => {
        e.preventDefault();
        if (!url) return;
        
        setLoadingInfo(true); setError(''); setVideoInfo(null);
        setAiResults(null); setAiError(''); resetDownloadState(); setIsBotError(false);

        try {
            const response = await fetch(`${API_BASE}/info`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            const data = await response.json();
            
            if (!response.ok) {
                handleError(data.detail || 'Failed to fetch info');
                return;
            }
            setVideoInfo(data);
        } catch (err) {
            setIsBotError(false);
            setError(`Connection Error: Ensure your Render backend is awake.`);
        } finally {
            setLoadingInfo(false);
        }
    };

    const resetDownloadState = () => {
        setDownloading(false); setTaskId(null); setProgress(0);
        setSpeed(''); setDownloadStatus(''); setFinalFileReady(false);
    };

    const handleStartDownload = async () => {
        resetDownloadState();
        setDownloading(true);
        setDownloadStatus('starting');

        try {
            const response = await fetch(`${API_BASE}/download`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url, quality })
            });
            
            const data = await response.json();
            if (!response.ok) {
                handleError(data.detail || 'Failed to start task');
                resetDownloadState();
                return;
            }
            setTaskId(data.task_id);
        } catch (err) {
            setIsBotError(false);
            setError("Connection Error: Server failed to respond.");
            resetDownloadState();
        }
    };

    const handleDownloadFile = () => {
        if (!taskId) return;
        const a = document.createElement('a');
        a.href = `${API_BASE}/retrieve/${taskId}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const generateAIContent = async () => {
        setAiGenerating(true); setAiError('');
        try {
            const response = await fetch(`${API_BASE}/ai-kit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: videoInfo.title, platform: videoInfo.platform, uploader: videoInfo.uploader })
            });
            if (!response.ok) throw new Error("API request failed");
            const textResult = await response.json();
            setAiResults(JSON.parse(textResult));
        } catch (err) {
            setAiError(`AI Error: ${err.message}`);
        } finally {
            setAiGenerating(false);
        }
    };

    const copyToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text; document.body.appendChild(textArea); textArea.select();
        try {
            document.execCommand('copy');
            setCopySuccess(true); setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {}
        document.body.removeChild(textArea);
    };

    const getSizeStr = (res) => {
        if (videoInfo && videoInfo.sizes && videoInfo.sizes[res]) return videoInfo.sizes[res];
        return "";
    };

    return (
        <>
            <GlobalStyles />
            <div className="bg-color-aurora"></div>
            <div className="bg-dot-mask"></div>
            <div className="bg-fade-overlay"></div>

            <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-10 animate-fade-in-up" style={{animationDuration: '0.8s'}}>
                    <div className="font-code inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400 mb-4 backdrop-blur-sm shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                        <SparkleIcon /> PROTOCOL_V2_ACTIVE
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
                        Universal <span className="text-gradient">Extractor</span>
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto text-base mb-6">
                        Bypass limits. Extract media from anywhere.
                    </p>
                    
                    {/* Prominent Crafted By Badge */}
                    <div className="inline-block font-code bg-zinc-900/80 border border-orange-500/30 px-4 py-2 rounded-lg shadow-lg shadow-orange-500/10">
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">&gt; CRAFTED_BY: </span>
                        <span className="text-sm font-bold text-orange-400">SARTHAK DEY</span>
                    </div>
                </div>

                {/* Search Input with Clear Button */}
                <div className="w-full max-w-2xl mb-12 animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
                    <form onSubmit={fetchInfo} className="search-pill bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-xl rounded-2xl p-2 flex items-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                        <div className="relative flex-grow flex items-center">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-orange-500">
                                <LinkIcon />
                            </div>
                            <input
                                type="url"
                                required
                                placeholder="INITIALIZE_URL_TARGET..."
                                className="font-code w-full bg-transparent border-none focus:outline-none text-zinc-100 placeholder-zinc-600 py-3 pl-12 pr-12 text-base"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            {url && (
                                <button 
                                    type="button" 
                                    onClick={() => setUrl('')}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-orange-500 transition-colors"
                                    title="Clear URL"
                                >
                                    <XIcon />
                                </button>
                            )}
                        </div>
                        <button 
                            type="submit" 
                            disabled={loadingInfo || !url}
                            className="bg-orange-600 text-black hover:bg-orange-500 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-sm ml-2 uppercase tracking-wide text-sm flex-shrink-0"
                        >
                            {loadingInfo ? <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div> : <>Analyze <ArrowRight /></>}
                        </button>
                    </form>

                    {/* UPGRADE: Bot Error Alert Card */}
                    {error && (
                        <div className={`mt-6 p-5 text-left rounded-2xl border font-code text-sm flex gap-4 ${isBotError ? 'bg-red-950/80 border-red-500/50 text-red-200 bot-error-card' : 'bg-red-900/20 border-red-500/30 text-red-400'}`}>
                            <div className={`mt-0.5 ${isBotError ? 'text-red-400' : ''}`}>
                                {isBotError ? <ShieldAlertIcon /> : <XIcon />}
                            </div>
                            <div>
                                <h3 className={`font-bold text-base mb-1 ${isBotError ? 'text-red-400' : ''}`}>
                                    {isBotError ? "YOUTUBE SECURITY FIREWALL TRIGGERED" : "EXTRACTION FAILED"}
                                </h3>
                                <p className="mb-2">{error}</p>
                                {isBotError && (
                                    <div className="bg-red-900/40 border border-red-500/20 p-3 rounded-lg mt-3 text-xs leading-relaxed">
                                        <span className="font-bold text-red-300">ADMIN FIX REQUIRED:</span> You must export fresh YouTube cookies, encode them to Base64, and update the <span className="bg-black/50 px-1 py-0.5 rounded text-white">YOUTUBE_COOKIES_BASE64</span> Environment Variable in your Render dashboard.
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Area */}
                {videoInfo && !error && (
                    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                        
                        {/* Card 1: Media Preview */}
                        <div className="bento-card col-span-1 md:col-span-1 p-2 flex flex-col relative group overflow-hidden">
                            {videoInfo.thumbnail ? (
                                <img src={videoInfo.thumbnail} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-[1rem] aspect-square md:aspect-auto border border-zinc-800/50" />
                            ) : (
                                <div className="w-full h-full bg-zinc-900 rounded-[1rem] flex items-center justify-center text-zinc-600 border border-zinc-800/50">No Image</div>
                            )}
                            <div className="font-code absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 text-xs rounded border border-orange-500/30 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                                {videoInfo.duration}
                            </div>
                        </div>

                        {/* Card 2 & 3 Column: Details & Download */}
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                            
                            <div className="bento-card p-6 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-code px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded text-xs font-bold border border-yellow-500/30 uppercase tracking-wider">
                                        {videoInfo.platform}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-100 mb-2 line-clamp-2 leading-tight">{videoInfo.title}</h2>
                                <p className="font-code text-zinc-500 text-xs">SOURCE: <span className="text-zinc-300 font-medium">{videoInfo.uploader}</span></p>
                            </div>

                            <div className="bento-card p-6">
                                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                    <div className="flex-grow">
                                        <label className="font-code block text-xs font-semibold text-orange-500/80 uppercase tracking-wider mb-2">TARGET_RESOLUTION</label>
                                        <div className="relative">
                                            <select 
                                                value={quality} 
                                                onChange={(e) => setQuality(e.target.value)}
                                                disabled={downloading}
                                                className="font-code w-full bg-zinc-950 border border-zinc-800 text-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_10px_rgba(249,115,22,0.2)] transition-all appearance-none"
                                            >
                                                <option value="best">Highest Quality {getSizeStr('1080p') || getSizeStr('720p')}</option>
                                                <option value="1080p">1080p {getSizeStr('1080p')}</option>
                                                <option value="720p">720p {getSizeStr('720p')}</option>
                                                <option value="480p">480p {getSizeStr('480p')}</option>
                                                <option value="audio">Audio Only (MP3) {getSizeStr('audio')}</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-orange-500">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    {!taskId ? (
                                        <button 
                                            onClick={handleStartDownload}
                                            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20 uppercase tracking-wide"
                                        >
                                            <DownloadIcon /> Execute Download
                                        </button>
                                    ) : (
                                        <div className="bg-zinc-950 border border-orange-500/20 rounded-xl p-4 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
                                            <div className="font-code flex justify-between text-xs mb-3 font-medium uppercase">
                                                <span className={finalFileReady ? "text-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" : "text-orange-500 animate-pulse"}>
                                                    {downloadStatus === 'downloading' ? '> RECEIVING_DATA...' : 
                                                     downloadStatus === 'processing' ? '> MERGING_STREAMS...' : 
                                                     downloadStatus === 'finished' ? '> EXTRACTION_COMPLETE' : '> INITIALIZING...'}
                                                </span>
                                                <span className="text-yellow-500">{Math.round(progress)}% {speed && `[${speed}]`}</span>
                                            </div>
                                            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-full h-2 mb-4 overflow-hidden">
                                                <div 
                                                    className={`h-full transition-all duration-300 ease-out ${finalFileReady ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]'}`} 
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                            
                                            {finalFileReady && (
                                                <button 
                                                    onClick={handleDownloadFile}
                                                    className="w-full bg-zinc-100 hover:bg-white text-black font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition-colors uppercase tracking-widest text-sm"
                                                >
                                                    Save to Drive <DownloadIcon />
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Card 4: AI Generation */}
                        <div className="bento-card col-span-1 md:col-span-3 p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                            
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 relative z-10">
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <SparkleIcon /> AI Injection Sequence
                                    </h3>
                                    <p className="font-code text-zinc-500 text-xs mt-1">&gt; SYNTHESIZE HASHTAGS & CAPTIONS</p>
                                </div>
                                <button 
                                    onClick={generateAIContent}
                                    disabled={aiGenerating}
                                    className="bg-zinc-900 hover:bg-zinc-800 text-orange-400 border border-orange-500/30 font-code font-medium py-2.5 px-5 rounded-xl flex items-center gap-2 disabled:opacity-50 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] text-sm uppercase"
                                >
                                    {aiGenerating ? <><div className="animate-spin h-4 w-4 border-2 border-orange-500 border-t-transparent rounded-full"></div> Processing...</> : <>Run Script</>}
                                </button>
                            </div>

                            {aiError && <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400 text-sm mb-4 font-code">{aiError}</div>}

                            {aiResults && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-code text-xs font-bold text-zinc-600 uppercase tracking-widest mb-2">&gt; SUMMARY_DUMP</h4>
                                            <p className="text-zinc-300 text-sm leading-relaxed">{aiResults.summary}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-code text-xs font-bold text-zinc-600 uppercase tracking-widest mb-2">&gt; KEYWORDS</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {aiResults.hashtags.map((tag, idx) => (
                                                    <span key={idx} className="font-code bg-orange-950/40 text-orange-400 border border-orange-900/60 px-3 py-1 rounded text-xs">
                                                        {tag.startsWith('#') ? tag : `#${tag}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-code text-xs font-bold text-zinc-600 uppercase tracking-widest">&gt; SOCIAL_PAYLOAD</h4>
                                            <button onClick={() => copyToClipboard(aiResults.viralCaption)} className="font-code text-xs font-medium flex items-center gap-1 text-orange-500 hover:text-orange-400 transition-colors uppercase">
                                                {copySuccess ? <span className="text-green-500 flex items-center gap-1"><CheckIcon /> Copied!</span> : <><CopyIcon /> Copy</>}
                                            </button>
                                        </div>
                                        <div className="bg-zinc-950 p-5 rounded-xl text-zinc-200 text-sm border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] border-l-2 border-l-orange-500 font-code leading-relaxed">
                                            {aiResults.viralCaption}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
