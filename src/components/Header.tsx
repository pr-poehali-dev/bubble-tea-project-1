import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Меню', path: '/menu' },
    { name: 'Доставка', path: '/delivery' },
    { name: 'Акции', path: '/promotions' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-bubble text-4xl gradient-text neon-text">
            BUBBLE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary neon-text'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://eda.yandex.ru/restaurant/bubble_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium neon-box hover:scale-105 transition-transform"
            >
              Заказать в Яндекс.Еда
            </a>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Icon name="Menu" size={28} className="text-primary" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card border-primary/20">
              <div className="font-bubble text-3xl gradient-text neon-text mb-8 mt-4">
                BUBBLE
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary neon-text'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://eda.yandex.ru/restaurant/bubble_coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium text-center neon-box"
                >
                  Заказать в Яндекс.Еда
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
