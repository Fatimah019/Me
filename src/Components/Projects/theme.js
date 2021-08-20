import "../../cssfiles/neumorphism.css";

// switch to dark theme once it is 7 pm
export const switchTheme = () => {
  let d = new Date();
  let h = d.getHours().toLocaleString();
  if (h >= 19) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

// toggle between dark mode and light mode
export const toggleTheme = () => {
  document.body.classList.toggle("dark");
};
