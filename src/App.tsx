import { Form, Textarea } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <Textarea
        id="message"
        name="message"
        label="Enter your message"
        required
        classes={{
          field: 'textarea',
          label: 'textarea__label',
          error: 'textarea__error-message',
        }}
        validation={{
          patternMismatch: 'Please match the requested format.',
          valueMissing: 'This field is required.',
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
