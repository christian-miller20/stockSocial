import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js";
import NewUserForm from "./NewUserForm.js";
// Define the parent component
// creating a default formData in parent componenet
const ParentComponent = () => {
    // Define state to store form input values
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        displayName: "",
    });

    // Handle input changes. gets triggered when onInput event is called. onInput event gets called whenever there is a change in the 
    // user input html boxes. [name] refers to the html attribute "name" in the forms. value refers to what user inputed. its updating 
    // form data to have the right inputs
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission. When the submit event happens, you have all the information required to create a new user so do it
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Call the createUser function with the formData
        try {
            const result = await createUser(formData);
            // Optionally, you can show a success message or redirect the user.
            console.log("User created successfully:", result);
        } catch (error) {
            console.error("Error creating user:", error);
            // Handle the error, such as showing an error message to the user.
        }
    };
    // pass the required information that child component should get from parent (this file) to child (NewUserForm)
    return html`
        <div>
            <!-- Pass props to the NewUserForm component -->
            <${NewUserForm}
                formData=${formData}
                handleInput=${handleInput}
                handleSubmit=${handleSubmit}
            />
        </div>
    `;
};
export default ParentComponent;
