import Icon from '@/components/ui/icon';

interface DrinkCardProps {
  name: string;
  description: string;
  minPrice: number;
  icon: string;
  onClick: () => void;
  delay?: number;
}

const DrinkCard = ({ name, description, minPrice, icon, onClick, delay = 0 }: DrinkCardProps) => {
  const iconMap: Record<string, string> = {
    coffee: 'Coffee',
    hot: 'Flame',
    star: 'Sparkles',
    bubble: 'CircleDot',
    fruit: 'Apple',
  };

  return (
    <div
      onClick={onClick}
      className="bg-card/40 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer animate-scale-in group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
          <Icon name={iconMap[icon] || 'Coffee'} size={24} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold mb-1">{name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground/80 mb-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm md:text-base text-primary font-semibold">от {minPrice}₽</span>
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
              <Icon name="Plus" size={16} className="text-primary group-hover:rotate-90 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;