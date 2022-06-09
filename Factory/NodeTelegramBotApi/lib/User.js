class User {
  #meta = {
    user_id: -1,
    is_bot: false,
    first_name: undefined,
    last_name: undefined,
    username: undefined,
    language_code: undefined
  };

  constructor(user_id, is_bot, first_name) {
    this.#meta.user_id = user_id;
    this.#meta.is_bot = is_bot;
    this.#meta.first_name = first_name;
  }

  getUserId() {
    return this.#meta.user_id;
  }

  getIsBot() {
    return this.#meta.is_bot;
  }

  getFirstName() {
    return this.#meta.first_name;
  }

  getLastName() {
    return this.#meta.last_name;
  }

  getUsername() {
    return this.#meta.username;
  }

  getLanguageCode() {
    return this.#meta.language_code;
  }

  setIsBot(is_bot) {
    this.#meta.is_bot = is_bot;
  }

  setFirstName(first_name) {
    this.#meta.first_name = first_name;
  }

  setLastName(last_name) {
    this.#meta.last_name = last_name;
  }

  setUsername(username) {
    this.#meta.username = username;
  }

  setLanguageCode(language_code) {
    this.#meta.language_code = language_code;
  }
}

module.exports = User;