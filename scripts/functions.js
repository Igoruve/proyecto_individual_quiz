const url= "https://opentdb.com/api.php?amount=50";

async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();