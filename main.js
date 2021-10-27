const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      url: "https://www.amazon.es",
      inStock: true,
      onSale: true,
      inventory: 8,
      details: ["50% cotton", "30% wool", "20% polyester"],
      sizes: ["XXXL", "XXL", "XL", "L"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
});
