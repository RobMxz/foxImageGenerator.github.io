const myFunction = async () => {
  const image = document.getElementById("myImage");
  const response = await fetch("https://randomfox.ca/floof/");
  const data = await response.json();
  image.src = data.image;
};
