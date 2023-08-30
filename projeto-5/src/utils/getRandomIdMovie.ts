export function getRandomIdMovie() {
  let min = Math.ceil(100);
  let max = Math.floor(999);
  return Math.floor(Math.random() * (max - min) + min);
}
