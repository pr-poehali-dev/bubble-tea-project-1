import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bubble text-3xl gradient-text neon-text mb-4">
              BUBBLE
            </div>
            <p className="text-muted-foreground text-sm">
              Современная кофейня с акцентом на bubble tea
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Контакты</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary mt-0.5" />
                <span>Москва, Юлиана Семенова, 8к2</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span>Пн-Вс: 08:00 - 22:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+79600001410" className="hover:text-primary transition-colors">
                  +7 960 000 1410
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Соцсети</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Акции и новинки — всё у нас в соцсетях!
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/bubble_coffee_msk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-box hover:scale-110 transition-transform"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="https://www.instagram.com/bubble.coffee_rus?igsh=bGZ6eDRvZzVscHpp&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-box hover:scale-110 transition-transform"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          © 2024 BUBBLE Coffee. Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;
