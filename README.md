# Ayu Mitra

Ayu Mitra is a health management application designed to streamline the management of medical reports, prescriptions, and related tasks. Built with modern web technologies, this application provides a comprehensive solution for analyzing reports, organizing tasks, and managing user profiles.

## Features

- **Report Analysis**: 
  - Upload medical documents such as prescriptions, blood reports, or other diagnostic reports.
  - The application automatically analyzes the content of these documents, providing detailed descriptions and diagnoses based on the uploaded data.
  - Users can view the results of the analysis directly within the application.

- **Task Management**:
  - Organize your healthcare-related tasks using an intuitive Kanban board.
  - Tasks are categorized into "Pending," "In-Progress," and "Completed" columns.
  - The drag-and-drop functionality allows users to easily move tasks between different stages based on their progress.
  - Tasks can be created automatically based on the analysis of reports or manually added by the user.

- **Dashboard**:
  - A centralized dashboard provides an overview of all the reports uploaded by the user.
  - Users can quickly access their historical data, review previous analyses, and monitor their health trends over time.

- **Profile Page**:
  - A personalized profile page is generated based on the user’s onboarding information.
  - The profile is dynamically updated with data from the database, reflecting the user's medical history and preferences.
  - Users can update their profile information, which is securely stored and retrieved from the database.

## Tech Stack

- **Frontend**:
  - **React**: A powerful JavaScript library used to build the user interface of Ayu Mitra. React enables a responsive and dynamic user experience, with components that update in real-time as users interact with the application.
  - **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development. Tailwind CSS provides the styling and layout, ensuring a modern and consistent design across the application.

- **Backend**:
  - **Drizzle ORM**: A lightweight ORM (Object-Relational Mapping) used to interact with the database. Drizzle ORM simplifies database queries, making it easier to store, retrieve, and manage user data and medical reports within the application.
  - **Neon Console**: A cloud-based database hosting solution. Neon Console is used to securely store all user data, including uploaded reports, profile information, and task lists. It ensures data is accessible and reliable.

- **Authentication**:
  - **Privy**: Privy handles user authentication and ensures secure access to the application. It provides a seamless login and signup process, protecting user data with robust security measures.


 

    

## Usage

1. **Authentication**: Sign up or log in using Privy.
2. **Upload Reports**: Navigate to the report upload section to upload your prescriptions or medical reports.
3. **Analyze Reports**: View the detailed analysis and descriptions of the uploaded reports.
4. **Manage Tasks**: Use the Kanban board to track and manage tasks associated with your reports. Drag and drop tasks to update their status.
5. **View Dashboard**: Access the dashboard to see all your uploaded reports in one place.
6. **Update Profile**: Manage your profile information based on the onboarding data.
