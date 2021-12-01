import store from "../data";
import { nanoid } from "@reduxjs/toolkit";
import { deleteItem } from "../data/basket";

export default class Basket {
  constructor(holder) {
    this.holder = holder;
    this.listRef = null;
    this.init();
    this.render();
    store.subscribe(this.render.bind(this));
    this.setEvents();
  }
  init() {
    this.holder.insertAdjacentHTML("beforeend", `<ul class="list"></ul>`);
    this.listRef = document.querySelector(".list");
  }
  render() {
    console.log(store.getState());
    this.listRef.innerHTML = store
      .getState()
      .basketState.map(
        (obj) =>
          `<div class="list-wrapper">
          <li class="list__item">
            <span class="count">${obj.count}</span>
             X 
            <span>${obj.productName}</span>
          </li>
          <div class="btn-wrapper">
          <button class="delete" data-id="${obj.id}"></button>
          </div>
         </div>`
      )
      .join("");
  }
  setEvents() {
    this.listRef.onclick = (e) => {
      e.preventDefault();
      store.dispatch(deleteItem(e.target.dataset.id));
    };
  }
}
