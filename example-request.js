async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/concatenate", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const data = { strings: ["abc ", "123 ", "baby you and me girl"] };
  postJSON(data);