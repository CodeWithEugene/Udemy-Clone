import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const CourseNotes: React.FC = () => {
    return (
        <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Notes</h2>
                <Button variant="primary" size="sm">Create new note</Button>
            </div>

            <div className="flex items-center border border-gray-300 bg-white mb-6">
                <input
                    type="text"
                    placeholder="Search your notes"
                    className="w-full px-4 py-2 border-none focus:outline-none bg-transparent"
                />
                <button type="submit" className="p-2 text-gray-500 hover:text-gray-800">
                    <Icon type="search" className="h-5 w-5" />
                </button>
            </div>
            
            <div className="text-center py-16 border rounded-lg bg-gray-50">
                <p className="text-lg font-semibold text-gray-800">You don't have any notes yet.</p>
                <p className="text-gray-600 mt-2">Create notes at specific points in a lecture to remember key moments.</p>
            </div>
        </div>
    );
};

export default CourseNotes;
