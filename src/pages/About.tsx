import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bubble-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text neon-text">
            О нас
          </h1>
          <p className="text-center text-muted-foreground mb-16">
            История кофейни, которая родилась из любви к кофе
          </p>

          <div className="space-y-8">
            <div className="bg-card/50 p-8 rounded-2xl border-2 neon-border animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Как всё начиналось</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  История BUBBLE началась с простой мечты — мечты о собственной кофейне, которая появилась ещё в школьные годы. 
                  В 17 лет я работала бариста, целенаправленно выбрав кофейню с самым вкусным фисташковым рафом в городе. 
                  Я хотела понять эту индустрию изнутри, научиться делать по-настоящему вкусный кофе.
                </p>
                <p>Прошли годы. Работа маркетологом, собственные проекты, переезды... Но мечта о кофейне никогда не отпускала. И вот, летом 2024 года, вместе с моим мужем Данилом, мы увидели объявление о продаже небольшого помещения в Москве. Идеальное расположение напротив школы и детского сада, рядом с ВБ, приятная аренда — мы поняли, что это наш шанс.</p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Строили своими руками</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Каждую ночь, полторы недели подряд, мы приезжали в это помещение и строили кофейню буквально по кирпичикам. 
                  Красили стены, обустраивали барную стойку, продумывали каждую деталь. Днём отдыхали, ночью творили.
                </p>
                <p>
                  Мы полностью отказались от прежней концепции турецких сладостей и создали что-то своё — яркое, молодёжное, 
                  с акцентом на качество. Ездили на дегустации зерна, выбирали 100% мексиканскую арабику, 
                  разрабатывали меню с авторскими напитками.
                </p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Наша философия</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BUBBLE — это не просто кофейня. Это место, где качество напитков важнее скорости, 
                  где бариста знает, как приготовить идеальный баблти с тапиокой, а молоко для латте всегда прогрето до 60°С.
                </p>
                <p>
                  Мы делаем упор на три вещи: вкуснейший кофе из отборного зерна, 
                  баблти с тапиокой, которую готовим свежей каждый день, и пончики с авторскими топпингами. 
                  Никакой обычной кофейни — только уникальные вкусы и тёплая атмосфера.
                </p>
                <p>
                  Мы любим наших гостей — и взрослых, и детей, и даже их питомцев! У нас всегда найдётся вкусняшка для собачки 
                  и горячий шоколад для малыша. Мы создали пространство, куда хочется возвращаться.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl border-2 neon-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold mb-4 gradient-text text-center">Что делает нас особенными</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">☕</div>
                  <h3 className="font-semibold mb-2">100% арабика</h3>
                  <p className="text-sm text-muted-foreground">Мексиканское зерно высочайшего качества</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🧋</div>
                  <h3 className="font-semibold mb-2">Свежая тапиока</h3>
                  <p className="text-sm text-muted-foreground">Готовим каждый день специально для вас</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍩</div>
                  <h3 className="font-semibold mb-2">Авторские пончики</h3>
                  <p className="text-sm text-muted-foreground">С уникальными топпингами и вкусами</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-2xl border-2 border-primary/20 hover:neon-border transition-all text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-muted-foreground italic">
                "Когда люди приходят к нам и говорят, что даже в популярных сетевых кофейнях не пили такого вкусного кофе — 
                это лучшая награда для нас. Мы делаем BUBBLE с душой, и это чувствуется в каждом глотке."
              </p>
              <p className="mt-4 font-semibold gradient-text">— Катя и Данил, основатели BUBBLE</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;