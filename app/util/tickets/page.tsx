"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from "@/app/Store";

// Define the TypeScript interfaces for the ticket and response
interface Ticket {
  issued_to: string;
  order_number: number;
  date: string;
  ticket_type: string;
  _id: string;
  __v: number;
}

interface TicketResponse {
  ticket: Ticket;
}

const TicketDetails: React.FC = () => {
  const [ticketId, setTicketId] = useState<string>('');
  const [ticketDetails, setTicketDetails] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const loginToken = useStore((state) => state.loginToken);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get('q');

    if (id) {
        setTicketId(id);
    }   
  }, []);

  async function fetchTicketDetails(id: string) {
    try {
      setLoading(true)
      const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/ticket/qr/${id}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      setLoading(false)
      setTicketDetails(response.data)
    } catch (error) {
      console.error('We ran into a prorblem');
    }
  }

  useEffect(() => {
    if (ticketId) {
      fetchTicketDetails(ticketId);
    }
  }, [ticketId]);

  return (
    <div className='p-10 bg-white border-t-0 border-gray-700'>
      <input
        type='text'
        placeholder='Enter Ticket ID'
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
        className='mb-4 p-2 border rounded'
      />
      <button
        onClick={() => fetchTicketDetails(ticketId)}
        disabled={loading}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        {loading ? 'Loading...' : 'Get Ticket Details'}
      </button>

      {error && <p className='text-red-500 mt-4'>{error}</p>}
      {ticketDetails ? (
        <div className='mt-4 text-black'>
          <h2 className='text-xl font-bold'>Ticket Details</h2>
          <p><b>Issued To:</b> {ticketDetails.issued_to}</p>
          <p><b>Order Number:</b> {ticketDetails.order_number}</p>
          <p><b>Date:</b> {ticketDetails.date}</p>
          <p><b>Ticket Type:</b> {ticketDetails.ticket_type}</p>
        </div>
      ) : (
        <p className='mt-4 text-gray-500'>No ticket details available</p>
      )}
    </div>
  );
};

export default TicketDetails;
