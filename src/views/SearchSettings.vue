<template>
  <div class="SearchSettings">
    <h1>This is an Search Settings page</h1>
    <section>
    <div class="user">
        <div class="userprofile"></div>
        <span>User Name</span>
      </div>
      <div class="accountmenu">
        <a href="/browse">
          <div class="icon">-</div>
          Edit Profile
        </a>
        <a href="/Match"><div class="icon">+</div>Edit Survey</a>
      </div>
      <div class="settings">
        <a href="/account"><div class="icon">-</div>Search Settings</a>
        <a href="/account"><div class="icon">-</div>Account Settings</a>
      </div>
  </section>
  </div>
</template>


<style>
a {
  text-decoration: none;
}

.user {
  padding: 5vh;
  display: flex;
  flex-direction: column;
}

.userprofile {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-image: url(https://images-ssl.gotinder.com/5b308e3bf4807f9329e93a38/640x800_75_e70182ed-938b-418e-8598-d844b4090ced.webp);
  background-position: 50% 0;
  background-size: auto 125%;
  margin: 12px auto;
}


.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: rgba(20,20,20,0.3);
  background-position: 50% 0;
  background-size: auto 125%;
  margin: 12px auto;
}

section {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 40px;
  margin: 0;
}

span {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
}

.accountmenu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5vh;
}

.settings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>