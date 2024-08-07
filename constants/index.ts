export const headerLinks = [ 
  {
    label: 'Ticket',
    route: '/profile',
    imglink: '/assets/images/ticket-50.png'
  },
  {
    label: 'Notification',
    route: '/events/create',
    imglink: '/assets/images/notification-50.png'
  }
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
