import React from "react";
import Book from "./Book";


const BookList = () => {
  const books = [
    {
      title:
        "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
      author: "Robert T. Kiyosaki",
      categories: "Personal Finance",
      year: "1997",
      cover:
        "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "Bhagvad Gita As It Is English New Edition",
      author: "A. C. Bhaktivedanta Swami Prabhupad",
      categories: "Spiritual",
      year: "2020",
      cover:
        "https://images-eu.ssl-images-amazon.com/images/I/91msEbTletL._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "The Psychology Of Money",
      author: "Morgan Housel",
      categories: "Personal Finance",
      year: "2020",
      cover:
        "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "Atomic Habits: the life-changing",
      author: "James Clear",
      categories: "Psychology",
      year: "2018",
      cover:
        "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "Hindus in Hindu Rashtra",
      author: "Anand Ranganathan",
      categories: "Politics",
      year: "2023",
      cover:
        "https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "Elon Musk",
      author: "Walter Isaacson",
      categories: "Biopic",
      year: "2023",
      cover:
        "https://images-eu.ssl-images-amazon.com/images/I/71iWxmst49L._AC_UL600_SR600,400_.jpg",
    },
  ];
  return (
    <div>
      {books.map((e) => {
        return (
          <Book
            title={e.title}
            author={e.author}
            categories={e.categories}
            year={e.year}
            cover={e.cover}
          />
        );
      })}
    </div>
  );
};
export default BookList;
