import { useState, useMemo } from 'react';
import axios, { AxiosResponse } from 'axios';

const Result = ({ file }: { file: File }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<string[]>([]);
    const url = useMemo(() => URL.createObjectURL(file), [file]);

    const getResult = async () => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            const response: AxiosResponse = await axios.post("http://127.0.0.1:8000/api/get_result", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setData(response.data.colors);
        } catch (error) {
            console.error("There was an error with the fetch operation:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex gap-8 justify-center items-center'>
            <div className='w-[50%] h-screen flex flex-col gap-4 justify-center items-center'>
                <img src={url} className='w-64 h-64 block mx-auto rounded-xl' />
                <button
                    className="bg-black text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8"
                    onClick={getResult}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Get Result"}
                </button>
            </div>
            {data.length > 0 && (
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto flex justify-center items-center">
                    <table className="w-full h-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr className="divide-x">
                                <th className="py-3 px-6">Color RGB</th>
                                <th className="py-3 px-6">Color</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {data.map((item, idx) => (
                                <tr key={idx} className="divide-x">
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                        <span>{idx + 1}</span>
                                        {item}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div style={{ backgroundColor: item }} className="w-5 h-5"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Result;
