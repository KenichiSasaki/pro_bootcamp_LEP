import users from "./db/users";
import teams from "./db/teams";
import countries from "./db/countries";
import languages from "./db/languages";

export default {
  fetchUsers() {
    return users;
  },
  fetchCountries() {
    return countries;
  },
  fetchLanguages() {
    return languages;
  },
  fetchUser(userId) {
    return users.find(user => user.id === Number(userId));
  },
  fetchTeams() {
    return teams;
  },
  fetchTeam(teamId) {
    return teams.find(team => team.id === Number(teamId));
  }
};
