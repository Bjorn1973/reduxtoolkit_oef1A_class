import { nanoid } from "@reduxjs/toolkit";
import { addItem } from "../data/basket";
import store from "../data";

export default class Form {
  constructor(holder) {
    this.holder = holder;
    this.numberInput = null;
    this.productInput = null;
    this.formRef = null;
    this.init();
    this.render();
    this.setEvents();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<form action="">
        <div class="field">
          <h1 class="title is-1">Winkellijst</h1>
          <label class="label">Aantal</label>
          <div class="control">
            <input id="number" class="input" type="number" placeholder="aantal">
          </div>
          <label class="label">Product</label>
          <div class="control">
            <input id="products" class="input" type="text" placeholder="product">
          </div>
          <div class="control">
            <button class="button is-link ">Add</button>
          </div>
        </div>
      </form>
      `
    );
    this.numberInput = this.holder.querySelector("#number");
    this.productInput = this.holder.querySelector("#products");
    this.formRef = this.holder.querySelector("form");
  }
  render() {}
  setEvents() {
    this.formRef.onsubmit = function (e) {
      e.preventDefault();
      this.numberInput = document.querySelector("#number");
      this.productInput = document.querySelector("#products");
      store.dispatch(
        addItem({
          id: nanoid(),
          count: parseInt(this.numberInput.value),
          productName: this.productInput.value,
        })
      );
      this.numberInput.value = "";
      this.productInput.value = "";
    };
  }
}
