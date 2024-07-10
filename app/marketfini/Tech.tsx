"use client"
import { ScrollArea } from '@/components/ui/scroll-area';
import { BarList, Card } from '@tremor/react';
import axios from 'axios';
import { Github, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Webinarpeople {
    _id: string; // Represents the unique identifier of the object
    firstname: string;
    lastname: string;
    number: number;
    email: string;
    about: string;
    jobStatus: string;
    githubValue: number;
    reactValue: number;
    htmlValue: number;
    FacebookProfile: number;
    LinkInProfile: number;
    __v: number; // Represents the version key in MongoDB
}

export function BarListUsageExample() {
    const [loading, setLoading] = useState<boolean>(false);
    const [webinarpeople, setWebinarpeople] = useState<Webinarpeople[]>([]);

    useEffect(() => {
        const getAllCodiacsUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://nu-com-0e51cf02b2c8.herokuapp.com/webinar/registerers');
                setWebinarpeople(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        getAllCodiacsUsers();
    }, []);

    const data = webinarpeople.map(person => {
        if (!person) {
            console.error("Undefined person:", person);
            return [];
        }

        return [
            {
                name: `${person.firstname || 'Unknown'} ${person.lastname || 'Unknown'} - Github`,
                value: person.githubValue || 0,
                href: 'https://github.com',
                icon: function GithubIcon() {
                    return <Github />;
                },
            },
            {
                name: `${person.firstname || 'Unknown'} ${person.lastname || 'Unknown'} - React`,
                value: person.reactValue || 0,
                href: 'https://reactjs.org',
                icon: function ReactIcon() {
                    return (
                        <Image
                            src={"/react.png"}
                            width={23}
                            height={4}
                            alt='react'
                            className='invert'
                        />
                    );
                },
            },
            {
                name: `${person.firstname || 'Unknown'} ${person.lastname || 'Unknown'} - HTML + CSS`,
                value: person.htmlValue || 0,
                href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                icon: function HtmlIcon() {
                    return (
                        <Image
                            src={"/html.png"}
                            width={23}
                            height={4}
                            alt='html'
                            className='invert'
                        />
                    );
                },
            },
        ];
    }).flat();

    return (
        <Card className="mx-auto max-w-lg">
            <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Website Analytics</h3>
            <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
                <span>Name</span>
                <span>Rating</span>
            </p>
            {loading ? (
                <Loader2 className='animate-spin'/>
            ) : (
                <ScrollArea className='h-28'>
                    <BarList data={data} className="mt-2" />
                </ScrollArea>
            )}
        </Card>
    );
}
