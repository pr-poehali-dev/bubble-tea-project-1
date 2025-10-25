import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bubble-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text neon-text">
            Контакты
          </h1>
          <p className="text-center text-muted-foreground mb-16">
            Будем рады видеть вас в нашей кофейне
          </p>

          {/* Main Contact Card */}
          <div className="bg-card/50 p-8 md:p-12 rounded-2xl border-2 neon-border mb-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center neon-box">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Адрес</h3>
                  </div>
                  <p className="text-muted-foreground ml-15">
                    Москва, Юлиана Семенова, 8к2
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center neon-box">
                      <Icon name="Clock" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Часы работы</h3>
                  </div>
                  <div className="ml-15 space-y-2">
                    <p className="text-muted-foreground">Понедельник - Воскресенье</p>
                    <p className="text-2xl font-bold gradient-text">08:00 - 22:00</p>
                    <p className="text-sm text-primary">
                      🌅 Счастливые часы: 08:00 - 12:00 (-20%)
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center neon-box">
                      <Icon name="Phone" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Телефон</h3>
                  </div>
                  <a
                    href="tel:+79600001410"
                    className="text-2xl font-bold gradient-text hover:neon-text transition-all ml-15"
                  >
                    +7 960 000 1410
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-8xl animate-float">
                  🧋
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl border-2 border-primary/20 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-center mb-6 gradient-text">
              Мы в социальных сетях
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Там всегда проходят самые вкусные акции и все первые нововведения можно узнать там
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/bubble_coffee_msk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold neon-box hover:scale-105 transition-transform"
              >
                <Icon name="Send" size={24} />
                Telegram
              </a>
              <a
                href="https://www.instagram.com/bubble.coffee_rus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold neon-box hover:scale-105 transition-transform"
              >
                <Icon name="Instagram" size={24} />
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://eda.yandex.ru/restaurant/bubble_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/50 p-6 rounded-xl border-2 border-primary/20 hover:neon-border hover:scale-105 transition-all text-center animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Icon name="ShoppingBag" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Заказать доставку</h3>
              <p className="text-sm text-muted-foreground">Через Яндекс.Еда</p>
            </a>

            <a
              href="tel:+79600001410"
              className="bg-card/50 p-6 rounded-xl border-2 border-primary/20 hover:neon-border hover:scale-105 transition-all text-center animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Icon name="Phone" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Позвонить нам</h3>
              <p className="text-sm text-muted-foreground">Ответим на все вопросы</p>
            </a>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 text-center bg-card/30 p-6 rounded-xl border border-primary/20">
            <p className="text-muted-foreground">
              💡 Знаете ли вы, что тапиока в баблти готовится свежей каждый день специально для вас?
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
