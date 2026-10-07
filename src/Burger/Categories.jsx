import { images } from './images';


export default function Categories () {
  const categories = [
    { title: "Sand-wiches", text: "Loaded with fresh ingredients and big flavour.", image: images.burger2, color: "green" },
    { title: "House Burgers", text: "Hand-pressed beef. Toasted buns. Zero shortcuts.", image: images.hero, color: "orange" },
    { title: "Fresh Salads", text: "Crisp, colourful and made fresh every day.", image: images.salad, color: "lime" },
    { title: "For All Kids", text: "Small hands deserve seriously tasty food.", image: images.hotdog, color: "blue" },
    { title: "Sweet Desserts", text: "Finish your meal on a very sweet note.", image: images.dessert, color: "pink" },
    { title: "And Much, Much More...", text: "There is always something new to love.", image: images.burger3, color: "cream" }
  ];
}