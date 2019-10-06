import dayIdentifier from '@/helpers/Date/dayIdentifier';

// обычно id создается на сервере, но раза бэкэнда нет, то пусть id создается здесь.
let lastId: number = 0;

export default class Task {
  id: number
  date: Date
  text: string

  constructor(payload: {
    date: Date
    text: string
  }) {
    this.id = lastId;
    this.date = payload.date;
    this.text = payload.text;

    lastId += 1;
  }
  get dayIdentifier(): string {
    return dayIdentifier(this.date)
  }
  isSameDay(date: Date): boolean {
    return (
      this.date.getFullYear() === date.getFullYear()
      && this.date.getMonth() === date.getMonth()
      && this.date.getDate() === date.getDate()
    )
  }
}
