export interface PublicArticle { id: string; title: string; date: string; category: string; content: string }
export interface PublicProduct { id: string; title: string; expert: string; amount: number; monthlyAmount: number; baseMonths: number; bonusMonths: number; content: string; status: string }
export interface PublicMenuData {
  company: { name: string; siteName: string; description: string; phone: string; email: string; businessNumber: string; address: string };
  products: PublicProduct[];
  articles: { notice: PublicArticle[]; faq: PublicArticle[]; event: PublicArticle[] };
}
