# Ayu Mitra

Ayu Mitra is a health management application designed to help users manage their medical reports and prescriptions efficiently. Built with React and Tailwind CSS, this application offers a user-friendly interface with advanced features for report analysis, task management, and user profile management.

## Features

- **Report Analysis**: Upload and analyze prescriptions, blood reports, or any other medical documents. The application provides detailed descriptions and diagnoses of the uploaded reports.
- **Task Management**: Manage tasks related to your reports using Kanban cards. Tasks can be categorized as pending, in-progress, or completed, with drag-and-drop functionality for easy management.
- **Dashboard**: View and manage all the reports you’ve uploaded in one place through a comprehensive dashboard.
- **Profile Page**: A personalized profile page that is generated based on user onboarding information and stored in the database.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Drizzle ORM, Neon Console (Database)
- **Authentication**: Privy

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ayumitra.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ayumitra
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add your environment variables. For example:

    ```
    REACT_APP_PRIVY_KEY=your_privy_key
    REACT_APP_NEON_DATABASE_URL=your_neon_database_url
    ```

5. Start the development server:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Authentication**: Sign up or log in using Privy.
2. **Upload Reports**: Navigate to the report upload section to upload your prescriptions or medical reports.
3. **Analyze Reports**: View the detailed analysis and descriptions of the uploaded reports.
4. **Manage Tasks**: Use the Kanban board to track and manage tasks associated with your reports. Drag and drop tasks to update their status.
5. **View Dashboard**: Access the dashboard to see all your uploaded reports in one place.
6. **Update Profile**: Manage your profile information based on the onboarding data.

## Contributing

If you’d like to contribute to Ayu Mitra, please fork the repository and submit a pull request with your changes. Be sure to include tests for new features and bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [your email] or open an issue on GitHub.
