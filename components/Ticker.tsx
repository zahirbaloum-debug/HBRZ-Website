
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface TickerData {
  label: string;
  value: string;
}

const Ticker: React.FC = () => {
  const initialAssets = [
    'XAU/USD', 'XAG/USD', 'Platinum', 'Palladium', 'Copper',
    'Brent Crude', 'WTI', 'Natural Gas',
    'Dow Jones', 'S&P 500', 'NASDAQ', 'FTSE 100', 'DAX', 'Nikkei 225', 'Hang Seng',
    'USD/NGN', 'EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/ILS',
    'Bitcoin', 'Ethereum'
  ];

  const [data, setData] = useState<TickerData[]>(
    initialAssets.map(label => ({ label, value: '...' }))
  );
  
  const isLockedOut = useRef(false);
  const lastFetchTime = useRef(0);

  const setFallbackData = useCallback(() => {
    // Updated fallback data to reflect early 2025 market estimates
    setData([
      { label: 'XAU/USD', value: '2,685.50' },
      { label: 'XAG/USD', value: '31.25' },
      { label: 'Platinum', value: '985.00' },
      { label: 'Palladium', value: '1,010.00' },
      { label: 'Copper', value: '4.15' },
      { label: 'Brent Crude', value: '74.20' },
      { label: 'WTI', value: '70.85' },
      { label: 'Natural Gas', value: '3.12' },
      { label: 'Dow Jones', value: '43,950.00' },
      { label: 'S&P 500', value: '5,980.00' },
      { label: 'NASDAQ', value: '19,250.00' },
      { label: 'FTSE 100', value: '8,320.00' },
      { label: 'DAX', value: '19,150.00' },
      { label: 'Nikkei 225', value: '39,400.00' },
      { label: 'Hang Seng', value: '19,800.00' },
      { label: 'USD/NGN', value: '1,720.00' },
      { label: 'EUR/USD', value: '1.0540' },
      { label: 'GBP/USD', value: '1.2650' },
      { label: 'USD/JPY', value: '154.50' },
      { label: 'USD/ILS', value: '3.75' },
      { label: 'Bitcoin', value: '96,250.00' },
      { label: 'Ethereum', value: '3,210.00' },
    ]);
  }, []);

  const fetchMarketData = async (retryCount = 0) => {
    // If locked out, check if it's been more than 15 minutes (shortened for better freshness)
    if (isLockedOut.current) {
      if (Date.now() - lastFetchTime.current < 900000) {
        return;
      }
      isLockedOut.current = false;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide the current, live market prices or exchange rates for these assets as of today: ${initialAssets.join(', ')}. Use Google Search to ensure accuracy for today's date. Format the output strictly as a plain list: "Asset: Value". No conversational text or headers.`,
        config: {
          tools: [{ googleSearch: {} }], // Re-enabled for real-time accuracy
          thinkingConfig: { thinkingBudget: 0 } 
        },
      });

      const text = response.text || "";
      const lines = text.split('\n').filter(line => line.includes(':'));
      
      const parsedData = lines.map(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
           const labelRaw = parts[0].replace(/[*#-]/g, '').trim();
           const value = parts.slice(1).join(':').trim();
           
           const matchedLabel = initialAssets.find(a => 
             labelRaw.toLowerCase().includes(a.toLowerCase()) || 
             a.toLowerCase().includes(labelRaw.toLowerCase())
           );

           return { label: matchedLabel || labelRaw, value };
        }
        return null;
      }).filter(item => item !== null) as TickerData[];

      if (parsedData.length > 0) {
        const merged = initialAssets.map(asset => {
          const found = parsedData.find(p => p.label.toLowerCase().includes(asset.toLowerCase()) || asset.toLowerCase().includes(p.label.toLowerCase()));
          return found || { label: asset, value: 'N/A' };
        });
        setData(merged);
        lastFetchTime.current = Date.now();
      } else {
        throw new Error("Empty response");
      }
    } catch (error: any) {
      const isRateLimit = error.status === 429 || 
                          error.message?.includes('429') || 
                          error.message?.includes('RESOURCE_EXHAUSTED') ||
                          error.error?.code === 429;

      if (isRateLimit) {
        isLockedOut.current = true;
        lastFetchTime.current = Date.now();
        console.warn("Ticker API quota hit or limited. Using fallback data.");
        setFallbackData();
        return;
      }

      if (retryCount < 1) {
        setTimeout(() => fetchMarketData(retryCount + 1), 5000);
        return;
      }
      
      setFallbackData();
    }
  };

  useEffect(() => {
    fetchMarketData();
    // Refresh every 15 minutes to keep it relatively fresh without exhausting quota
    const interval = setInterval(() => fetchMarketData(), 900000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-hbrz-blue border-b border-white/10 overflow-hidden py-2.5 select-none shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 flex items-center mr-6 border-r border-white/10 pr-6">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2.5 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          <span className="text-[10px] font-bold text-hbrz-gold uppercase tracking-[0.25em] whitespace-nowrap">Global Markets</span>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center">
            {data.concat(data).map((item, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter group-hover:text-hbrz-gold transition-colors">{item.label}</span>
                <span className="text-[11px] font-mono font-bold text-white tabular-nums">{item.value}</span>
                {index < data.concat(data).length - 1 && (
                  <span className="text-white/10 text-xs font-light px-2">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 160s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
