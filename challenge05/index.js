export const mecenas = [
  'Gorusuke',
  'DavidFabian',
  'ItziarZG',
  'edy WOLF',
  'MarcosGaPe',
  'Jose Jimenez',
  'Borja ',
  'Jhonathan Izquierdo Higuita',
  'MiLfeR322',
  'Sebastián Espínola',
  'Matias Luna',
  'Imanol Decima',
  'MarcoCasula',
  'MaríaBohórquez',
  'Renan',
  "IvanL'olivier",
  'Shonero',
  'Luichidev',
  'Faviola Narvaez',
  'Christopher Fuentes',
  'Kuro',
  'Juan Pablo Addeo',
  'Sergio Martínez',
  'Fran Enriquez González',
  'Diana',
  'tictools',
  'ConchaAsensio',
  'Emilio_Arreaza',
  'novamix',
  'Tomas Duclos',
  'Elaya',
  'Ignacio Palominos',
  'David C.',
  'Gerardo Felipe Conrado',
  'ElXuri',
  'David Borja Martinez',
  'JaviFelices',
  'CarlesSànchez',
  'Gorusuke',
  'DavidFabian',
  'ItziarZG',
  'edy WOLF',
  'MarcosGaPe',
  'Jose Jimenez',
  'Borja ',
  'Jhonathan Izquierdo Higuita',
  'MiLfeR322',
  'Sebastián Espínola',
  'Matias Luna',
  'Imanol Decima',
  'MarcoCasula',
  'MaríaBohórquez',
  'Renan',
  "IvanL'olivier",
  'Shonero',
  'Luichidev',
  'Faviola Narvaez',
  'Christopher Fuentes',
  'Kuro',
  'Juan Pablo Addeo',
  'Sergio Martínez',
  'Fran Enriquez González',
  'Diana',
  'tictools',
  'ConchaAsensio',
  'Emilio_Arreaza',
  'novamix',
  'Tomas Duclos',
  'Elaya',
  'Ignacio Palominos',
  'David C.',
  'Gerardo Felipe Conrado',
  'ElXuri',
  'David Borja Martinez',
  'JaviFelices',
  'CarlesSànchez',
  'Gorusuke',
  'DavidFabian',
  'ItziarZG',
  'edy WOLF',
  'MarcosGaPe',
  'Jose Jimenez',
  'Borja ',
  'Jhonathan Izquierdo Higuita',
  'MiLfeR322',
  'Sebastián Espínola',
  'Matias Luna',
  'Imanol Decima',
  'MarcoCasula',
  'MaríaBohórquez',
  'Renan',
  "IvanL'olivier",
  'Shonero',
  'Luichidev',
  'Faviola Narvaez',
  'Christopher Fuentes',
  'Kuro',
  'Juan Pablo Addeo',
  'Sergio Martínez',
  'Fran Enriquez González',
  'Diana',
  'tictools',
  'ConchaAsensio',
  'Emilio_Arreaza',
  'novamix',
  'Tomas Duclos',
  'Elaya',
  'Ignacio Palominos',
  'David C.',
  'Gerardo Felipe Conrado',
  'ElXuri',
  'David Borja Martinez',
  'JaviFelices',
  'CarlesSànchez'
]

export const killer = (array) => {
  let index = 0
  const data = array.map((m, i) => { return m + '-' + i })

  while (true) {
    if (data[index] !== 'X') {
      let index2 = index + 1

      while (true) {
        if (data.filter((value) => value !== 'X').length === 1) return `submit ${data.find((x) => x !== 'X').toLowerCase()}`
        if (data[index2] !== 'X') {
          data[index2] = 'X'
          index = index2
          break
        }

        if (index2 === data.length - 1) {
          index2 = 0
          continue
        }

        index2++
      }
    }

    if (index === data.length - 1) {
      index = 0
      continue
    }

    index++
  }
}
