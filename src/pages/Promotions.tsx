import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Promotions = () => {
  return (
    <div className="min-h-screen bubble-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text neon-text">
            Акции
          </h1>
          <p className="text-center text-muted-foreground mb-16">
            Выгодные предложения для наших гостей
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Happy Hours */}
            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in">
              <div className="text-7xl mb-6 text-center animate-float">⏰</div>
              <h2 className="text-3xl font-bold mb-4 gradient-text text-center">
                Счастливые часы
              </h2>
              <div className="space-y-4 text-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg text-white">
                  <div className="text-2xl font-bold">08:00 - 12:00</div>
                </div>
                <div className="text-5xl font-bold gradient-text neon-text">
                  -20%
                </div>
                <p className="text-muted-foreground">
                  Скидка на все позиции меню
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Info" size={16} />
                  <span>Действует каждый день</span>
                </div>
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border hover:neon-box transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-7xl mb-6 text-center animate-float" style={{ animationDelay: '0.5s' }}>🎁</div>
              <h2 className="text-3xl font-bold mb-4 gradient-text text-center">
                Программа лояльности
              </h2>
              <div className="space-y-4 text-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg text-white">
                  <div className="text-2xl font-bold">Каждая 7-я кружка</div>
                </div>
                <div className="text-5xl font-bold gradient-text neon-text">
                  В ПОДАРОК
                </div>
                <p className="text-muted-foreground">
                  Объем 300мл: Капучино, Латте, Раф, Американо, Флэт-уайт
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Просто за то, что ты с нами 🩷
                </p>
                <a
                  href="https://onelink.to/6d2m4z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-all mt-4"
                >
                  <Icon name="Smartphone" size={20} />
                  Скачать приложение
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  Показывай QR при покупке и копи бонусы!
                </p>
              </div>
            </div>
          </div>

          {/* Social Media CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 rounded-2xl border-2 neon-border text-center">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Не пропустите новые акции!
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Подписывайтесь на наши социальные сети — там всегда проходят самые вкусные акции 
              и все первые нововведения можно узнать там
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

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card/30 rounded-lg border border-primary/20">
              <Icon name="Gift" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Бонусы за отзывы</h4>
              <p className="text-sm text-muted-foreground">
                Оставьте отзыв и получите скидку на следующий заказ
              </p>
            </div>
            <div className="p-6 bg-card/30 rounded-lg border border-primary/20">
              <Icon name="Calendar" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Сезонные акции</h4>
              <p className="text-sm text-muted-foreground">
                Специальные предложения к праздникам
              </p>
            </div>
            <div className="p-6 bg-card/30 rounded-lg border border-primary/20">
              <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Приведи друга</h4>
              <p className="text-sm text-muted-foreground">
                Скидки для вас и ваших друзей
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Promotions;