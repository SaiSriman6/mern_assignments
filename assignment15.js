/*
A web app stores user preferences as settings.
Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
*/

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//Toggle theme between "light" and "dark"
if (settings.theme === "light") {
  settings.theme = "dark";
} else {
  settings.theme = "light";
}
console.log(settings.theme);

//Turn autoSave to true
settings.autoSave=true;
console.log(settings.autoSave);

// Remove the notifications setting
delete settings.notifications
console.log(settings.notifications)

//Freeze the settings object so it cannot be modified
Object.freeze(settings); 
