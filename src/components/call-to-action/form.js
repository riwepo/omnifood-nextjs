"use client";

import { Button3 } from "../ui/buttons";
import FormInput from "./form-input";
import FormSelect from "./form-select";

const optionData = [
  { key: 1, value: "", text: "Please choose one option:" },
  { key: 2, value: "friends", text: "Friends and family" },
  { key: 3, value: "youtube", text: "YouTube video" },
  { key: 4, value: "podcast", text: "Podcast" },
  { key: 5, value: "ad", text: "Facebook ad" },
  { key: 6, value: "others", text: "Others" },
];

function Form() {
  return (
    <form
      className="cta-form grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2"
      name="sign-up"
      action="https://api.web3forms.com/submit"
      method="POST"
      id="form"
    >
      <FormInput
        id="full-name"
        type="text"
        label="Full Name"
        placeholder="John Smith"
      />
      <FormInput
        id="email"
        type="email"
        label="Email address"
        placeholder="me@example.com"
      />
      <FormSelect
        id="select-where"
        label="Where did you hear from us?"
        options={optionData}
      />
      <input
        type="hidden"
        name="subject"
        value="This will be the subject line in the email received."
      />
      <input
        type="hidden"
        name="access_key"
        value="cba6f135-bb8a-4cbb-8c5b-5a64b378a716"
      />
      {/* here will will redirect to a thankyou page that I havent built yet */}
      <input
        type="hidden"
        name="redirect"
        value="https://omnifood-nextjs-bc1sn2dlq-riwepo.vercel.app/"
      />

      <Button3 extraClasses="">Sign up now</Button3>
    </form>
  );
}

export default Form;
