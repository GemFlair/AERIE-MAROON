
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ChatHistory {
  role: 'user' | 'assistant';
  content: string;
}

export const getAerieInsights = async (prompt: string, history: ChatHistory[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are the Aerie Falcon, a sophisticated AI consultant for Aerie Realty in Dubai. 
        Your tone is exclusive, professional, and authoritative. 
        Provide specific insights on:
        1. ROI for areas like Palm Jumeirah, Dubai Hills, and Downtown.
        2. Market trends and news using Google Search.
        3. Local amenities and place information using Google Maps.
        If the user asks for property, mention that Aerie curates 'Ghost Inventory'—off-market assets.`,
        tools: [{ googleSearch: {} }, { googleMaps: {} }],
      },
    });

    const text = response.text || "Analyzing the horizon for you...";
    const links: { title: string; uri: string }[] = [];
    
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      chunks.forEach((c: any) => {
        if (c.web) links.push({ title: c.web.title, uri: c.web.uri });
        if (c.maps) links.push({ title: c.maps.title, uri: c.maps.uri });
      });
    }

    return { text, links };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "The falcon has encountered a storm. Please try again.", links: [] };
  }
};
