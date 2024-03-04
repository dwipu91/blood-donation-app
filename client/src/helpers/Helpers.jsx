/**
 *
 */
export const generatePageTitle = (path) => {
  const title = path.replace(/-/g, " ").replace(/\//g, "");
  return title;
};
