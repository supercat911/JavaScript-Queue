class Queue {

    #ids = [];
    #last_id = -1;
    #items = {};

    put(item) {
        this.#last_id++;
        this.#ids.push(this.#last_id);
        this.#items[this.#last_id] = item;

        return this.#last_id;
    }

    get() {
        if (this.#ids.length == 0) return null;

        let id = this.#ids[0];
        return this.#items[id];
    }

    task_done() {
        if (this.#ids.length == 0) return false;

        let id = this.#ids[0];
        this.#ids.splice(0, 1);
        delete this.#items[id];
        return true;
    }

    qsize() {
        return this.#ids.length;
    }

    empty() {
        this.#ids = [];
        this.#last_id = -1;
        this.#items = {};
        return true;
    }

    remove(id) {
        let index = this.#ids.indexOf(id);
        if (index == -1) return false;

        this.#ids.splice(index, 1);
        delete this.#items[id];
    }
}

export {Queue};
