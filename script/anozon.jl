import Base.Iterators: flatten, partition

alphabet = 'a':'z'

# str
anoz = partition(alphabet, 14) |>
       l -> map(v -> [v[begin], v[end]], l) |> flatten |> join

z = map(v -> v[1:3], [anoz, reverse(anoz)]) |> join

print(z)

# mat
pad = (a, h, l) -> [fill(h, l - size(a)[1]); a]
pad7c = a -> pad(a, '-', 7)
l = partition(alphabet, 7) |> collect

map(pad7c, partition(alphabet, 7))