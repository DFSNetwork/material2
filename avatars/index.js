const modulesFiles = import.meta.globEager('./*.*'); // vite

let module2 = [];
Object.keys(modulesFiles).forEach((key) => {
  if (key === './index.js') return;
  // Object.assign(module2, modulesFiles[key]);
  module2.push(modulesFiles[key].default);
});

export function getAvatarImg(index) {
  const i = index ? index : Math.floor(Math.random() * module2.length);
  const imgSrc = module2[i];
  return new URL(`${imgSrc}`, import.meta.url).href;
}
