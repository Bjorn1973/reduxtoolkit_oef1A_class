import "bulma/css/bulma.css";
import "../../src/style.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";

const holder = document.querySelector(".container");
new Form(holder);
new Basket(holder);
