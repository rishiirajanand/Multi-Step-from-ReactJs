# Multi-Step Form with Validation and Local Storage

This project is a responsive multi-step form built with React.js. It includes data validation, error handling, and navigation controls. The form data is persisted to local storage, ensuring that user inputs are retained across sessions.

## Features

1. **Form Structure**:

   - Step 1: Personal Information (Name, Email, Phone)
   - Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
   - Step 3: Confirmation (Review all entered data)

2. **Navigation and Buttons**:

   - Tabbed navigation to switch between steps.
   - Disable the back button on the first step.
   - Disable the next button on the last step and replace it with a submit button.

3. **Validation**:

   - Client-side validation to ensure all fields are filled before allowing navigation to the next step.
   - Display appropriate error messages if fields are empty or invalid (e.g., email format).
   - Highlight the fields with errors.

4. **State Management**:

   - Manage form data using React state.
   - Use hooks like `useState` and `useEffect` where appropriate.
   - Ensure state updates reflect user inputs and form navigation.

5. **Local Storage**:

   - Persist entered data to local storage when the user navigates between steps.
   - Retrieve and pre-fill form fields if the user revisits the form.

6. **Responsive Design**:
   - Ensure the form is responsive and works well on desktop, tablet, and mobile screens.
   - Use Bootstrap for layout and responsiveness.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishiirajanand/Multi-Step-from-ReactJs.git
   cd multi-step-form
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Deployment

You can view the deployed application at: [Deployment Link](https://lustrous-crumble-371851.netlify.app/)
