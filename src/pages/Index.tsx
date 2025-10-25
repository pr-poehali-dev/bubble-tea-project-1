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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Счастливые часы</h3>
              <p className="text-muted-foreground">
                08:00 - 12:00<br />
                Скидка -20% на всё меню
              </p>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Программа лояльности</h3>
              <p className="text-muted-foreground">
                Каждая 7-я кружка кофе<br />
                300мл в подарок
              </p>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4">📍</div>
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