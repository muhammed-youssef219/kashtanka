import {
  blogImages,
  faqQuestions,
  images,
  listingImages,
  partners,
  projectImages,
  serviceImages,
  storyImages,
  streamImages,
  subscriptionPlans,
} from '../data/home.js'
import { Button, Icon, ListingGrid, Logo, PromoTile, SectionTitle } from '../components/ui.jsx'

function Header() {
  return (
    <header className="topbar">
      <Logo />
      <label className="searchbar">
        <span>Щенок ретривера</span>
        <span className="search-filters">◉ По сайту　□ По медиа</span>
        <Icon name="search" />
        <button type="button" aria-label="Очистить поиск">
          ×
        </button>
      </label>
      <div className="top-tools">
        <button type="button" aria-label="Поиск">
          <Icon name="search" />
        </button>
        <Button variant="outline" icon="user">
          Вход
        </Button>
        <button type="button" aria-label="Избранное">
          <Icon name="heart" />
        </button>
        <button type="button" aria-label="Профиль">
          <Icon name="user" />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-layout">
        <div className="hero-caption">
          <h1>
            Найди щенка, который
            <br />
            ждёт именно тебя
          </h1>
        </div>
        <div className="hero-strip">
          <PromoTile image={images.subscription} title="Подписка для вас">
            <Button>Купить подписку</Button>
            <Button variant="white">Первый раз здесь</Button>
          </PromoTile>
          <PromoTile image={images.heroPuppy} title="Щенок в доме, ваш друг">
            <Button>Щенки</Button>
            <Button variant="white">Породы</Button>
            <Button variant="white">Купить сертификат</Button>
          </PromoTile>
          <PromoTile image={images.womanDog} title="Вы любите животных, помогите">
            <Button>Предложить услугу</Button>
            <Button variant="white">Помочь нашему проекту</Button>
          </PromoTile>
        </div>
        <p className="hero-description">
          Покупайте, продавайте и находите специалистов для своего питомца. Поддержка социальных
          проектов для помощи животным. Качественный сервис для вас и вашего питомца.
        </p>
      </div>
    </section>
  )
}

function ListingSection({ title, service = false }) {
  return (
    <section className="white-section" id={service ? 'services' : undefined}>
      <SectionTitle>{title}</SectionTitle>
      <ListingGrid images={service ? serviceImages : listingImages} service={service} />
      {!service && (
        <div className="section-bottom">
          <Button>Смотреть еще</Button>
        </div>
      )}
    </section>
  )
}

