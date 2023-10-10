export function transformDate(date: number) {
  switch (date) {
    case 0:
      return 'Dom.'

    case 6:
      return 'Sáb.'

    default:
      return 'Seg à Sex.'
  }
}