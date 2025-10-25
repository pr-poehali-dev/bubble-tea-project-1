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
      className="bg-card/30 p-6 rounded-lg border-2 border-primary/20 hover:neon-border hover:scale-105 transition-all cursor-pointer animate-scale-in group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 neon-box group-hover:scale-110 transition-transform">
        <Icon name={iconMap[icon] || 'Coffee'} size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold">от {minPrice}₽</span>
        <Icon name="Plus" size={20} className="text-primary group-hover:rotate-90 transition-transform" />
      </div>
    </div>
  );
};

export default DrinkCard;
