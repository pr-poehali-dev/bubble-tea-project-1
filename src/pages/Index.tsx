import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bubble-bg">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float inline-block mb-8 text-8xl">
            🧋
          </div>
          <h1 className="font-bubble text-6xl md:text-8xl gradient-text neon-text mb-6 animate-pulse-neon">
            BUBBLE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Кофейня с акцентом на баблти и тапиоку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold text-lg neon-box hover:scale-105 transition-transform"
            >
              Смотреть меню
            </Link>
            <a
              href="https://eda.yandex.ru/restaurant/bubble_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 neon-border rounded-full text-primary font-semibold text-lg hover:bg-primary/10 transition-all"
            >
              Заказать доставку
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text neon-text">
            О нас
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 neon-border animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/files/d21f7bda-8db6-4fe3-9959-3a3ddc1f2d97.JPG" 
                  alt="Екатерина и Данил - основатели BUBBLE"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                Привет! Мы — Екатерина и Данил
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы с Данилом открыли BUBBLE в 2021 году с идеей создать место, где можно насладиться 
                настоящим баблти с тапиокой и отличным кофе в уютной атмосфере.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Наша философия проста: качественные ингредиенты, внимание к деталям и забота о каждом госте. 
                Мы тщательно отбираем кофе, готовим тапиоку по классическим рецептам и создаем уникальные 
                сочетания вкусов.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                BUBBLE — это не просто кофейня, это место встреч, вдохновения и настоящего удовольствия 
                от любимых напитков. Приходите попробовать!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/20 hover:neon-border transition-all animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/3fb9a303-ddb0-450c-856e-45cb4535069a.JPG" 
                alt="Интерьер кофейни BUBBLE"
                className="w-full h-64 object-contain"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-primary/20 hover:neon-border transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://cdn.poehali.dev/files/79a4f561-6ebb-44ce-aef1-9781cabe5690.JPG" 
                alt="Баблти с тапиокой"
                className="w-full h-64 object-contain"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-primary/20 hover:neon-border transition-all animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/files/43af69b9-81ec-415b-8ee0-23795b0ddbba.JPG" 
                alt="Гость кофейни с напитком"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 neon-box">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Счастливые часы</h3>
              <p className="text-muted-foreground">
                08:00 - 12:00<br />
                Скидка -20% на всё меню
              </p>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 neon-box">
                <Icon name="Gift" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Программа лояльности</h3>
              <p className="text-muted-foreground mb-4">
                Каждая 7-я кружка кофе<br />
                300мл в подарок
              </p>
              <a
                href="https://onelink.to/6d2m4z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Скачать приложение
                <Icon name="ExternalLink" size={16} />
              </a>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 neon-box">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Удобное расположение</h3>
              <p className="text-muted-foreground">
                Москва, Юлиана Семенова, 8к2<br />
                Работаем 08:00 - 22:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text neon-text">
            Популярные напитки
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'БаблТи Матча', icon: 'CircleDot', price: 'от 400₽' },
              { name: 'Раф Фисташка', icon: 'Sparkles', price: 'от 400₽' },
              { name: 'Латте', icon: 'Coffee', price: 'от 330₽' },
              { name: 'Смузи Ягодный', icon: 'Apple', price: 'от 330₽' },
            ].map((drink, idx) => (
              <div
                key={drink.name}
                className="bg-card/30 p-6 rounded-2xl border-2 border-primary/20 hover:neon-border hover:scale-105 transition-all text-center animate-scale-in group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 neon-box group-hover:scale-110 transition-transform">
                  <Icon name={drink.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{drink.name}</h3>
                <p className="text-primary font-bold">{drink.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              Полное меню
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Подпишитесь на нас!
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Узнавайте первыми о новых вкусах, акциях и специальных предложениях
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://t.me/bubble_coffee_msk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold neon-box hover:scale-105 transition-transform"
            >
              <Icon name="Send" size={24} />
              Telegram
            </a>
            <a
              href="https://www.instagram.com/bubble.coffee_rus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold neon-box hover:scale-105 transition-transform"
            >
              <Icon name="Instagram" size={24} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;