import { Card, SparkAreaChart } from '@tremor/react';
import axios, { CancelTokenSource } from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const chartdata = [
  {
    month: 'Jan 21',
    Performance: 4000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
  },
  {
    month: 'May 21',
    Performance: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
  },
  {
    month: 'Jul 21',
    Performance: 3490,
  },
];

interface Codiac {
    _id: string; // Represents the unique identifier of the object
    firstname: string; // Represents the first name of the person
    lastname: string; // Represents the last name of the person
    number: number; // Represents the phone number of the person
    email: string; // Represents the email address of the person
    reason: string; // Represents the reason or purpose related to the person
    __v: number; // Represents the version key in MongoDB
}
export function SparkAreaUsage() {
  const [codiacs, setCodiacs] = useState<Codiac[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <Card className="mx-auto flex max-w-lg items-center gap-5 px-4 py-3.5">
      <SparkAreaChart
        data={chartdata}
        categories={['Performance']}
        index={'month'}
        colors={['emerald']}
        className="h-8 w-10 sm:h-10 sm:w-36"
      />
      <div className="flex items-center space-x-2.5">
        <div className="rounded bg-emerald-500 px-2 py-1 text-tremor-default font-medium text-white">
          <div>
            Codiacs
          </div>
          <div>
            <>{loading ?
              <Loader2  className='animate-spin' />
              : arrayLength 
            }</>
          </div>
        </div>
      </div>
    </Card>
  );
}