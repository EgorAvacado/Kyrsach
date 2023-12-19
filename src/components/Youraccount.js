import React from "react";

const YourAccount = () => {
  const defaultAvatarImage = "H:kyrsovaipublic\friends.jpg"; // Ссылка на картинку по умолчанию

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            src={defaultAvatarImage}
            alt="User Avatar"
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>
        <h1 style={{ textAlign: "center" }}>Welcome, Акула!</h1>
      </div>
      <div className="games" style={{ marginTop: "40px" }}>
        <h3>Games played:</h3>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li>Game 1</li>
          <li>Game 2</li>
          <li>Game 3</li>
        </ul>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p>Текст о пользователе...</p>
      </div>
    </div>
  );
};

export default YourAccount;
