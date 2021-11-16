<template>
  <div class="Account">
    <h1>Account</h1>
    <div class="user">
        <div class="userprofile"></div>
        <span>User Name</span>
    </div>
    <div class="accountmenu">
      <router-link to="/editprofile"><div class="icon">-</div>Edit Profile</router-link>
      <router-link to="/editsurvey"><div class="icon">+</div>Edit Survey</router-link>
    </div>
    <div class="settings">
      <router-link to="/searchsettings"><div class="icon">-</div>Search Settings</router-link>
      <router-link to="/acctsettings"><div class="icon">-</div>Account Settings</router-link>
    </div>
  </div>
</template>


<style scoped>
.Account {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  text-align: left;
}

a {
  text-decoration: none;
}

.user {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 0 5vh;
}

.settings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5vh;
}
</style>