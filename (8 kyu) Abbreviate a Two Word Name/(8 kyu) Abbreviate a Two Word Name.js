function abbrevName(name) {
  return name.split` `.map((s) => s[0].toUpperCase()).join`.`;
}
