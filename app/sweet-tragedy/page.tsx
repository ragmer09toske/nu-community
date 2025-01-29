"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Download, Heart, MessageSquare, Share } from "lucide-react";
import { getBooks, createBook, updateBook, deleteBook } from "./booksAPI";
import { Button } from "@/components/ui/button";
import { AddBookDrawer } from "./Add_Book";
import { CommentskDrawer } from "./Comments";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

type Book = {
  book_thumbnail_url: string;
  book_name: string;
  book_chpater: string;
  Record<string, string>; // Assuming comments is an object
  hearts: number;
  downloads: number;
  author: string;
};

interface FileResponse {
  key: string;
  name: string;
  serverData: any;
  size: number;
  url: string;
  // Add other attributes if present in the response
}
const Page = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);

  const [newBook, setNewBook] = useState({
    book_thumbnail_url: "",
    book_name: "",
    book_chpater: "",
    comments: {},
    hearts: 0,
    downloads: 0,
    author: "",
  });
  // Fetch all books
  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((error) => console.error("Failed to fetch books:", error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Delete a book
  const handleDeleteBook = (id: any) => {
    deleteBook(id)
      .then(() => setBooks(books.filter((book: any) => book._id !== id)))
      .catch((error) => console.error("Failed to delete book:", error));
  };
  // Create a new book
  const handleCreateBook = () => {
    createBook(newBook)
      .then((createdBook: any) => setBooks([...books, createdBook]))
      .catch((error) => console.error("Failed to create book:", error));
  };
  return (
    <div className="w-full">
      <div className="p-5 w-full flex flex-col gap-5">
        <div className="w-full">
          <Image
            src={"/blog/sweet-tragedy-banner.PNG"}
            alt="the boys"
            layout="responsive"
            width={1920}
            height={300}
            className="object-cover rounded-md"
          />
        </div>
        <Card>
          {books.map((book: any) => (
            <Card key={book._id} className="p-5">
              <div className="flex gap-5 items-center">
                <Image
                  src={book.book_thumbnail_url || "/blog/x-circus.JPG"}
                  alt={book.book_name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{book.book_name}</p>
                  <p className="text-sm">Author: {book.author}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-3">
                <Button
                  variant={"outline"}
                  onClick={() => handleDeleteBook(book._id)}
                >
                  Delete
                </Button>
                {/* Add update functionality here if needed */}
                <Card className="rounded-md w-full p-2 flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <p style={{ fontSize: "10px" }}>{book.hearts}</p>
                    </div>
                    <Heart size={15} />
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <p style={{ fontSize: "10px" }}>{0}</p>
                    </div>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <MessageSquare size={15} />
                      </DrawerTrigger>
                      <DrawerContent>
                        {/* Comments Section */}
                        <div className="mt-4">
                          <h3 className="font-semibold text-lg">Comments</h3>
                          {Object.entries(book.comments).length > 0 ? (
                            <ul className="mt-2 space-y-2">
                              {Object.entries(book.comments).map(
                                ([user, comment]) => (
                                  <li
                                    key={user}
                                    className="bg-gray-100 p-2 rounded-md"
                                  >
                                    <span className="font-semibold">
                                      {user}:
                                    </span>{" "}
                                    {comment}
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p className="text-gray-500">No comments yet.</p>
                          )}
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <p style={{ fontSize: "10px" }}>{book.downloads}</p>
                    </div>
                    <div>
                      <a
                        href="https://1b63csbrd6.ufs.sh/f/0Ww2ivmqL3CJ7OniFSJw08pcnrDhsQuBlZq6WxXUeAviCjHN"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <Share size={15} />
                  </div>
                </Card>
              </div>
            </Card>
          ))}
        </Card>
        {/* Add New Book Form */}
        <Card className="p-5">
          <h2 className="text-lg font-bold">Add New Book</h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="book_name"
              placeholder="Book Name"
              value={newBook.book_name}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={newBook.author}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="book_chpater"
              placeholder="Book Chapter"
              value={newBook.book_chpater}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            {/* <input
              type="text"
              name="book_thumbnail_url"
              placeholder="Thumbnail URL"
              value={newBook.book_thumbnail_url}
              onChange={handleInputChange}
              className="p-2 border rounded"
            /> */}
            <div className="w-full flex justify-center">
              <AddBookDrawer />
            </div>
            <button
              onClick={handleCreateBook}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Book
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
