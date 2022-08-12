// 'a' => 97
const chr = (c) => c.charCodeAt(0)
// 97 => 'a'
const ord = (n) => String.fromCharCode(n)

// { s: 5, n: 10, d: 2 } => [5, 7, 9]
const range = ({ s = 0, n, d = 1 }) =>
  [...Array(Math.ceil((n - s) / d))].map((_, i) => i * d + s)

// [1, 2, 3, 4, 5] => [[1, 2], [3, 4], [5]]
const chunk = (a, l) =>
  range({ n: a.length, d: l }).map((v) => a.slice(v, v + l))

const revs = (s) => s.split('').reverse().join('')
// 'abc' => 'cba'
// ['a', 'b', 'c'] => [ 'c', 'b', 'a' ]
const rev = (sa) => (Array.isArray(sa) ? [...sa].reverse() : revs(sa))

// ['a', 'b', 'c'] => 'ab'
const popjoin = ([...a]) => a.pop() && a.join('')
// ['a__', '__b', 'c__'] => ['a', 'b', 'c']
const altside = (m) => m.map((w, i) => [w, rev(w)][i % 2][0])
// [1, 2] => [[1, 2], [2, 1]]
const mirror = (a) => [a, rev(a)]
// 'abc' => 'c'
const tail = (a) => a[a.length - 1]
// 'abc' => ['a', 'c']
const side = (a) => [a[0], tail(a)]

const [a, z] = ['a', 'z'].map(chr)
const alpha = range({ s: a, n: z + 1 }).map(ord)

const anoz = altside(chunk(alpha, 7).map((a) => a.join('').padStart(7, '-')))
const _anoz2 = chunk(alpha, 14).map(side).flat()
console.assert(anoz.join('') === _anoz2.join(''))

console.log(mirror(anoz).map(popjoin).join(''))
