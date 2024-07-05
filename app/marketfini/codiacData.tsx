import { Card, ProgressCircle } from '@tremor/react'
import React, { useEffect, useState } from 'react'
import axios, { CancelTokenSource } from 'axios'
import { Loader2 } from 'lucide-react';

interface Codiac {
    _id: string; // Represents the unique identifier of the object
    firstname: string; // Represents the first name of the person
    lastname: string; // Represents the last name of the person
    number: number; // Represents the phone number of the person
    email: string; // Represents the email address of the person
    reason: string; // Represents the reason or purpose related to the person
    __v: number; // Represents the version key in MongoDB
}

const CodiacData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [codiacs, setCodiacs] = useState<Codiac[]>([]);

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
    <Card className="mx-auto max-w-sm">
        <div className="flex justify-start space-x-5 items-center">
            <ProgressCircle value={75} size="md">
            <span className="text-xs font-medium text-slate-700">{!loading ? arrayLength : <Loader2 className='animate-spin' />}</span>
            </ProgressCircle>
            <div>
            <p className="text-tremor-default flex text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                Number of codiacs ({!loading ? arrayLength : <Loader2 className='animate-spin' />})
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Spend management control
            </p>
            </div>
        </div>
    </Card>
  )
}

export default CodiacData