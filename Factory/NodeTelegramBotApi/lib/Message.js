class Message {
  #meta = {
    message_id: -1,
    from: undefined,
    date: -1,
    chat: undefined,
    text: undefined
  };

  constructor(message_id) {
    this.#meta.message_id = message_id;
  }

  getMessageId() {
    return this.#meta.message_id;
  }

  getMessageFrom() {
    return this.#meta.from;
  }

  getMessageDate() {
    return this.#meta.date;
  }

  getMessageChat() {
    return this.#meta.chat;
  }

  getMessageText() {
    return this.#meta.text;
  }

  setMessageFrom(from_object) {
    this.#meta.from = from_object;
  }

  setMessageDate(date) {
    this.#meta.date = date;
  }

  setMessageChat(chat_object) {
    this.#meta.chat = chat_object;
  }

  setMessageText(text) {
    this.#meta.text = text;
  }
}

module.exports = Message;