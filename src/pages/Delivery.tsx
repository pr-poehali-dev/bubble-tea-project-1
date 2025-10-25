import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
    <div className="min-h-screen bubble-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text neon-text">
            Доставка
          </h1>
          <p className="text-center text-muted-foreground mb-16">
            Наслаждайся любимыми напитками не выходя из дома
          </p>

          {/* Yandex.Eda CTA */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-2xl neon-box text-center mb-12 animate-fade-in">
            <div className="text-6xl mb-6">🛵</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Заказывай через Яндекс.Еда
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Быстрая доставка в радиусе 20км от метро Солнцево. Всё наше меню доступно для заказа онлайн.
            </p>
            <a
              href="https://eda.yandex.ru/restaurant/bubble_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              <Icon name="ShoppingBag" size={24} />
              Заказать на Яндекс.Еда
            </a>
          </div>

          {/* Delivery Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card/50 p-6 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all animate-fade-in">
              <Icon name="Clock" size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Время доставки</h3>
              <p className="text-muted-foreground">
                В среднем 30-45 минут в зависимости от твоего адреса и загруженности
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="MapPin" size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Зона доставки</h3>
              <p className="text-muted-foreground">
                Доставляем в радиусе 20км от метро Солнцево. Стоимость рассчитывается автоматически при оформлении
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="CreditCard" size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Оплата</h3>
              <p className="text-muted-foreground">
                Картой онлайн, наличными или картой курьеру, SberPay и др.
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="Package" size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Упаковка</h3>
              <p className="text-muted-foreground">
                Все напитки упакованы герметично, чтобы сохранить температуру и вкус
              </p>
            </div>
          </div>

          {/* Self-pickup */}
          <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border">
            <h2 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-3">
              <Icon name="Store" size={32} />
              Самовывоз
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес кофейни</h3>
                  <p className="text-muted-foreground">Москва, Юлиана Семенова, 8к2</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Время работы</h3>
                  <p className="text-muted-foreground">Ежедневно: 08:00 - 22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Percent" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Скидка при самовывозе</h3>
                  <p className="text-muted-foreground">
                    Экономь на доставке! А ещё не забывай про счастливые часы с 08:00 до 12:00 (-20%)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Есть вопросы по доставке?
            </p>
            <a
              href="tel:+79600001410"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
            >
              <Icon name="Phone" size={24} />
              +7 960 000 1410
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;