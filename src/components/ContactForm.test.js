import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders without crashing", () => {
        render(<ContactForm />); 
  }); 

  test("testing for form texts", () => {
    const { getByText } = render(<ContactForm />);
  
    const firstName=getByText(/first name*/i);
    const lastName=getByText(/last name*/i);
    const email=getByText(/email/i);
    const message=getByText(/message/i);
  });

  /*test("testing for form Labels", () => {
    const { getByLabelText } = render(<ContactForm />);
  
    const first_Name=getByLabelText(/first name/i);
     const lastName=getByLabelText(/last name/);
    const email=getByLabelText(/email/i);
    const message=getByLabelText(/message/i); 
  })*/
   
  test("Test for firstname field",()=>{
    
      const{getByTestId}=render(<ContactForm/>);
      getByTestId("firstname");
  });

  test("Test for lastname field",()=>{
    const{getByTestId}=render(<ContactForm/>);
    getByTestId("lastname");
});

test("Test for email field",()=>{
    const{getByTestId}=render(<ContactForm/>);
    getByTestId("email");
});

test("Test for message field",()=>{
    const{getByTestId}=render(<ContactForm/>);
    getByTestId("message");
});

test("Changing first name input fields",()=>{
    const { getByTestId } = render(<ContactForm />);
    const firstName=getByTestId("firstname");
    fireEvent.change(firstName,{target:{value:"Priyanka"}});
      expect(firstName.value).toBe("Priyanka");
      
  });

  test("Changing last name input fields",()=>{
    const { getByTestId } = render(<ContactForm />);
    const lastName=getByTestId("lastname");
    fireEvent.change(lastName,{target:{value:"Sarkar"}});
      expect(lastName.value).toBe("Sarkar");
      
  });

  test("Changing email input fields",()=>{
    const { getByTestId } = render(<ContactForm />);
    const email=getByTestId("email");
    fireEvent.change(email,{target:{value:"test@testmail.com"}});
      expect(email.value).toBe("test@testmail.com");
    });

    test("Changing message input fields",()=>{
        const { getByTestId } = render(<ContactForm />);
        const message=getByTestId("message");
        fireEvent.change(message,{target:{value:"Hello"}});
          expect(message.value).toBe("Hello");
        });

        


