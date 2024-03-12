const debounceRaf = fn => {
  let raf;
  return (...args) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      fn(...args);
      raf = 0;
    });
  };
};

export default debounceRaf;
