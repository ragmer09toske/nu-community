"use client"
import React, { useEffect, useState } from 'react'
import { Navigation } from '@/components/Navigation'
import axios, { CancelTokenSource } from 'axios'
  import DataGrid from './DataGrid';
import SideNav from './SideNav';

// Define the Codiac interface
interface Codiac {
  _id: string; // Represents the unique identifier of the object
  firstname: string; // Represents the first name of the person
  lastname: string; // Represents the last name of the person
  number: number; // Represents the phone number of the person
  email: string; // Represents the email address of the person
  reason: string; // Represents the reason or purpose related to the person
  __v: number; // Represents the version key in MongoDB
}

const Page = () => {
  const [codiacs, setCodiacs] = useState<Codiac[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let source: CancelTokenSource;

    const getAllCodiacs = async () => {
      setLoading(true);
      try {
        source = axios.CancelToken.source();
        const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers`, {
          cancelToken: source.token
        });
        setCodiacs(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.log(error);
        }
        setLoading(false);
      }
    };
    getAllCodiacs();

    return () => {
      if (source) {
        source.cancel('Component unmounted');
      }
    };
  }, []);

  const arrayLength = codiacs.length;

  return (
    <div className='pt-5`'>
      <SideNav />
      <DataGrid />
    </div>
  );
};

export default Page
