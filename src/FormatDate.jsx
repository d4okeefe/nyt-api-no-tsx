import { format } from 'date-fns'

export function format_date(d) {
  var date = new Date(d.replace('T', ' '))
  return format(date, 'd MMM yyyy')
}
