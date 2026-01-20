/*
A web app stores user preferences as settings.
Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified
*/

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
if (settings.theme === "light") {
  settings.theme = "dark";
} else {
  settings.theme = "light";
}
console.log(settings.theme);

settings.autoSave=true;
console.log(settings.autoSave);

delete settings.notifications
console.log(settings.notifications)

Object.freeze(settings); 
