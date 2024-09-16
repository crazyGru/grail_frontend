const headerItems = [
  { name: "About Us", link: "/about-us" },
  { name: "How It Works", link: "/how-it-works" },
  { name: "Case Study", link: "/case-study" },
  { name: "Pricing", link: "/pricing" },
  { name: "Order Lenticular", link: "/order-lenticular" },
];

const redirectTo = (link) => {
  window.location.href = link;
};

export { headerItems, redirectTo };
