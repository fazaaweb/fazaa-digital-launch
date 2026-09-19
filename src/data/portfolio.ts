import ecommerceImg from "@/assets/images/portfolio_ecommerce_new_1789518449950.jpg";
import contractingImg from "@/assets/images/portfolio_contracting_new.png";
import decorationImg from "@/assets/images/portfolio_decoration_new.jpg";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  aspectRatio?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "متجر إلكتروني متكامل",
    category: "متاجر إلكترونية",
    description:
      "متجر إلكتروني احترافي يوفر تجربة تسوق سلسة وسريعة مع عرض أنيق للمنتجات وواجهة مستخدم عصرية.",
    image: ecommerceImg,
  },
  {
    id: "portfolio-2",
    title: "موقع شركة مقاولات وبناء",
    category: "مقاولات وإنشاءات",
    description:
      "موقع تعريفي متكامل لشركة مقاولات يبرز المشاريع المنجزة والخدمات الهندسية بطريقة احترافية تعكس قوة الشركة.",
    image: contractingImg,
  },
  {
    id: "portfolio-3",
    title: "واجهة استوديو ديكور وتصميم داخلي",
    category: "ديكورات وتصميم",
    description:
      "تصميم فني أنيق لاستوديو ديكور يركز على الجماليات البصرية وعرض مساحات العمل والتصاميم الداخلية بأسلوب فاخر.",
    image: decorationImg,
  },
];
