function Icon({ name }) {
  const paths = {
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="5.8" />
        <path d="m15.3 15.3 4.6 4.6" />
      </>
    ),
    heart: (
      <path d="M20.6 8.8c0 5.3-8.6 9.9-8.6 9.9S3.4 14.1 3.4 8.8A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.6 2.6Z" />
    ),
    pin: <path d="M19 10c0 5-7 10.8-7 10.8S5 15 5 10a7 7 0 1 1 14 0Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    user: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20c.7-3.4 3-5.1 6.5-5.1s5.8 1.7 6.5 5.1" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5Z" fill="currentColor" stroke="none" />,
  }

  return (
    <svg className={`icon icon-${name}`} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Kashtanka">
      <span className="logo-mark">✦</span>
      <span>
        KASHTANKA<small>ЗАВЕДИ ПУШИСТОГО ДРУГА</small>
      </span>
    </a>
  )
}

function Button({ children, variant = 'primary', icon, className = '' }) {
  return (
    <button className={`button button-${variant} ${className}`} type="button">
      {icon && <Icon name={icon} />}
      {children}
    </button>
  )
}

function SectionTitle({ children, light = false }) {
  return (
    <div className={`section-title ${light ? 'is-light' : ''}`}>
      <h2>{children}</h2>
      <Button className="more-button">Смотреть еще</Button>
    </div>
  )
}

function PromoTile({ image, title, children }) {
  return (
    <article className="promo-tile">
      <img src={image} alt="" />
      <div className="promo-copy">
        <p>{title}</p>
        <div className="promo-actions">{children}</div>
      </div>
    </article>
  )
}

function ListingCard({ image, service = false }) {
  const title = service ? 'Догситтер - возьму на передержку' : 'Малыш золотистого ретривера'
  const price = service ? '1 000 ₽' : '50 000 ₽'

  return (
    <article className="listing-card">
      <div className="listing-media">
        <img src={image} alt="" />
        <span className="breed-badge">Золотистый ретривер</span>
        <button className="round-control favourite" type="button" aria-label="Добавить в избранное">
          <Icon name="heart" />
        </button>
      </div>
      <div className="listing-copy">
        <p>{title}</p>
        <strong>Вторая строка</strong>
        <div className="card-status">
          <span className="price">{price}</span>
          <span>
            <i className="blue-dot">♂</i> 5 <i className="pink-dot">♀</i> 3
          </span>
        </div>
        <div className="card-footer">
          <span>
            <Icon name="pin" />
            Москва
          </span>
          <span>Дата помета&nbsp; 03.03.2026</span>
        </div>
      </div>
    </article>
  )
}

function ListingGrid({ images, service = false }) {
  return (
    <div className="listing-grid">
      {images.map((image, index) => (
        <ListingCard image={image} service={service} key={`${image}-${index}`} />
      ))}
    </div>
  )
}

export { Button, Icon, ListingGrid, Logo, PromoTile, SectionTitle }
