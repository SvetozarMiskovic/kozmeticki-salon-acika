import { ui, defaultLanguage } from './ui';

type UI = typeof ui;
type Language = keyof UI;
type Namespace<L extends Language> = keyof UI[L];
type Key<L extends Language, N extends Namespace<L>> = keyof UI[L][N];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}

export function useTranslations<L extends Language>(lang: L) {
  return function t<N extends keyof UI[L], K extends keyof UI[L][N]>(
    namespace: N,
    key: K
  ): UI[L][N][K] | string {
    const currentLangValue = ui[lang]?.[namespace]?.[key];
    const defaultLangValue = (ui[defaultLanguage] as any)?.[namespace]?.[key];
    return (
      currentLangValue ||
      defaultLangValue ||
      `Missing translation: ${String(namespace)}.${String(key)}`
    );
  };
}