function SocialProjects() {
  return (
    <section className="purple-section social-projects" id="projects">
      <div className="project-copy panel">
        <span className="eyebrow">Социальные проекты</span>
        <h2>Каштанка - для вас и вашего питомца</h2>
        <p>
          Платформа «Каштанка» — это профессиональный сервис по продаже породистых щенков от ведущих
          заводчиков. Мы предлагаем только элитных малышей с полным пакетом документов и заботой о
          каждом питомце.
        </p>
        <div>
          <Button>Подробнее</Button>
          <Button variant="white">Поддержать проект</Button>
        </div>
        <h3>Нас поддерживают</h3>
        <div className="supporter-row">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="supporter" key={index}>
              <b>♘</b>
              <small>
                Название
                <br />
                проекта
              </small>
            </div>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {projectImages.map((image, index) => (
          <PromoTile image={image} title="Название социального проекта" key={index}>
            <Button>Подробнее о проекте</Button>
            <Button variant="white">Помочь проекту</Button>
          </PromoTile>
        ))}
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section className="purple-section stories" id="stories">
      <h2>Душевные истории</h2>
      <div className="story-row">
        {storyImages.map((image, index) => (
          <article className="story-card" key={image}>
            <img src={image} alt="" />
            <small>Арчи + Милана</small>
            <Button variant={index === 0 ? 'primary' : 'white'}>Читать историю</Button>
          </article>
        ))}
        <article className="submit-story">
          <span>♘</span>
          <div>
            <button className="add-story" type="button">
              +
            </button>
            <p>
              Размести свою
              <br />
              историю дружбы
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function Streams() {
  return (
    <section className="purple-section streams">
      <SectionTitle light>On Line эфиры</SectionTitle>
      <div className="stream-grid">
        {streamImages.map((image, index) => (
          <article className="stream-card" key={`${image}-${index}`}>
            <div className="stream-media">
              <img src={image} alt="" />
              <span>Новый эфир</span>
              <b>Время эфира 16:45 Мск</b>
              <button className="play" type="button" aria-label="Воспроизвести">
                <Icon name="play" />
              </button>
            </div>
            <p>
              {index % 2
                ? 'Как правильно ухаживать за щенком? Приглашаем в эфир к вашему любимцу'
                : 'Наши соседи ищут дом - кто хочет себе идеального друга?'}
            </p>
            <div className="stream-bottom">
              <small>
                <Icon name="user" />
                Марина Алексеева
              </small>
              <Button>Записаться</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Subscription() {
  return (
    <section className="purple-section subscription">
      <div className="subscription-copy panel">
        <span className="eyebrow">О подписке</span>
        <h2>Продавцам и заводчикам</h2>
        <p>
          Вы можете приобрести тариф «Премиум» для новых возможностей: размещать объявления,
          продвигать их в каталоге, добавлять предложения по услугам и участвовать в проектах
          сообщества.
        </p>
        <Button>Купить подписку</Button>
      </div>
      <div className="plans">
        {subscriptionPlans.map((plan, index) => (
          <article className="plan" key={plan.price}>
            <span className="eyebrow">{plan.label}</span>
            <strong>{plan.price}</strong>
            <p>
              <b>Количество объявлений</b>
              <br />
              до 5 штук
              <br />
              <br />
              <b>Аренда родословной</b>
              <br />
              не ограничено
              <br />
              <br />
              <b>Поднять топ объявление</b>
              <br />
              нет
              <br />
              <br />
              <b>On Line трансляция</b>
              <br />
              до
            </p>
            <Button variant={index === 0 ? 'white' : 'primary'}>
              {index === 0 ? 'Выбрать тариф' : 'Купить подписку'}
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="purple-section blog" id="blog">
      <SectionTitle light>Блог с пользой</SectionTitle>
      <div className="blog-grid">
        {blogImages.map((image, index) => (
          <article className="blog-card" key={`${image}-${index}`}>
            <img src={image} alt="" />
            <div>
              <span className="category">Категория новости</span>
              <p>Догситтер - почему это популярно и так не просто</p>
              <small>Вторая строка</small>
              <Button>{index === 1 ? 'Смотреть видео' : 'Читать статью'}</Button>
            </div>
          </article>
        ))}
      </div>
      <div className="section-bottom">
        <Button>Смотреть еще</Button>
      </div>
    </section>
  )
}

function Community() {
  return (
    <section className="purple-section community">
      <div className="community-top">
        <div className="community-copy panel">
          <span className="eyebrow">Поддержка</span>
          <h2>Мы собираем сообщество и помогаем другим</h2>
          <p>
            Друзья, нам нужна поддержка! Мы рады людям, которые хотят помогать животным и делать
            среду для них добрее.
          </p>
          <Button>Поддержать Каштанку</Button>
        </div>
        <div className="planet-card">
          <span>♘</span>
          <div>
            <b>KASHTANKA</b>
            <strong>
              ПОДДЕРЖИ НАС
              <br />
              НА PLANETA
            </strong>
          </div>
        </div>
      </div>
      <h3>Наши партнеры</h3>
      <div className="partner-row">
        {partners.map((partner, index) => (
          <div className={`partner partner-${index % 2}`} key={`${partner}-${index}`}>
            {partner}
          </div>
        ))}
      </div>
      <h3>Частые вопросы</h3>
      <div className="faq-grid">
        {faqQuestions.map((question, index) => (
          <article className={`faq ${index === 3 ? 'is-open' : ''}`} key={`${question}-${index}`}>
            <div>
              {question}
              <Icon name="plus" />
            </div>
            {index === 3 && (
              <p>
                Платформа «Каштанка» — это профессиональный сервис по продаже породистых щенков.
                Здесь вы можете разместить объявления, найти питомца или специалиста, познакомиться
                с проектами и поддержать сообщество.
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function HomeSections() {
  return (
    <>
      <ListingSection title="Новые объявления" />
      <SocialProjects />
      <ListingSection title="Топ объявления" />
      <Stories />
      <ListingSection title="Часто смотрят" />
      <Streams />
      <ListingSection title="Услуги для питомца" service />
      <Subscription />
      <Blog />
      <Community />
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Мы создаем сервис для вас и ваших питомцев.</p>
          <small>
            ООО «Каштанка»
            <br />
            ИНН 9774700106
            <br />
            ОГРН 1237700548140
          </small>
        </div>
        <div>
          <h4>РАЗДЕЛЫ</h4>
          <a href="#top">Главная</a>
          <a href="#projects">О проекте</a>
          <a href="#blog">Блог проекта</a>
          <a href="#stories">Душевные истории</a>
        </div>
        <div>
          <h4>УСЛУГИ</h4>
          <a href="#services">Тарифы</a>
          <a href="#services">Услуги специалистов</a>
          <a href="#top">Купить щенка</a>
          <a href="#top">Продать щенка</a>
        </div>
        <div>
          <h4>ДЛЯ КЛИЕНТА</h4>
          <a href="#top">Пользовательское соглашение</a>
          <a href="#top">База пород</a>
          <a href="#top">Инвесторам</a>
          <a href="#top">Документация</a>
        </div>
        <div>
          <h4>РЕСУРСЫ</h4>
          <p className="socials">● ● ● ●</p>
          <p className="socials">● ● ● ●</p>
        </div>
      </div>
      <div className="copyright">
        КАШТАНКА - Все права защищены <span>Политика конфиденциальности</span>
      </div>
      <p className="legal">
        Платформа «Каштанка» — это профессиональный сервис по продаже породистых щенков. Мы
        предлагаем только элитных малышей с полным пакетом документов, поддержкой и заботой о каждом
        питомце.
      </p>
    </footer>
  )
}

export { Footer, Header, Hero, HomeSections }
