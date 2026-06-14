import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists to avoid immediate crash, though key is required.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel de BEROX, une entreprise technologique d'élite.
Ton rôle est d'accueillir les visiteurs, de présenter les services et de répondre à leurs questions de manière professionnelle, concise et moderne.

Services de BEROX :
1. Design 3D & Architectural : Modélisation, rendu réaliste, conception architecturale, CAD.
2. Développement Web & Logiciel : Applications web (React, Node), apps mobiles, logiciels sur mesure.
3. Analyse de Données : Business Intelligence, Big Data, Visualisation de données, Algorithmes prédictifs.
4. Création de Jeux Vidéo : Développement Unity/Unreal Engine, expériences immersives VR/AR, Serious Games et Gamification.

Ton ton doit être :
- Innovant et technologique
- Professionnel mais accessible
- Serviable

Si on te demande un devis, invite l'utilisateur à contacter l'équipe via le formulaire de contact ou à hello@berox.tech.
Réponds toujours en français, sauf si l'utilisateur te parle dans une autre langue.
`;

export const streamResponse = async (
  history: ChatMessage[],
  newMessage: string,
  onChunk: (text: string) => void
): Promise<string> => {
  if (!ai) {
    const errorMsg = "Clé API non configurée. Impossible de démarrer le chat.";
    onChunk(errorMsg);
    return errorMsg;
  }

  try {
    // Transform history for the API
    // Note: In a real app, we would manage a ChatSession persistence.
    // For this demo, we just send a generated content request with history if needed,
    // or use a fresh chat session. Here we use a chat session.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const resultStream = await chat.sendMessageStream({
      message: newMessage,
    });

    let fullText = "";
    for await (const chunk of resultStream) {
      const chunkText = (chunk as GenerateContentResponse).text;
      if (chunkText) {
        fullText += chunkText;
        onChunk(fullText);
      }
    }
    return fullText;

  } catch (error) {
    console.error("Gemini Error:", error);
    const errorText = "Désolé, je rencontre une erreur de connexion temporaire.";
    onChunk(errorText);
    return errorText;
  }
};