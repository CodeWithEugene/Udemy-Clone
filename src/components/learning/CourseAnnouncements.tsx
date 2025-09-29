import React from 'react';
import Icon from '../common/Icon';

const announcements = [
    {
        id: 1,
        instructor: 'Jose Portilla',
        date: '3 weeks ago',
        title: 'New Content Added - Pandas and Numpy!',
        content: '<p>Hi everyone,</p><p>Just wanted to let you know that I have added two new sections to the course covering the basics of the Pandas and Numpy libraries, essential tools for data science in Python. Please check them out and let me know if you have any feedback. Happy coding!</p>'
    },
    {
        id: 2,
        instructor: 'Jose Portilla',
        date: '2 months ago',
        title: 'Welcome to the Course!',
        content: '<p>A huge welcome to all the new students! I\'m thrilled to have you here. This course will take you from zero to hero in Python. If you have any questions, don\'t hesitate to use the Q&A section.</p><p>Let\'s get started!</p>'
    }
];

const CourseAnnouncements: React.FC = () => {
    return (
        <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Announcements</h2>
            <div className="space-y-8">
                {announcements.map(announcement => (
                    <div key={announcement.id} className="border-b pb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xl mr-4">
                                JP
                            </div>
                            <div>
                                <p className="font-bold">{announcement.instructor}</p>
                                <p className="text-sm text-gray-500">{announcement.date}</p>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{announcement.title}</h3>
                        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: announcement.content }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseAnnouncements;
