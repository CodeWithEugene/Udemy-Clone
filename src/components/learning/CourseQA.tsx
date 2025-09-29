import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const questions = [
    {
        id: 1,
        title: "How do I set up a virtual environment for Python?",
        author: "John Doe",
        responses: 5,
        body: "I'm new to Python and I'm a bit confused about virtual environments. Can someone explain the best way to set one up on Windows? I've seen venv and conda mentioned."
    },
    {
        id: 2,
        title: "What's the difference between a list and a tuple?",
        author: "Jane Smith",
        responses: 8,
        body: "The course mentioned that lists are mutable and tuples are immutable, but what does that mean in a practical sense? When would I choose one over the other?"
    },
    {
        id: 3,
        title: "Error when trying to import pandas",
        author: "Sam Wilson",
        responses: 2,
        body: "I'm getting a `ModuleNotFoundError: No module named 'pandas'` even after I'm sure I installed it with pip. Any ideas what could be wrong? I'm using PyCharm."
    }
]

const CourseQA: React.FC = () => {
    return (
        <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center mb-6">
                <div className="flex-grow flex items-center border border-gray-300 bg-white">
                    <input
                        type="text"
                        placeholder="Search all course questions"
                        className="w-full px-4 py-2 border-none focus:outline-none bg-transparent"
                    />
                    <button type="submit" className="p-2 text-white bg-gray-800 hover:bg-gray-700">
                        <Icon type="search" className="h-5 w-5" />
                    </button>
                </div>
                <Button variant="secondary">Ask a new question</Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>All lectures</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Sort by most recent</option>
                    <option>Sort by most upvoted</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Questions I asked</option>
                    <option>Questions I haven't seen</option>
                </select>
            </div>

            <div className="space-y-4">
                {questions.map(q => (
                    <div key={q.id} className="flex items-start gap-4 p-4 border-b">
                         <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                            {q.author.charAt(0)}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-lg text-purple-700 hover:underline cursor-pointer">{q.title}</h3>
                            <p className="text-sm text-gray-600">
                                {q.author} • {q.responses} responses
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseQA;
