function groet(tijd) {
  if (tijd < 12) {
    console.log("Goedemorgen");
  } else if (12 < tijd && tijd < 18) {
    console.log("Goedemiddag");
  } else {
    console.log("Goedenavond");
  }
}
