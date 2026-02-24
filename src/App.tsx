import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Wheat, Beef, Phone, Mail, MapPin, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const translations = {
  ar: {
    companyName: "الواحة الرائدة",
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    contact: "اتصل بنا",
    heroTitle: "شريكك الموثوق في استيراد المواد الغذائية والمواشي",
    heroSubtitle: "نلتزم بتقديم أعلى معايير الجودة لتلبية احتياجات السوق المحلي من خلال شبكة استيراد عالمية موثوقة.",
    learnMore: "اكتشف المزيد",
    ourServices: "مجالات تخصصنا",
    foodstuff: "المواد الغذائية",
    foodstuffDesc: "نستورد تشكيلة واسعة من المواد الغذائية الأساسية والكمالية عالية الجودة من أفضل المصادر العالمية لضمان الأمن الغذائي.",
    livestock: "المواشي",
    livestockDesc: "نوفر أفضل سلالات المواشي الحية مع الالتزام التام بالمعايير الصحية والبيطرية العالمية والمحلية.",
    vision: "رؤيتنا",
    visionDesc: "أن نكون الشركة الرائدة والأكثر ثقة في مجال الاستيراد والتوزيع في المنطقة، معتمدين على الجودة والمصداقية.",
    mission: "مهمتنا",
    missionDesc: "توفير منتجات غذائية ومواشي عالية الجودة بأسعار تنافسية، مع التركيز على رضا العملاء وبناء شراكات استراتيجية طويلة الأمد.",
    contactUs: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    addressText: "عين زارة، طرابلس، ليبيا",
    rights: "جميع الحقوق محفوظة",
    whyChooseUs: "لماذا تختار الواحة الرائدة؟",
    quality: "جودة مضمونة",
    qualityDesc: "نخضع جميع وارداتنا لفحوصات دقيقة لضمان مطابقتها لأعلى المواصفات.",
    experience: "خبرة واسعة",
    experienceDesc: "فريق عمل متخصص يمتلك سنوات من الخبرة في الأسواق العالمية.",
    delivery: "توريد موثوق",
    deliveryDesc: "سلسلة إمداد متكاملة تضمن وصول المنتجات في الوقت المحدد.",
    contactPageTitle: "تواصل معنا",
    contactPageDesc: "يسعدنا تواصلكم معنا. يرجى تعبئة النموذج أدناه وسنقوم بالرد عليكم في أقرب وقت ممكن.",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formMessage: "الرسالة",
    formSubmit: "إرسال الرسالة",
  },
  en: {
    companyName: "Al Waha Al Raeda",
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    heroTitle: "Your Trusted Partner in Foodstuff and Livestock Import",
    heroSubtitle: "Committed to delivering the highest quality standards to meet local market needs through a reliable global import network.",
    learnMore: "Learn More",
    ourServices: "Our Areas of Expertise",
    foodstuff: "Foodstuff",
    foodstuffDesc: "We import a wide variety of high-quality essential and luxury food products from the best global sources to ensure food security.",
    livestock: "Livestock",
    livestockDesc: "We provide the best breeds of live animals with strict adherence to global and local health and veterinary standards.",
    vision: "Our Vision",
    visionDesc: "To be the leading and most trusted import and distribution company in the region, relying on quality and credibility.",
    mission: "Our Mission",
    missionDesc: "To provide high-quality food products and livestock at competitive prices, focusing on customer satisfaction and building long-term strategic partnerships.",
    contactUs: "Contact Us",
    email: "Email",
    phone: "Phone",
    address: "Address",
    addressText: "Ain Zara, Tripoli, Libya",
    rights: "All rights reserved",
    whyChooseUs: "Why Choose Al Waha Al Raeda?",
    quality: "Guaranteed Quality",
    qualityDesc: "All our imports undergo rigorous testing to ensure they meet the highest standards.",
    experience: "Extensive Experience",
    experienceDesc: "A specialized team with years of experience in global markets.",
    delivery: "Reliable Supply",
    deliveryDesc: "An integrated supply chain that ensures products arrive on time.",
    contactPageTitle: "Contact Us",
    contactPageDesc: "We'd love to hear from you. Please fill out the form below and we will get back to you as soon as possible.",
    formName: "Full Name",
    formEmail: "Email Address",
    formMessage: "Message",
    formSubmit: "Send Message",
  }
};

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [page, setPage] = useState<'home' | 'about' | 'contact'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
    setIsMenuOpen(false);
  };

  const navigate = (newPage: 'home' | 'about' | 'contact') => {
    setPage(newPage);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-900 font-sans ${isRtl ? 'font-arabic' : ''}`}>
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3 ml-3">
                <Wheat className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-emerald-900">{t.companyName}</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => navigate('home')} 
                className={`text-sm font-medium transition-colors ${page === 'home' ? 'text-emerald-600' : 'text-stone-600 hover:text-emerald-600'}`}
              >
                {t.home}
              </button>
              <button 
                onClick={() => navigate('about')} 
                className={`text-sm font-medium transition-colors ${page === 'about' ? 'text-emerald-600' : 'text-stone-600 hover:text-emerald-600'}`}
              >
                {t.about}
              </button>
              <button 
                onClick={() => navigate('contact')} 
                className={`text-sm font-medium transition-colors ${page === 'contact' ? 'text-emerald-600' : 'text-stone-600 hover:text-emerald-600'}`}
              >
                {t.contact}
              </button>
              <button 
                onClick={toggleLang} 
                className="flex items-center text-xs font-semibold text-emerald-700 hover:text-white transition-all duration-300 bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 px-3 py-1.5 rounded-full shadow-sm ms-4"
              >
                <Globe className="w-3.5 h-3.5 mx-1.5" />
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-emerald-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => navigate('home')} 
                className={`block w-full text-${isRtl ? 'right' : 'left'} px-3 py-2 rounded-md text-base font-medium ${page === 'home' ? 'text-emerald-600 bg-emerald-50' : 'text-stone-600 hover:text-emerald-600 hover:bg-stone-50'}`}
              >
                {t.home}
              </button>
              <button 
                onClick={() => navigate('about')} 
                className={`block w-full text-${isRtl ? 'right' : 'left'} px-3 py-2 rounded-md text-base font-medium ${page === 'about' ? 'text-emerald-600 bg-emerald-50' : 'text-stone-600 hover:text-emerald-600 hover:bg-stone-50'}`}
              >
                {t.about}
              </button>
              <button 
                onClick={() => navigate('contact')} 
                className={`block w-full text-${isRtl ? 'right' : 'left'} px-3 py-2 rounded-md text-base font-medium ${page === 'contact' ? 'text-emerald-600 bg-emerald-50' : 'text-stone-600 hover:text-emerald-600 hover:bg-stone-50'}`}
              >
                {t.contact}
              </button>
              <button 
                onClick={toggleLang} 
                className={`flex items-center w-full text-${isRtl ? 'right' : 'left'} px-4 py-3 mt-2 rounded-xl text-base font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-colors`}
              >
                <Globe className="w-5 h-5 mx-2" />
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {page === 'home' && <HomePage t={t} isRtl={isRtl} navigate={navigate} />}
        {page === 'about' && <AboutPage t={t} isRtl={isRtl} />}
        {page === 'contact' && <ContactPage t={t} isRtl={isRtl} />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center mr-2 ml-2">
                  <Wheat className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl text-white">{t.companyName}</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
                {t.heroSubtitle}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t.contactUs}</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 ml-3 text-emerald-500" />
                  <span>{t.addressText}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 ml-3 text-emerald-500" />
                  <span dir="ltr">+218 92 939 7030</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 ml-3 text-emerald-500" />
                  <span>info@alwaha-alraeda.ly</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t.services}</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('about')} className="hover:text-emerald-400 transition-colors">{t.foodstuff}</button></li>
                <li><button onClick={() => navigate('about')} className="hover:text-emerald-400 transition-colors">{t.livestock}</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} {t.companyName}. {t.rights}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ t, isRtl, navigate }: { t: any, isRtl: boolean, navigate: (page: 'home' | 'about' | 'contact') => void }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-emerald-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
            alt="Agriculture and Food" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-10 leading-relaxed">
              {t.heroSubtitle}
            </p>
            <button 
              onClick={() => navigate('about')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-200"
            >
              {t.learnMore}
              {isRtl ? <ArrowLeft className="mr-2 w-5 h-5" /> : <ArrowRight className="ml-2 w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">{t.ourServices}</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Foodstuff Card */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=1920&auto=format&fit=crop" 
                  alt="Foodstuff" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  <Wheat className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">{t.foodstuff}</h3>
                <p className="text-stone-600 leading-relaxed">{t.foodstuffDesc}</p>
              </div>
            </div>

            {/* Livestock Card */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1920&auto=format&fit=crop" 
                  alt="Livestock" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  <Beef className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">{t.livestock}</h3>
                <p className="text-stone-600 leading-relaxed">{t.livestockDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">{t.about}</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10"></div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
              <div className="w-2 h-8 bg-amber-400 rounded-full mr-3 ml-3"></div>
              {t.vision}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.visionDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10"></div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
              <div className="w-2 h-8 bg-amber-400 rounded-full mr-3 ml-3"></div>
              {t.mission}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.missionDesc}
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.whyChooseUs}</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">{t.heroSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.quality}</h3>
              <p className="text-emerald-100/80">{t.qualityDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.experience}</h3>
              <p className="text-emerald-100/80">{t.experienceDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.delivery}</h3>
              <p className="text-emerald-100/80">{t.deliveryDesc}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ContactPage({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">{t.contactPageTitle}</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.contactPageDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
          {/* Contact Info */}
          <div className="bg-emerald-900 p-10 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">{t.contactUs}</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 ml-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1">{t.address}</strong>
                  <span className="text-emerald-100">{t.addressText}</span>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-6 h-6 mr-4 ml-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1">{t.phone}</strong>
                  <span className="text-emerald-100" dir="ltr">+218 92 939 7030</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-6 h-6 mr-4 ml-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="block mb-1">{t.email}</strong>
                  <span className="text-emerald-100">info@alwaha-alraeda.ly</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">{t.formName}</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white" placeholder={t.formName} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">{t.formEmail}</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white" placeholder={t.formEmail} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">{t.formMessage}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-stone-50 focus:bg-white resize-none" placeholder={t.formMessage}></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm">
                {t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
