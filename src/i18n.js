import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    brandTagline: "Minecraft community hub",
    forum: "Forum",
    chat: "Chat Roulette",
    resources: "Resources",
    signIn: "Sign In",
    safeModeOn: "Safe Mode On",
    safeModeOff: "Safe Mode Off",
    welcome: "Welcome to BlockTalk",
    heroText:
      "A cozy forum for redstone tinkerers, builders, speedrunners and casual miners. Jump into a random chat, share your builds, and find resource packs and seeds curated by the community.",
    startChat: "Start Chat Roulette",
    exploreForum: "Explore Forum",
    communityForum: "Community Forum",
    newThreadPlaceholder: "Start a new thread...",
    post: "Post",
    replies: "replies",
    cameraOff: "Camera off",
    partnerConnected: "Partner connected! Say hi.",
    clickFindPartner: "Click Find Partner to start matching.",
    findPartner: "Find Partner",
    communityResources: "Community Resources",
    download: "Download",
    footer: "Built with love by the BlockTalk community. Not affiliated with Mojang.",
    builds: "Builds",
    farms: "Farms",
    seeds: "Seeds",
    general: "General",
  },
  ru: {
    brandTagline: "Сообщество Minecraft",
    forum: "Форум",
    chat: "Чат‑рулетка",
    resources: "Ресурсы",
    signIn: "Войти",
    safeModeOn: "Безопасный режим",
    safeModeOff: "Откл. безопасный режим",
    welcome: "Добро пожаловать в BlockTalk",
    heroText:
      "Уютное место для редстоун‑мастеров, строителей, спидраннеров и просто шахтёров. Вступайте в случайный чат, делитесь постройками и находите ресурспаки и сиды от сообщества.",
    startChat: "Начать чат‑рулетку",
    exploreForum: "Открыть форум",
    communityForum: "Сообщественный форум",
    newThreadPlaceholder: "Новая тема...",
    post: "Опубликовать",
    replies: "ответов",
    cameraOff: "Камера выключена",
    partnerConnected: "Собеседник найден! Поздоровайтесь.",
    clickFindPartner: "Нажмите «Найти», чтобы начать поиск.",
    findPartner: "Найти",
    communityResources: "Полезные ресурсы",
    download: "Скачать",
    footer: "Сделано с любовью сообществом BlockTalk. Не связано с Mojang.",
    builds: "Постройки",
    farms: "Фермы",
    seeds: "Сиды",
    general: "Общее",
  },
};

const LangContext = createContext({ lang: "en", t: (k) => k, setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("bt_lang");
    if (saved === "ru" || saved === "en") setLang(saved);
    else if (navigator.language?.toLowerCase().startsWith("ru")) setLang("ru");
  }, []);

  useEffect(() => {
    localStorage.setItem("bt_lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang] || translations.en;
    return (key) => dict[key] ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
