const Product = require("./product");

class ProductRepository {
  constructor() {
    this.products = new Map([
      [
        "09",
        new Product({
          id: "09",
          type: "CREDIT_CARD",
          name: "Gem Visa"
        }),
      ],
      [
        "10",
        new Product({
          id: "10",
          type: "CREDIT_CARD",
          name: "28 Degrees"
        }),
      ],
      [
        "11",
        new Product({
          id: "11",
          type: "PERSONAL_LOAN",
          name: "MyFlexiPay"
        }),
      ],
    ]);
  }

  async fetchAll() {
    return [...this.products.values()];
  }

  async getById(id) {
    return this.products.get(id);
  }

  async create(product) {
    return this.products.set(product.id, product);
  }
}

module.exports = ProductRepository;
