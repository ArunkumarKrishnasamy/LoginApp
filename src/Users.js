import React from "react";

function Users() {
  return (
    <div>
      <h1>User logged in with TOKEN</h1>
      {/* {window.localStorage.setItem("myapptoken", loginData.data.token)} */}
      {window.localStorage.getItem("myapptoken")}
    </div>
  );
}

export default Users;
