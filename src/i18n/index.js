import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguage } from "../utils/local-storage";
const defaultLang = getLanguage() || process.env.REACT_APP_DEFAULT_LANG;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./locales/en.json"),
    },
    vi: {
      translation: require("./locales/vi.json"),
    },
  },
  lng: defaultLang, // Ngôn ngữ mặc định
  fallbackLng: "en", // Ngôn ngữ dự phòng nếu không tìm thấy dịch
  interpolation: {
    escapeValue: false, // Bật hoặc tắt xử lý đặc biệt trong chuỗi dịch
  },
  debug: false ?? process.env.ENV === "development",
});

export default i18n;
