const toggleSwitch = document.querySelector(".toggle input[type=checkbox]")

// function to set a given theme/color-scheme
function switchTheme(e) {
  if (e.target.checked) {                   // Using the event.target property together with the element.tagName property to find out which element triggered a specified event
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem("theme", "dark");     // Store the user preference for future visits
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem("theme", "light");
  }
}

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', switchTheme);
