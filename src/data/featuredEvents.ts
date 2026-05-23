import cumbiafestFlyer from '../assets/images/events/cumbiafest-flyer.png'

export interface EventDate {
  city: string
  date: string
}

export interface TicketTier {
  name: string
  price: number
  fee: number
  status: 'available' | 'upcoming'
  note: string | null
}

export interface FeaturedEvent {
  id: string
  featured: boolean
  pagePath: string
  externalTicketUrl: string
  bannerTitle: string
  bannerDate: string
  image: string
  imageAlt: string
  homeEyebrow: string
  homeTitle: string
  homeSubtitle: string
  homeDescription: string
  homeTagline: string
  startingPrice: number
  dates: EventDate[]
  ticketTiers: TicketTier[]
}

export const HUMANITIX_AFROSOUND_URL =
  'https://events.humanitix.com/afrosound/tickets?utm_source=ig&utm_medium=social&utm_content=link_in_bio'

export const CUMBIAFEST_PAGE_PATH = '/cumbiafest-2026'

const cumbiafestTicketTiers: TicketTier[] = [
  {
    name: 'Early bird – Mar de Emociones',
    price: 65,
    fee: 3.95,
    status: 'available',
    note: null,
  },
  {
    name: 'Aguita e Coco',
    price: 85,
    fee: 4.83,
    status: 'upcoming',
    note: 'Las ventas comienzan cuando se agote Early bird – Mar de Emociones',
  },
  {
    name: 'Sabor navideño',
    price: 100,
    fee: 5.49,
    status: 'upcoming',
    note: 'Las ventas comienzan cuando se agote Aguita e Coco',
  },
]

export const featuredEvents: FeaturedEvent[] = [
  {
    id: 'cumbiafest-2026-afrosound',
    featured: true,
    pagePath: CUMBIAFEST_PAGE_PATH,
    externalTicketUrl: HUMANITIX_AFROSOUND_URL,
    bannerTitle: 'CumbiaFest – Afrosound en Sydney',
    bannerDate: '5 Sept 2026',
    image: cumbiafestFlyer,
    imageAlt: 'CumbiaFest Afrosound World Tour 2026 – flyer del evento',
    homeEyebrow: 'Próximo evento',
    homeTitle: 'CumbiaFest 2026',
    homeSubtitle: 'Afrosound · World Tour',
    homeDescription:
      'La gran noche de cumbia colombiana llega a Australia. Afrosound en vivo, Tierra Querida Live Band, DJs y pista de baile toda la noche.',
    homeTagline: 'Cupos limitados — no te quedes afuera',
    startingPrice: 65,
    dates: [
      { city: 'Sydney', date: '5 Sept 2026' },
      { city: 'Melbourne', date: '6 Sept 2026' },
    ],
    ticketTiers: cumbiafestTicketTiers,
  },
]

export function getPrimaryFeaturedEvent(): FeaturedEvent | undefined {
  return featuredEvents.find((e) => e.featured)
}
