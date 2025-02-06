import React from 'react'

export const Project = () => {
  return (
    <>
        <div className="flex flex-col w-full sm:w-[70%] px-6 sm:px-16 py-10">
            <div className="text-white text-[20px] w-full sm:text-[30px] font-bold">Projects</div>
            <br />
            <div className="text-white">
                <div className="text-[18px] sm:text-[25px] font-bold text-green-600 ">E-Commerce web-app (Flipkart Clone)</div>
                <br />
                <div className="text-sm sm:text-[15px]">
                Developed a feature-rich e-commerce platform replicating core functionalities of Flipkart, such as user authentication, dynamic product management, and secure checkout. This full-stack project offers category-based filtering, sorting, and search optimization, providing a seamless and scalable shopping experience.
                </div>
                <br />
                <div className="techniques">
                <div className="text-[16px] sm:text-xl font-bold text-green-600 py-2">Techniques Used :</div>
                <div className="font-normal">
                    <ul className='list-disc ps-[20px] text-sm sm:text-[15px]'>
                        <li>Frontend: React.js (with Redux Toolkit & Redux Persist)</li>
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB (with Mongoose)</li>
                        <li>State Management: Redux Toolkit.</li>
                        <li>MongoDB Query Optimization – Backend efficiently handles search queries using Mongoose's $regex for pattern matching.</li>
                    </ul>
                </div>
                </div>
                <br />
                <div className="features">
                <div className="text-[16px] sm:text-xl font-semibold text-green-600 py-2">Features :</div>
                <div className="font-normal">
                    <ul className='list-disc ps-[20px] text-sm sm:text-[15px]'>
                        <li>State Persistence & Optimization – Redux Persist ensures User data retention even after page refresh.</li>
                        <li>Product-Filtration – Users can search Products using keywords (e.g., Brands, Products or Types).</li>
                        <li>RESTful API with Express & MongoDB – Efficient backend services for smooth data handling.   </li>
                        <li>Persistent Cart & Wishlist Sync – Allow users to seamlessly add, remove, and transfer items between the cart and Wishlist, with all changes synced to the database. This ensures real-time updates across sessions and devices for a consistent shopping experience.</li>
                        <li>Secure Checkout Flow – User-friendly checkout process with order summary and delivery address confirmation and validation.</li>
                        <li>Address Options – User’s can add Multiple delivery addresses, and can choose where to deliver.</li>
                    </ul>
                </div>
                </div>
            </div>
            <br /><br />
            <div className="text-white">
                <div className="text-[18px] sm:text-[25px] font-bold text-green-600 ">Task Manager  &nbsp;&nbsp;
                <a className='hover:text-green-600 text-white font-semibold text-xs ' href="https://task-manager-4-react.onrender.com/">Visit Project</a>
                </div>
                <br />
                <div className="text-[15px]">
                The Task Manager App is a MERN stack-based web application designed to help users efficiently manage their daily tasks. It allows users to create, update, and track their tasks with features like categorization, status updates, and due dates.
                </div>
                <br />
                <div className="techniques">
                <div className="text-[16px] sm:text-xl font-semibold text-green-600 py-2">Techniques Used :</div>
                <div className="font-normal">
                    <ul className='list-disc ps-[20px]'>
                        <li>Frontend: React.js (with Redux Toolkit & Redux Persist)</li>
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB (with Mongoose)</li>
                        <li>State Management: Redux Toolkit.</li>
                        <li>MongoDB Query Optimization – Backend efficiently handles search queries using Mongoose's $regex for pattern matching.</li>
                        <li>Hosting – Used Render for Hosting Backend and frontend, Hosted Database with MongoDB-Atlas.</li>
                    </ul>
                </div>
                </div>
                <br />
                <div className="features">
                <div className="text-[16px] sm:text-xl font-semibold text-green-600 py-2">Features :</div>
                <div className="font-normal">
                <ul className='list-disc ps-[20px]'>
                        <li>User Authentication - Users can sign up, log in, and manage tasks securely.</li>
                        <li>Redux State Management - (If used) Handles user authentication and tasks efficiently.</li>
                        <li>Users can add their Tasks, with its Priority Level, assigned member and Deadline date. </li>
                        <li>Keyword-Based Search – Users can search tasks using keywords (e.g., task title or description).</li>
                        <li>MongoDB Query Optimization – Backend efficiently handles search queries using Mongoose's $regex for pattern matching.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </>    
    )
}
