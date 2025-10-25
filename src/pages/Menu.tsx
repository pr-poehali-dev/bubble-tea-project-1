import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DrinkSize {
  size: string;
  price: number;
}

interface Drink {
  name: string;
  description: string;
  sizes: DrinkSize[];
  image: string;
}

interface Category {
  title: string;
  emoji: string;
  drinks: Drink[];
}

const Menu = () => {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [selectedSize, setSelectedSize] = useState<DrinkSize | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<{ name: string; price: number }[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const syrups = [
    'Ваниль', 'Карамель', 'Жареная карамель', 'Соленая карамель', 'Имбирный пряник',
    'Шоколадное печенье', 'Шоколад', 'Тоффи', 'Брауни', 'Соленый пекан',
    'Пралине', 'Корица', 'Попкорн', 'Медовый', 'Кленовый', 'БаблГам',
    'Айриш Крим', 'Амаретто', 'Лесной орех', 'Миндаль', 'Фисташка',
    'Макадамия', 'Жареный фундук', 'Каштан', 'Тирамису', 'Мята',
    'Яблоко', 'Клубника', 'Малина', 'Лесные ягоды'
  ];

  const otherAddons = [
    { name: 'Сливки', price: 90 },
    { name: 'Молоко', price: 60 },
    { name: 'Шот эспрессо', price: 70 },
    { name: 'Тапиока', price: 100 },
    { name: 'Безлактозное молоко', price: 90 },
    { name: 'Кокосовое молоко', price: 90 },
    { name: 'Миндальное молоко', price: 90 },
    { name: 'Банановое молоко', price: 90 },
    { name: 'Халва', price: 50 },
    { name: 'Взрывная карамель', price: 50 },
    { name: 'Белый шоколад', price: 50 },
    { name: 'Фисташка', price: 50 }
  ];

  const menuData: Category[] = [
    {
      title: 'КОФЕ',
      emoji: '☕',
      drinks: [
        { name: 'Эспрессо', description: 'Классический крепкий кофе', sizes: [{ size: '30мл', price: 150 }], image: '☕' },
        { name: 'Американо', description: 'Эспрессо с горячей водой', sizes: [{ size: '30мл', price: 260 }, { size: '200мл', price: 300 }, { size: '300мл', price: 330 }], image: '☕' },
        { name: 'Капучино', description: 'Эспрессо с молочной пенкой', sizes: [{ size: '30мл', price: 290 }, { size: '200мл', price: 330 }, { size: '300мл', price: 380 }], image: '☕' },
        { name: 'Латте', description: 'Эспрессо с молоком', sizes: [{ size: '200мл', price: 330 }, { size: '300мл', price: 380 }], image: '☕' },
        { name: 'Раф', description: 'Кофе со сливками и ванильным сиропом', sizes: [{ size: '200мл', price: 380 }, { size: '300мл', price: 430 }], image: '☕' },
        { name: 'Флэт-уайт', description: 'Двойной эспрессо с микропенкой', sizes: [{ size: '30мл', price: 350 }], image: '☕' },
      ]
    },
    {
      title: 'ГОРЯЧИЕ НАПИТКИ',
      emoji: '🔥',
      drinks: [
        { name: 'Горячий шоколад', description: 'Насыщенный шоколадный напиток', sizes: [{ size: '200мл', price: 290 }, { size: '300мл', price: 330 }, { size: '400мл', price: 380 }], image: '🍫' },
        { name: 'Какао', description: 'Классическое какао на молоке', sizes: [{ size: '200мл', price: 290 }, { size: '300мл', price: 330 }, { size: '400мл', price: 380 }], image: '🍫' },
        { name: 'Матча-латте', description: 'Японский зеленый чай с молоком', sizes: [{ size: '200мл', price: 290 }, { size: '300мл', price: 330 }, { size: '400мл', price: 380 }], image: '🍵' },
        { name: 'Глинтвейн', description: 'Горячий напиток с пряностями', sizes: [{ size: '300мл', price: 390 }, { size: '400мл', price: 440 }], image: '🍷' },
      ]
    },
    {
      title: 'АВТОРСКИЙ КОФЕ',
      emoji: '✨',
      drinks: [
        { name: 'Раф Соленая фисташка', description: 'Нежный раф с фисташковым вкусом', sizes: [{ size: '300мл', price: 400 }, { size: '400мл', price: 450 }], image: '🌰' },
        { name: 'Раф Халва', description: 'Восточная сладость в кофейном напитке', sizes: [{ size: '300мл', price: 400 }, { size: '400мл', price: 450 }], image: '🍯' },
        { name: 'Раф Арахисовый', description: 'Кремовый раф с арахисовой пастой', sizes: [{ size: '300мл', price: 400 }, { size: '400мл', price: 450 }], image: '🥜' },
        { name: 'Латте Взрывная карамель', description: 'Латте с карамельными нотками', sizes: [{ size: '300мл', price: 380 }, { size: '400мл', price: 430 }], image: '🍮' },
        { name: 'Латте Белый шоколад', description: 'Нежный латте с белым шоколадом', sizes: [{ size: '300мл', price: 380 }, { size: '400мл', price: 430 }], image: '🤍' },
      ]
    },
    {
      title: 'БАБЛТИ',
      emoji: '🧋',
      drinks: [
        { name: 'БаблТи Кофейный', description: 'Кофейный напиток с тапиокой', sizes: [{ size: '300мл', price: 400 }, { size: '400мл', price: 450 }], image: '🧋' },
        { name: 'БаблТи Матча', description: 'Зеленый чай матча с тапиокой', sizes: [{ size: '300мл', price: 400 }, { size: '400мл', price: 450 }], image: '🧋' },
        { name: 'БаблТи Матча-Клубника', description: 'Матча со вкусом клубники', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
        { name: 'БаблТи Синнабон', description: 'Вкус знаменитой булочки с корицей', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
        { name: 'БаблТи Тропик', description: 'Тропический микс фруктов', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
        { name: 'БаблТи Малиновый пирог', description: 'Вкус домашнего малинового пирога', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
        { name: 'БаблТи Шоколад', description: 'Шоколадный баблти с тапиокой', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
        { name: 'БаблТи Попкорн', description: 'Необычный вкус попкорна', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
        { name: 'БаблТи Соленая карамель', description: 'Соленая карамель с жемчужинами', sizes: [{ size: '300мл', price: 440 }, { size: '400мл', price: 490 }], image: '🧋' },
      ]
    },
    {
      title: 'BUBBLE',
      emoji: '🍹',
      drinks: [
        { name: 'Ананас-маракуйя', description: 'Фруктовый чай', sizes: [{ size: '300мл', price: 390 }, { size: '400мл', price: 440 }], image: '🍍' },
        { name: 'Малиновый', description: 'Витаминный напиток с малиной', sizes: [{ size: '300мл', price: 390 }, { size: '400мл', price: 440 }], image: '🍇' },
        { name: 'Имбирный', description: 'Согревающий имбирный чай', sizes: [{ size: '300мл', price: 390 }, { size: '400мл', price: 440 }], image: '🫚' },
        { name: 'Облепиховый', description: 'Витаминный облепиховый напиток', sizes: [{ size: '300мл', price: 390 }, { size: '400мл', price: 440 }], image: '🍊' },
        { name: 'Смузи ягодный', description: 'Микс из свежих ягод', sizes: [{ size: '300мл', price: 330 }, { size: '400мл', price: 360 }], image: '🍓' },
        { name: 'Смузи мята-маракуйя', description: 'Освежающий смузи', sizes: [{ size: '300мл', price: 330 }, { size: '400мл', price: 360 }], image: '🌿' },
        { name: 'Смузи ананас-манго', description: 'Тропический микс фруктов', sizes: [{ size: '300мл', price: 330 }, { size: '400мл', price: 360 }], image: '🥭' },
      ]
    }
  ];

  const categories = ['all', ...menuData.map(cat => cat.title)];

  const filteredMenu = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(cat => cat.title === activeCategory);

  const openDrinkModal = (drink: Drink) => {
    setSelectedDrink(drink);
    setSelectedSize(drink.sizes[0]);
    setSelectedAddons([]);
  };

  const toggleAddon = (addon: { name: string; price: number }) => {
    setSelectedAddons(prev => {
      const exists = prev.find(a => a.name === addon.name);
      if (exists) {
        return prev.filter(a => a.name !== addon.name);
      }
      return [...prev, addon];
    });
  };

  const getTotalPrice = () => {
    if (!selectedSize) return 0;
    const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    return selectedSize.price + addonsTotal;
  };

  return (
    <div className="min-h-screen bubble-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text neon-text">
            Меню
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Выберите свой идеальный напиток
          </p>

          {/* Category Filters */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white neon-box'
                    : 'bg-card/50 text-muted-foreground border-2 border-primary/20 hover:border-primary/50'
                }`}
              >
                {cat === 'all' ? 'Все напитки' : cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {filteredMenu.map((category, catIdx) => (
            <section key={category.title} className="mb-16 animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-t-2xl">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-4xl">{category.emoji}</span>
                  {category.title}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.drinks.map((drink, idx) => (
                  <div
                    key={drink.name}
                    onClick={() => openDrinkModal(drink)}
                    className="bg-card/30 p-6 rounded-lg border-2 border-primary/20 hover:neon-border hover:scale-105 transition-all cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="text-5xl mb-4">{drink.image}</div>
                    <h3 className="text-xl font-semibold mb-2">{drink.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{drink.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">
                        от {Math.min(...drink.sizes.map(s => s.price))}₽
                      </span>
                      <Icon name="Plus" size={20} className="text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Drink Modal */}
      <Dialog open={!!selectedDrink} onOpenChange={() => setSelectedDrink(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-2 neon-border">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">{selectedDrink?.name}</DialogTitle>
          </DialogHeader>

          {selectedDrink && (
            <div className="space-y-6">
              <div className="text-6xl text-center">{selectedDrink.image}</div>

              {/* Sizes */}
              <div>
                <h3 className="font-semibold mb-3 text-primary">Выберите размер:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedDrink.sizes.map(size => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedSize?.size === size.size
                          ? 'bg-gradient-to-r from-primary to-secondary text-white neon-box border-transparent'
                          : 'border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      <div>{size.size}</div>
                      <div className="font-bold">{size.price}₽</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Syrups */}
              <div>
                <h3 className="font-semibold mb-3 text-primary">Сиропы (+50₽):</h3>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                  {syrups.map(syrup => (
                    <label key={syrup} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedAddons.some(a => a.name === syrup)}
                        onChange={() => toggleAddon({ name: syrup, price: 50 })}
                        className="rounded border-primary"
                      />
                      {syrup}
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Addons */}
              <div>
                <h3 className="font-semibold mb-3 text-primary">Другие дополнения:</h3>
                <div className="space-y-2">
                  {otherAddons.map(addon => (
                    <label key={addon.name} className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-primary/10">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedAddons.some(a => a.name === addon.name)}
                          onChange={() => toggleAddon(addon)}
                          className="rounded border-primary"
                        />
                        <span className="text-sm">{addon.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">+{addon.price}₽</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg text-white">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Итого:</span>
                  <span className="text-2xl font-bold">{getTotalPrice()}₽</span>
                </div>
              </div>

              <Button
                onClick={() => setSelectedDrink(null)}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Закрыть
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Menu;
