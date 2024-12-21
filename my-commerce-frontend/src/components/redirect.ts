export const setRedirectPath = (path: string) => {
    localStorage.setItem('redirectPath', path);
  };
  
  export const getRedirectPath = (): string | null => {
    const path = localStorage.getItem('redirectPath');
    localStorage.removeItem('redirectPath'); // Clear after fetching
    return path;
  };
  