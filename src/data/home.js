const asset = (name) => `/figma-images/photo/${name}.webp`

export const images = {
  subscription: asset('Подложка (3)'),
  heroPuppy: asset('Подложка'),
  womanDog: asset('Подложка (1)'),
  golden: asset('Подложка (14)'),
  sleeping: asset('Подложка (15)'),
  shepherd: asset('Подложка (16)'),
  white: asset('Подложка (17)'),
  spaniel: asset('Подложка (18)'),
  shelter: asset('Подложка (10)'),
  vet: asset('Подложка (11)'),
  grooming: asset('Подложка (12)'),
  walking: asset('Подложка (13)'),
  storyOne: asset('Подложка (21)'),
  storyTwo: asset('Подложка (22)'),
  storyThree: asset('Подложка (23)'),
  storyFour: asset('Подложка (24)'),
  storyFive: asset('Подложка (25)'),
  storySix: asset('Подложка (26)'),
  streamOne: asset('Подложка (36)'),
  streamTwo: asset('Подложка (37)'),
  streamThree: asset('Подложка (38)'),
  streamFour: asset('Подложка (39)'),
  serviceOne: asset('Подложка (40)'),
  serviceTwo: asset('Подложка (41)'),
  serviceThree: asset('Подложка (42)'),
  serviceFour: asset('Подложка (43)'),
  blogOne: asset('Подложка (44)'),
  blogTwo: asset('Подложка (45)'),
  blogThree: asset('Подложка (46)'),
  blogFour: asset('Подложка (47)'),
}

export const listingImages = [
  images.golden,
  images.sleeping,
  images.shepherd,
  images.white,
  images.spaniel,
  images.golden,
  images.white,
  images.shepherd,
]

export const serviceImages = [
  images.serviceOne,
  images.serviceTwo,
  images.serviceThree,
  images.serviceFour,
  images.serviceOne,
  images.serviceTwo,
  images.serviceThree,
  images.serviceFour,
]

export const projectImages = [images.shelter, images.vet, images.grooming, images.walking]
export const storyImages = [
  images.storyOne,
  images.storyTwo,
  images.storyThree,
  images.storyFour,
  images.storyFive,
  images.storySix,
]
export const streamImages = [
  images.streamOne,
  images.streamTwo,
  images.streamThree,
  images.streamFour,
  images.streamOne,
  images.streamTwo,
  images.streamThree,
  images.streamFour,
]
export const blogImages = [
  images.blogOne,
  images.blogTwo,
  images.blogThree,
  images.blogTwo,
  images.blogFour,
  images.blogOne,
]

export const subscriptionPlans = [
  { label: 'Бесплатно', price: '0 ₽' },
  { label: 'Премиум', price: '300 ₽ в мес' },
  { label: 'Премиум', price: '1800 ₽ 12 мес' },
  { label: 'Пожизненно', price: '10 000 ₽' },
]

export const partners = ['Т БАНК', 'Nesquik', 'Т БАНК', 'Nesquik', 'Т БАНК']
export const faqQuestions = Array.from({ length: 9 }, () => 'О чем сервис?')
