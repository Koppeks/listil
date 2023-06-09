export const postUser = (item) => () => {
    fetch("https://listil-production.up.railway.app/api/auth/local/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: new Headers({ "content-type": "application/json" }),
    }).then((res) => console.log(res));
  };