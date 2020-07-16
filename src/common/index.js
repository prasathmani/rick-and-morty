export const getUrlParameter = (url, name) => {
  return (
    decodeURIComponent(
      // eslint-disable-next-line
      (new RegExp(`[?|&]${name}=` + `([^&;]+?)(&|#|;|$)`).exec(url) || [null, ''])[1].replace(/\+/g, '%20'),
    ) || null
  );
};
