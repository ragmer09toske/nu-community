"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataAttributes {
  name: string;
  lastname: string;
  email: string;
  reason: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface DataItem {
  id: number;
  attributes: DataAttributes;
}

const DataDisplay = () => {
  const [data, setData] = useState<DataItem[]>([]); // Initialize as an array

  useEffect(() => {
    const getAllCodiacsUsers = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/codiac-users');
        setData(response.data.data); // Access the correct property in the response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAllCodiacsUsers();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.attributes.name} {item.attributes.lastname}</p>
          <p>Email: {item.attributes.email}</p>
          <p>Reason: {item.attributes.reason}</p>
          <p>Number: {item.attributes.number}</p>
          <p>Created At: {new Date(item.attributes.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(item.attributes.updatedAt).toLocaleString()}</p>
          <p>Published At: {new Date(item.attributes.publishedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
