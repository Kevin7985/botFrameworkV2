class Chat {
  #allowedTypes = ['private', 'group', 'supergroup', 'channel'];

  #meta = {
    chat_id: -1,
    type: undefined,
    title: undefined
  };

  constructor(chat_id, type) {
    if (!this.#allowedTypes.includes(type)) {
      throw 'This chat type does not supported!';
    }

    this.#meta.chat_id = chat_id;
    this.#meta.type = type;
  }

  getChatId() {
    return this.#meta.chat_id;
  }

  getChatType() {
    return this.#meta.type;
  }

  getChatTitle() {
    return this.#meta.title;
  }

  setChatTitle(title) {
    this.#meta.title = title;
  }
}

module.exports = Chat;