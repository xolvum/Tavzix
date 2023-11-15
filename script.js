async function fetchData() {
  try {
    const response = await fetch('https://api.deezer.com/user/2529');
    const data = await response.json();
    // Do something with the data
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();