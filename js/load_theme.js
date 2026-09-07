let theme = localStorage.getItem("theme");
if (!theme) {
    theme = "light";
    try {
        localStorage.setItem("theme", "light");
    } catch (err) {
        console.log(err);
    }
}
let style = document.documentElement.style;
style.setProperty("--theme", theme == "light" ? 1 : 0);
style.setProperty("--theme-icon", theme == "light" ? "url('assets/light.svg')" : "url('assets/dark.svg')");
style.setProperty("--refresh-icon", theme == "light" ? "url('assets/refresh-light.svg')" : "url('assets/refresh-dark.svg')");