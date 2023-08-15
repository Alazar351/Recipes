export function setRecentlyClicked(item) {
  const updateRecent = JSON.parse(localStorage.getItem("recent") || "[]");

  if (updateRecent.length > 10) {
    updateRecent.length = 10;
  }

  if (updateRecent) {
    localStorage.setItem("recent", JSON.stringify([item, ...updateRecent]));
  } else {
    localStorage.setItem("recent", JSON.stringify(item));
  }
}
